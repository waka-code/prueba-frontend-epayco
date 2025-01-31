import { Items } from '../components/Item';
import { Item } from '../../domain/entities/Item';

interface ItemListProps {
 items: Item[] | undefined;
}

export const ItemList = ({ items }: ItemListProps) => {
 return (
  <div className='flex flex-col gap-3 cursor-pointer'>
   {items && items.map(item => (
    <Items
     key={item.id}
     title={item.title}
     body={item.body}
    />
   ))}
  </div>
 );
};