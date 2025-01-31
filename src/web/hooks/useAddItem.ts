import { FieldErrors, FieldValues, UseFormReset } from "react-hook-form";
import { ItemRepositoryImplementation } from "../../data/repositories/ItemRepositoryImplementation";
import { AddItem } from "../../domain/useCases/AddItem";
import { useCallback, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { Item } from "../../domain/entities/Item";

const itemRepository = new ItemRepositoryImplementation();
const addItemUseCase = new AddItem(itemRepository);

export const useAddItem = (reset: UseFormReset<FieldValues>, setLocalItems: React.Dispatch<React.SetStateAction<Item[]>>) => {
 const queryClient = useQueryClient();
 const [existingItem, setExistingItem] = useState(false);

 const { mutate, isLoading } = useMutation((item: Item) => addItemUseCase.execute(item), {
  onSuccess: (item) => {
   setLocalItems((prevItems) => {
    if (prevItems.some(existingItem => existingItem.title === item.title)) {
     setExistingItem(true);
     return prevItems;
    }

    setExistingItem(false);
    return [item, ...prevItems];
   });
   queryClient.invalidateQueries('items');
  },
 });

 const onSubmit = useCallback((data: Item) => {
  if (existingItem) return;
  mutate(data)
  reset();
 }, [mutate, reset]);

 const duplicateItemError: FieldErrors = {
  root: {
    type: undefined,
    message: "The article already exists, please change title.",
  } as any,
};

 return { onSubmit, isLoading, existingItem, duplicateItemError };
};