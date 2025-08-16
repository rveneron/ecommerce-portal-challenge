import { IMediaItem } from '@/interfaces/media.interface';
import { PUBLIC_APP_URL } from '@/constants';

export const getImageAbsolutePath = (image: IMediaItem) => {
  return image.url;
  // return `${PUBLIC_APP_URL}/${image.url}`.replace('//', '/');
};
