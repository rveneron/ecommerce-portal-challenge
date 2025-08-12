import React from 'react';
import { ClassNameProps } from '@/types/classnames-props.type';
import styles from './styles.module.css';
import { cn } from '@/lib/utils';
import { TProps } from '@/types/t-props.type';
import ProductCard from '@/modules/home/components/product-card/product-card.component';
import { IProduct } from '@/interfaces/product';

type Props = ClassNameProps &
  TProps & {
    products: IProduct[];
  };

const RecommendedProductSection = ({ className, products, t }: Props) => {
  return (
    <div className={cn(styles.container, className)}>
      <div className="recommended-products-section-title">{t('common:recommendedProductsSection.title')}</div>
      <div className="recommended-products-section-content">
        {products.map((product: IProduct) => (
          <ProductCard product={product} key={product._id} t={t} />
        ))}
      </div>
    </div>
  );
};

export default RecommendedProductSection;
