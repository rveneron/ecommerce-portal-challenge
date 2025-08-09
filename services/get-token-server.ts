'use server';
import { GetTokenFunction } from '@/data/services/api-service.service';
import { ISession } from '@/definitions/core/session';
import { getServerAuthSession } from '@/lib/auth';
import { redirect } from 'next/navigation';

export const getAuthToken: GetTokenFunction = async () => {
  const session: ISession | null = await getServerAuthSession();
  const accessToken = session?.accessToken;

  if (session?.refreshAccessTokenError) {
    await fetch('/api/auth/logout', { method: 'GET' });

    redirect('/auth/sign-in');
  }

  return accessToken;
};
