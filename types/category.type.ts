import { ReactNode } from 'react';
import { IMediaItem } from '@/interfaces/media.interface';

export type Category = {
  icon: ReactNode;
  name: string;
  description?: string;
  order: number;
  slug: string;
  _id: string;
  imagePath?: IMediaItem;
};
