import { Item } from '../entities/Item';

export interface ItemRepository {
  getItems(page:number, limit:number): Promise<Item[]>;
  addItem(item: Item): Promise<Item>;
}