import { SearchParams } from '@/interfaces/search-body.interface';
import { SearchResponse } from '@/interfaces/search-response.interface';
import { ApiResponse } from '@/types/api.type';
import { saveProducts } from '@/data/products';
import { IProduct } from '@/interfaces/product';

export const getSaveProducts = (
  params: SearchParams = {}
): Promise<ApiResponse<SearchResponse<IProduct>>> => {
  return Promise.resolve({ data: { data: saveProducts, total: saveProducts.length } });
};
