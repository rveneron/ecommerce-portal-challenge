import React from 'react';
import { ClassNameProps } from '@/types/classnames-props.type';
import styles from './styles.module.css';
import { cn } from '@/lib/utils';
import { TProps } from '@/types/t-props.type';
import ProductCard from '@/modules/home/components/product-card/product-card.component';
import { IProduct } from '@/interfaces/product';
import Image from 'next/image';
import { IBanner } from '@/interfaces/media.interface';
import Carousel from '@/components/core/carousel/carousel.component';

type Props = ClassNameProps &
  TProps & {
    banner?: IBanner | null;
    products: IProduct[];
  };

const RecentProductSection = ({ className, products, t, banner }: Props) => {
  const carouselProducts = [
    !!banner?.desktop?.url && (
      <Image
        alt={banner.name || ''}
        src={banner?.desktop?.url}
        width={banner?.desktop?.width || 570}
        height={banner?.desktop.height || 405}
        className={'recent-desktop-banner'}
        key={banner.name || ''}
      />
    ),
    ...products.map((product: IProduct) => (
      <ProductCard product={product} key={product._id} t={t} />
    ))
  ];

  return (
    <div className={cn(styles.container, className)}>
      <div className="recents-products-section-title">
        {t('common:recentsProductsSection.title')}
      </div>
      {banner?.mobile?.url && (
        <Image
          alt={banner.name || ''}
          src={banner?.mobile?.url}
          width={banner?.mobile?.width || 391}
          height={banner?.mobile?.height || 278}
          className={'recent-mobile-banner'}
        />
      )}
      <Carousel showButtons={false} slides={carouselProducts} />
    </div>
  );
};

export default RecentProductSection;
