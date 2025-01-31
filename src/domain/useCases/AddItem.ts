import { ItemRepository } from '../repositories/ItemRepository';
import { Item } from '../entities/Item';

export class AddItem {
  constructor(private itemRepository: ItemRepository) {}

  async execute(item: Item): Promise<Item> {
    return this.itemRepository.addItem(item);
  }
}