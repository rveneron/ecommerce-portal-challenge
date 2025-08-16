import { IMediaItem } from '@/interfaces/media.interface';

export type Category = {
  name: string;
  description: string;
  content: string;
  image: IMediaItem;
  order: number;
  slug: string;
  _id?: string;
};
