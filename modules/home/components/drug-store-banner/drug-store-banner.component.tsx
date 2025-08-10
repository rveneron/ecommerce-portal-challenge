import React, { memo } from 'react';
import { cn } from '@/lib/utils';
import styles from './styles.module.css';
import { ClassNameProps } from '@/types/classnames-props.type';
import Banner from '@/components/core/banner/banner.component';
import { IBanner } from '@/interfaces/media.interface';
import { TProps } from '@/types/t-props.type';
import Link from 'next/link';

type Props = ClassNameProps & TProps;

const banner: IBanner = {
  name: 'Drugs Banner',
  desktop: {
    url: '/images/drugs-desktop-banner.webp',
    thumb: '/images/drugs-desktop-banner.webp',
    width: 825,
    height: 85
  },
  mobile: {
    url: '/images/drugs-mobile-banner.webp',
    thumb: '/images/drugs-mobile-banner.webp',
    width: 214,
    height: 188
  }
};

const DrugStoreBanner = ({ className, t }: Props) => {
  return (
    <div className={cn(styles.container, className)}>
      <Banner banner={banner} className={'store-trust-image'} />
      <div className={'store-trust-data'}>
        <div className="store-trust-title">{t('common:drugStoreTrust.title')}</div>
        <div className="store-trust-subtitle">
          <span>{t('common:drugStoreTrust.subtitle.part1')}</span>
          <Link href={'/catalogo'}>{t('common:drugStoreTrust.subtitle.part2')}</Link>
        </div>
      </div>
    </div>
  );
};

export default memo(DrugStoreBanner);
