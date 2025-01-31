import { ItemRepository } from '../repositories/ItemRepository';
import { Item } from '../entities/Item';

export class GetItems {
  constructor(private itemRepository: ItemRepository) {}

  async execute(page:number, limit:number): Promise<Item[]> {
    return this.itemRepository.getItems(page, limit);
  }
}