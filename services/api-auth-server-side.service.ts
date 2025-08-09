import { ApiService } from '@/data/services/api-service.service';
import { getTokenForAuth } from '@/data/services/get-token-auth-server';

export const ApiAuthServerSide = new ApiService(getTokenForAuth);
