import React from 'react';
import { ClassNameProps } from '@/types/classnames-props.type';
import styles from './styles.module.css';
import { cn } from '@/lib/utils';
import { TProps } from '@/types/t-props.type';
import ProductCard from '@/modules/home/components/product-card/product-card.component';
import { IProduct } from '@/interfaces/product';
import { ChildrenProps } from '@/types/children-props.type';
import ProductCardSkeleton from '@/modules/home/components/product-card/product-card-skeleton.component';

type Props = ClassNameProps &
  TProps & {
    isLoading?: boolean;
    products?: IProduct[];
  };

const RecommendedProductSection = ({ className, products, isLoading, t }: Props) => {
  const Wrapper = ({ children }: ChildrenProps) => (
    <div className={cn(styles.container, className)}>
      <div className="recommended-products-section-title">
        {t('common:recommendedProductsSection.title')}
      </div>
      <div className="recommended-products-section-content">{children}</div>
    </div>
  );

  if (isLoading) {
    return (
      <Wrapper>
        {Array.from({ length: 10 }).map((_, index) => (
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

export default RecommendedProductSection;
