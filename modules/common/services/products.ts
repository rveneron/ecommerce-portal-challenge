import {
  allProducts,
  mostSellProducts,
  recentProducts,
  recommendedProducts,
  saveProducts
} from '@/constants/products';
import { IProduct } from '@/interfaces/product';
import { Category } from '@/types/category.type';

export const getSaveProducts = async () => {
  const res = new Response(JSON.stringify(saveProducts), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return await res.json();
};

export const getRecommendedProducts = async () => {
  const res = new Response(JSON.stringify(recommendedProducts), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return await res.json();
};

export const getMostSellProducts = async () => {
  const res = new Response(JSON.stringify(mostSellProducts), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return await res.json();
};

export const getRecentsProducts = async () => {
  const res = new Response(JSON.stringify(recentProducts), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return await res.json();
};

export const getProductBySlug = async (slug: string) => {
  const product = allProducts.find((cat) => cat.slug === slug);

  let res;

  if (product) {
    res = new Response(JSON.stringify(product), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } else {
    res = new Response(JSON.stringify({}), {
      status: 404,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  return (await res.json()) as IProduct;
};

export const getProductsByCategory = async (category: Category) => {
  const products = allProducts.filter((product) => product.category.slug === category.slug);
  const res = new Response(JSON.stringify(products), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
  return (await res.json()) as IProduct[];
};

export const getSimilarsProducts = async (slug: string) => {
  const products = allProducts.filter((product) => product.slug !== slug);

  const res = new Response(JSON.stringify(products), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });

  return (await res.json()) as IProduct[];
};
