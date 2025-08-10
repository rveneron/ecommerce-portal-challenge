import { ApiResponse } from '@/types/api.type';
import { SearchResponse } from '@/interfaces/search-response.interface';
import { mainAds, secondaryAds } from '@/data/secondaryAds';
import { IBanner } from '@/interfaces/media.interface';

export const getMainAds = (): Promise<ApiResponse<SearchResponse<IBanner>>> => {
  return Promise.resolve({ data: { data: mainAds, total: mainAds.length } });
};

export const getSecondaryAds = (): Promise<ApiResponse<SearchResponse<IBanner>>> => {
  return Promise.resolve({ data: { data: secondaryAds, total: secondaryAds.length } });
};
