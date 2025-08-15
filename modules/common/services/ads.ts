import { MAIN_BANNERS_KEY, RECENT_BANNER_KEY, SECONDARY_BANNERS_KEY } from '@/constants/queries';

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://botifarmastore.vercel.app';
const revalidate = 7200; // Revalida cada 2 horas;

export const getMainBanners = async () => {
  const res = await fetch(`${BASE_URL}/api/banners/main`, {
    next: { revalidate, tags: [MAIN_BANNERS_KEY] }
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return Response.json(res.json());
};

export const getRecentBanner = async () => {
  const res = await fetch(`${BASE_URL}/api/banners/recent`, {
    next: { revalidate, tags: [RECENT_BANNER_KEY] }
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return Response.json(res.json());
};

export const getSecondaryBanners = async () => {
  const res = await fetch(`${BASE_URL}/api/banners/secondary`, {
    next: { revalidate, tags: [SECONDARY_BANNERS_KEY] }
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return Response.json(res.json());
};
