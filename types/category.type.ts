import { ReactNode } from 'react';
import { MediaItem } from '@/interfaces/media.interface';

export type Category = {
  icon: ReactNode;
  name: string;
  description?: string;
  order: number;
  slug: string;
  _id: string;
  imagePath?: MediaItem;
};
