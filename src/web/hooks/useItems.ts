import { useQuery } from 'react-query';
import { GetItems } from '../../domain/useCases/GetItems';
import { ItemRepositoryImplementation } from '../../data/repositories/ItemRepositoryImplementation';
import { Item } from '../../domain/entities/Item';
import { useCallback, useState } from 'react';

const itemRepository = new ItemRepositoryImplementation();
const getItemsUseCase = new GetItems(itemRepository);

export const useItems = () => {
  const [localItems, setLocalItems] = useState<Item[]>([]);
  const [page, setPage] = useState(1);

  const itemsPerPage = 3;

  const { data: items, error } = useQuery(['items', page], () => getItemsUseCase.execute(page, itemsPerPage), {
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
    keepPreviousData: true,
  });

  //paginacion del localItems
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedItems = localItems.slice(startIndex, endIndex);
  const totalPages = Math.ceil(localItems.length / itemsPerPage);

  const nextPage = useCallback(() => {
    setPage(page + 1);
  }, [page]);

  const prevPage = useCallback(() => {
    setPage(Math.max(page - 1, 1))
  }, [page]);

  return { localItems, itemsPerPage, totalPages, nextPage, prevPage, data: localItems.length > 0 ? paginatedItems : items, error, setLocalItems, page }
};

