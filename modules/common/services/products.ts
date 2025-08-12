import { SearchParams } from '@/interfaces/search-body.interface';
import { SearchResponse } from '@/interfaces/search-response.interface';
import { ApiResponse } from '@/types/api.type';
import { saveProducts, recommendedProducts } from '@/data/products';
import { IProduct } from '@/interfaces/product';

export const getSaveProducts = (
  params: SearchParams = {}
): Promise<ApiResponse<SearchResponse<IProduct>>> => {
  return Promise.resolve({ data: { data: saveProducts, total: saveProducts.length } });
};

export const getRecommendedProducts = (
  params: SearchParams = {}
): Promise<ApiResponse<SearchResponse<IProduct>>> => {
  return Promise.resolve({
    data: { data: recommendedProducts, total: recommendedProducts.length }
  });
};

export const getMostSellProducts = (
  params: SearchParams = {}
): Promise<ApiResponse<SearchResponse<IProduct>>> => {
  return Promise.resolve({
    data: { data: recommendedProducts, total: recommendedProducts.length }
  });
};

export const getRecentsProducts = (
  params: SearchParams = {}
): Promise<ApiResponse<SearchResponse<IProduct>>> => {
  const result = recommendedProducts.slice(0, 8);
  return Promise.resolve({
    data: { data: result, total: result.length }
  });
};
