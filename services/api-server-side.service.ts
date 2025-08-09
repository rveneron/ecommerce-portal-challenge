import { ApiService } from '@/data/services/api-service.service';
import { getAuthToken } from '@/data/services/get-token-server';

export const ApiServerSide = new ApiService(getAuthToken);
