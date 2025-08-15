import { CATEGORIES_KEY } from '@/constants/queries';

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://botifarmastore.vercel.app';
const revalidate = 7200; // Revalida cada 2 horas;

export const getCategories = async () => {
  const res = await fetch(`${BASE_URL}/api/categories`, {
    next: { revalidate, tags: [CATEGORIES_KEY] }
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return Response.json(res.json());
};
