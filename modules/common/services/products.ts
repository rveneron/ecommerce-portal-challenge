import {
  MOST_SELL_PRODUCTS_KEY,
  RECENT_PRODUCTS_KEY,
  RECOMMENDED_PRODUCTS_KEY,
  SAVE_PRODUCTS_KEY
} from '@/constants/queries';

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://botifarmastore.vercel.app';
const revalidate = 7200; // Revalida cada 2 horas;

export const getSaveProducts = async () => {
  const res = await fetch(`${BASE_URL}/api/products/save`, {
    next: { revalidate, tags: [SAVE_PRODUCTS_KEY] }
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

export const getRecommendedProducts = async () => {
  const res = await fetch(`${BASE_URL}/api/products/recommended`, {
    next: { revalidate, tags: [RECOMMENDED_PRODUCTS_KEY] }
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

export const getMostSellProducts = async () => {
  const res = await fetch(`${BASE_URL}/api/products/most-sell`, {
    next: { revalidate, tags: [MOST_SELL_PRODUCTS_KEY] }
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

export const getRecentsProducts = async () => {
  const res = await fetch(`${BASE_URL}/api/products/recents`, {
    next: { revalidate, tags: [RECENT_PRODUCTS_KEY] }
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};
