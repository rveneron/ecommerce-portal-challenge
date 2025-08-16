import { IRate } from '@/interfaces/rate';
import { IMediaItem } from '@/interfaces/media.interface';
import { Category } from '@/types/category.type';

export interface IProduct {
  _id: string;
  name: string;
  slug: string;
  description: string;
  content: string;
  rate?: IRate;
  price: number;
  image?: IMediaItem;
  discount?: string;
  createdAt: string;
  category: Category;
}
