import {
  MOST_SELL_PRODUCTS_KEY,
  RECENT_PRODUCTS_KEY,
  RECOMMENDED_PRODUCTS_KEY,
  SAVE_PRODUCTS_KEY
} from '@/constants/queries';
import { mainBanners } from '@/constants/banners';
import {
  mostSellProducts,
  recentProducts,
  recommendedProducts,
  saveProducts
} from '@/constants/products';

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
