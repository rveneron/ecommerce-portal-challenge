import { ApiResponse, AuthCredential, AuthResult } from '@/definitions/core/auth.interfaces';
import { API_AUTH } from '@/config/service-path.config';
import { RequestConfig } from './api-service.service';
import { ApiAuthServerSide } from '@/data/services/api-auth-server-side.service';

export const signIn = (data: AuthCredential): Promise<ApiResponse<AuthResult>> => {
  return ApiAuthServerSide.post(`${API_AUTH}/auth/login`, data);
};

export const getMe = (config?: RequestConfig): Promise<ApiResponse<AuthResult>> => {
  return ApiAuthServerSide.get(`${API_AUTH}/users/me`, config);
};
