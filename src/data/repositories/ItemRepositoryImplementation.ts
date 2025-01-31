import { ItemRepository } from '../../domain/repositories/ItemRepository';
import { Item } from '../../domain/entities/Item';
import { apiClient } from '../api/apiClient';

export class ItemRepositoryImplementation implements ItemRepository {
  async getItems(page: number = 1, limit: number = 3): Promise<Item[]> {
    const response = await apiClient.get('/posts', {
      params: {
        _page: page,
        _limit: limit
      }
    });
    return response.data;
  }

  async addItem(item: Item): Promise<Item> {
    const response = await apiClient.post('/posts', item);
    return response.data;
  }
}