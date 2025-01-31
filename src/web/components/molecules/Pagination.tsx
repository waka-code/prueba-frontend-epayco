import Button from '../atoms/Button';

interface PaginationProps {
 page: number;
 hasNextPage?: boolean;
 prevPage: () => void;
 nextPage: () => void;
}

const Pagination: React.FC<PaginationProps> = ({ page, hasNextPage, nextPage, prevPage }) => {

 return (
  <div className="flex justify-between items-center">
   <Button onClick={prevPage} textColor='text-black' color={page === 1 ? 'bg-transparent' : 'bg-white'} label={'Previous'} type={"button"} disabled={page === 1} />
   {/* <span className='text-lg text-gray-500'>Page {page}</span> */}
   <Button onClick={nextPage} label={'Next'} textColor='text-black' color={!hasNextPage ? 'bg-transparent' : 'bg-white'} type={"button"} disabled={!hasNextPage} />
  </div>
 );
};

export default Pagination;