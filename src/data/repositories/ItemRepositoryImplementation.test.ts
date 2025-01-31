import { ItemRepositoryImplementation } from './ItemRepositoryImplementation';
import { apiClient } from '../api/apiClient';
import { Item } from '../../domain/entities/Item';

jest.mock('../api/apiClient');

describe('ItemRepositoryImplementation', () => {
  let itemRepository: ItemRepositoryImplementation;

  beforeEach(() => {
    itemRepository = new ItemRepositoryImplementation();
  });

  it('should fetch items with pagination', async () => {
    const mockItems: Item[] = [
      { id: 1, title: 'Item 1', body: 'Content 1' },
      { id: 2, title: 'Item 2', body: 'Content 2' },
      { id: 3, title: 'Item 3', body: 'Content 3' },
      { id: 4, title: 'Item 4', body: 'Content 4' }
    ];

    (apiClient.get as jest.Mock).mockResolvedValue({ data: mockItems });

    const items = await itemRepository.getItems(1, 4);

    expect(apiClient.get).toHaveBeenCalledWith('/posts', {
      params: { _page: 1, _limit: 4 }
    });
    expect(items).toEqual(mockItems);
  });

  it('should add a new item', async () => {
    const newItem: Item = { id: 5, title: 'New Item', body: 'New Content' };

    (apiClient.post as jest.Mock).mockResolvedValue({ data: newItem });

    const addedItem = await itemRepository.addItem(newItem);

    expect(apiClient.post).toHaveBeenCalledWith('/posts', newItem);
    expect(addedItem).toEqual(newItem);
  });
});
