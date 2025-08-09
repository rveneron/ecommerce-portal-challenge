import { GetTokenFunction } from '@/data/services/api-service.service';
import { getSession } from 'next-auth/react';
import { ISession } from '@/definitions/core/session';
import { logout } from '@/hooks/use-logout';

export const getAuthToken: GetTokenFunction = async () => {
  const session: ISession = (await getSession()) || { expires: '1/24' };
  if (session?.refreshAccessTokenError) {
    await logout();
  }
  return session?.accessToken;
};
