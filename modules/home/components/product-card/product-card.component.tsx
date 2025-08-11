import React, { memo } from 'react';
import { cn } from '@/lib/utils';
import styles from './styles.module.css';
import { ClassNameProps } from '@/types/classnames-props.type';
import { IProduct } from '@/interfaces/product';
import Image from 'next/image';
import { FALL_BACK_IMAGE } from '@/constants';
import NumberButton from '@/components/ui/number-button';

type Props = ClassNameProps & {
  product: IProduct;
};

const ProductCard = ({ className, product }: Props) => {
  const [amount, cents] = product?.price?.toFixed(2)?.split('.') || [];

  return (
    <div className={cn(styles.container, className)}>
      <Image
        src={product?.image?.url || FALL_BACK_IMAGE}
        alt={product.name}
        width={product?.image?.width || 276}
        height={product?.image?.height || 240}
        className={'w-full'}
      />
      <div className="recommended-product-data-container">
        <div className="price">
          <div className="amount">${amount}</div>
          {cents && <div className="cents">{cents}</div>}
        </div>
        <div className="title">{product.name}</div>
        <div className="flex w-full items-center justify-between">
          <NumberButton />
        </div>
      </div>
    </div>
  );
};

export default memo(ProductCard);
