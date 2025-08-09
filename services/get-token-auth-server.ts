'use server';
import { GetTokenFunction } from '@/data/services/api-service.service';
import { getCookie } from '@/app/actions/cookies';
import { __X_REFRESH_TOKEN_ERROR__ } from '@/config/cookie.config';
import { redirect } from 'next/navigation';

export const getTokenForAuth: GetTokenFunction = async () => {
  const refreshAccessTokenError = await getCookie(__X_REFRESH_TOKEN_ERROR__);
  const accessToken = await getCookie('__access_token__');

  if (refreshAccessTokenError && refreshAccessTokenError === 'true') {
    await fetch('/api/auth/logout', { method: 'GET' });

    redirect('/auth/sign-in');
  }

  return accessToken;
};
