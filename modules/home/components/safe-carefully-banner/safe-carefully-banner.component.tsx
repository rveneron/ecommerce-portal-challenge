import React, { memo } from 'react';
import { cn } from '@/lib/utils';
import styles from './styles.module.css';
import { ClassNameProps } from '@/types/classnames-props.type';
import { TProps } from '@/types/t-props.type';
import Link from 'next/link';
import { IProduct } from '@/interfaces/product';
import SmallProductsCarousel from '@/modules/home/components/safe-carefully-banner/products-carousel.component';

type Props = ClassNameProps &
  TProps & {
    discount: string;
    products: IProduct[];
  };

const SafeCarefullyBanner = ({ className, t, products, discount = '-50%' }: Props) => {
  return (
    <div className={cn(styles.container, className)}>
      <div className={'safe-carefully-data'}>
        <div className={'data-text'}>
          <div className="safe-carefully-title">{t('common:safeCarefully.title')}</div>
          <div className="safe-carefully-subtitle">
            <span>{t('common:safeCarefully.subtitle.part1')}</span>
            <Link href={'/ofertas'}>{t('common:safeCarefully.subtitle.part2')}</Link>
          </div>
        </div>
        <div className="safe-carefully-discount">{discount}</div>
      </div>
      <SmallProductsCarousel products={products} />
    </div>
  );
};

export default memo(SafeCarefullyBanner);
