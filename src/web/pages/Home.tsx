import { useForm } from 'react-hook-form';
import { Form } from '../components/molecules/Form';
import { useItems } from '../hooks/useItems';
import { ItemList } from '../views/ItemListView';
import Pagination from '../components/molecules/Pagination';
import { useAddItem } from '../hooks/useAddItem';

export const Home = () => {
 const { data: items, error, setLocalItems, page, localItems, itemsPerPage, nextPage, prevPage, totalPages } = useItems();
 const { register, handleSubmit, reset, formState: { errors } } = useForm();
 const { onSubmit, isLoading: loading, existingItem, duplicateItemError } = useAddItem(reset, setLocalItems);

 if (error) {
  if (error instanceof Error) {
   return <div>Error: {error.message}</div>;
  } else {
   return <div>Error: Unknown error occurred</div>;
  }
 }

 return (
  <div className='flex gap-8 flex-col items-center p-12 bg-blue-50 h-[100vh]'>
   <div className='bg-white rounded-lg p-6 h-auto flex flex-col gap-4 mx-h-96 border-none w-[1000px] mx-w-[2000px] shadow-lg'>
    <h1 className='font-semibold text-4xl'>Add New Item</h1>
    <Form onSubmit={onSubmit} handleSubmit={handleSubmit} errors={existingItem ? duplicateItemError : errors} register={register} type={"submit"} />
   </div>
   <div className='flex flex-col gap-8 w-[1000px] mx-w-[2000px] h-96'>
    <h2 className='font-semibold text-4xl'>Items List</h2>
    {loading ? (
     <div className='text-2xl flex items-center justify-center'>Loading...</div>
    ) : (
     <ItemList items={items} />
    )}
    <Pagination
     page={page}
     prevPage={prevPage}
     nextPage={nextPage}
     hasNextPage={(localItems.length <= 3 && page < totalPages) || (items && items.length === itemsPerPage)}
    />
   </div>
  </div>
 );
};