import { IRate } from '@/interfaces/rate';
import { IMediaItem } from '@/interfaces/media.interface';

export interface IProduct {
  _id: string;
  name: string;
  slug: string;
  description: string;
  rate?: IRate;
  price: number;
  image?: IMediaItem;
}
