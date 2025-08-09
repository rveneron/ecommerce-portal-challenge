import { SearchParams } from '@/interfaces/search-body.interface';
import { SearchResponse } from '@/interfaces/search-response.interface';
import { ApiResponse } from '@/types/api.type';
import { ApiServerSide } from '@/services/api-server-side.service';
import { Category } from '@/types/category.type';

export const categories = (
  params: SearchParams = {}
): Promise<ApiResponse<SearchResponse<Category>>> => {
  return ApiServerSide.post(`${'dgd'}/category/search`, params, {
    next: { tags: ['category-list'] }
  });
};
