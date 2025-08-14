import React, { memo } from 'react';
import { cn } from '@/lib/utils';
import styles from './styles.module.css';
import { ClassNameProps } from '@/types/classnames-props.type';
import { IBanner } from '@/interfaces/media.interface';
import Banner from '@/components/core/banner/banner.component';

type Props = ClassNameProps & {
  ads: IBanner[];
  loading?: 'eager' | 'lazy';
  priority?: boolean;
};

const emptyAd: IBanner = {
  name: 'No Imagen',
  desktop: {
    url: '/images/no_image_available.webp',
    thumb: '/images/no_image_available.webp',
    width: 469,
    height: 227
  },
  mobile: {
    url: '/images/no_image_available.webp',
    thumb: '/images/no_image_available.webp',
    width: 390,
    height: 190
  }
};

const Gallery = ({ className, ads, loading = 'eager', priority = true }: Props) => {
  if (!ads.length) return null;

  return (
    <div className={cn(styles.container, className)}>
      <Banner
        banner={ads[0]}
        desktopClassName={'desktop-banner'}
        mobileClassName={'mobile-banner'}
        className={'flex-1'}
        priority={priority}
        loading={loading}
      />
      <div className="thumbs-container">
        <Banner
          banner={ads?.[1] || emptyAd}
          desktopClassName={'desktop-banner'}
          mobileClassName={'mobile-banner'}
          loading={loading}
        />
        <Banner
          banner={ads?.[2] || emptyAd}
          desktopClassName={'desktop-banner'}
          mobileClassName={'mobile-banner'}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default memo(Gallery);
