import { categories } from '@/constants/categories';

export const getCategories = async () => {
  const res = new Response(JSON.stringify(categories), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return await res.json();
};
