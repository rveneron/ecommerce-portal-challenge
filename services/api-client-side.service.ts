import { ApiService } from '@/data/services/api-service.service';
import { getAuthToken } from '@/data/services/get-token-client';

export const ApiClientSide = new ApiService(getAuthToken);
