import { mainBanners, recentBanner, secondaryBanners } from '@/constants/banners';

export const getMainBanners = async () => {
  const res = new Response(JSON.stringify(mainBanners), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return await res.json();
};

export const getRecentBanner = async () => {
  const res = new Response(JSON.stringify(recentBanner), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return await res.json();
};

export const getSecondaryBanners = async () => {
  const res = new Response(JSON.stringify(secondaryBanners), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return await res.json();
};
