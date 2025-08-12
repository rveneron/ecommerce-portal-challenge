import React from 'react';
import { ClassNameProps } from '@/types/classnames-props.type';
import Carousel from '@/components/core/carousel/carousel.component';
import styles from './styles.module.css';
import { cn } from '@/lib/utils';
import { TProps } from '@/types/t-props.type';
import { IProduct } from '@/interfaces/product';
import ProductCard from '@/modules/home/components/product-card/product-card.component';

type Props = ClassNameProps &
  TProps & {
    products: IProduct[];
  };

const MostSellList = ({ className, products, t }: Props) => {
  return (
    <div className={cn(styles.container, className)}>
      <div className="product-section-title">{t('common:mostSellProductsSection.title')}</div>
      <Carousel
        slides={products.map((product: IProduct) => (
          <ProductCard product={product} key={product._id} t={t} className={'min-w-[276px]'} />
        ))}
      />
    </div>
  );
};

export default MostSellList;
