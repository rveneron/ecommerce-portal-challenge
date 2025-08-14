import React from 'react';
import { ClassNameProps } from '@/types/classnames-props.type';
import Carousel from '@/components/core/carousel/carousel.component';
import styles from './styles.module.css';
import { cn } from '@/lib/utils';
import { TProps } from '@/types/t-props.type';
import { IProduct } from '@/interfaces/product';
import ProductCard from '@/modules/home/components/product-card/product-card.component';
import { ChildrenListProps } from '@/types/children-props.type';
import ProductCardSkeleton from '@/modules/home/components/product-card/product-card-skeleton.component';

type Props = ClassNameProps &
  TProps & {
    isLoading?: boolean;
    products?: IProduct[];
  };

const MostSellList = ({ className, products = [], t, isLoading }: Props) => {
  const Wrapper = ({ children }: ChildrenListProps) => (
    <div className={cn(styles.container, className)}>
      <div className="product-section-title">{t('common:mostSellProductsSection.title')}</div>
      <Carousel slides={children} />
    </div>
  );

  if (isLoading) {
    return (
      <Wrapper>
        {Array.from({ length: 5 }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {products?.map((product: IProduct) => (
        <ProductCard product={product} key={product._id} t={t} />
      ))}
    </Wrapper>
  );
};

export default MostSellList;
