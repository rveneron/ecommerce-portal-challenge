import { categories } from '@/constants/categories';
import { Category } from '@/types/category.type';

export const getCategories = async () => {
  const res = new Response(JSON.stringify(categories), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return await res.json() as Category[];
};

export const getCategoryBySlug = async (slug: string) => {
  const category = categories.find((cat) => cat.slug === slug);

  let res;

  if (category) {
    res = new Response(JSON.stringify(category), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } else {
    res = new Response(JSON.stringify({}), {
      status: 404,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  return await res.json() as Category;
};
