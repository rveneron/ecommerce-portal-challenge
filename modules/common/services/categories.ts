import { SearchParams } from '@/interfaces/search-body.interface';
import { SearchResponse } from '@/interfaces/search-response.interface';
import { ApiResponse } from '@/types/api.type';
import { Category } from '@/types/category.type';

export const getCategories = (
  params: SearchParams = {}
): Promise<ApiResponse<SearchResponse<Category>>> => {
  return Promise.resolve({ data: { data: [], total: 0 } });
};
