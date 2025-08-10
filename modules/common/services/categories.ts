import { SearchParams } from '@/interfaces/search-body.interface';
import { SearchResponse } from '@/interfaces/search-response.interface';
import { ApiResponse } from '@/types/api.type';
import { Category } from '@/types/category.type';
import { categories } from '@/data/categories';

export const getCategories = (
  params: SearchParams = {}
): Promise<ApiResponse<SearchResponse<Category>>> => {
  return Promise.resolve({ data: { data: categories, total: categories.length } });
};
