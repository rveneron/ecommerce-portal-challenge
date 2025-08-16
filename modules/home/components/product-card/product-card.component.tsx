import React, { memo } from 'react';
import { cn } from '@/lib/utils';
import styles from './styles.module.css';
import { ClassNameProps } from '@/types/classnames-props.type';
import { IProduct } from '@/interfaces/product';
import Image from 'next/image';
import { FALL_BACK_IMAGE } from '@/constants';
import ProductCounterInput from './product-counter-input.component';
import Link from 'next/link';
import ProductRating from './product-rating.component';
import { differenceInDays } from 'date-fns';
import { TProps } from '@/types/t-props.type';
import ProductFavButton from './product-fav-button.component';
import AddCartButton from '@/modules/home/components/product-card/add-cart-button.component';

type Props = ClassNameProps &
  TProps & {
    product: IProduct;
    baseUrl?: string;
  };

const NEW_DAYS = 7;

const DEFAULT_ROUTE_BASE = '/product';

const ProductCard = ({ className, product, t, baseUrl = DEFAULT_ROUTE_BASE }: Props) => {
  const [amount, cents] = product?.price?.toFixed(2)?.split('.') || [];

  const href = `/${baseUrl}/${product.slug}`.replace('//', '/');

  const days = differenceInDays(new Date(), new Date(product.createdAt));

  const isNew = days <= NEW_DAYS;

  return (
    <Link href={href}>
      <div className={cn(styles.container, className)}>
        <Image
          src={product?.image?.url || FALL_BACK_IMAGE}
          alt={product.name}
          width={product?.image?.width || 276}
          height={product?.image?.height || 240}
          className={'w-full'}
        />
        {isNew && <div className="new-ribbon">{t('common:new')}</div>}
        <ProductFavButton className={'absolute right-[12px] top-[12px]'} />
        <div className="recommended-product-data-container">
          <div className="price">
            <div className="amount">${amount}</div>
            {cents && <div className="cents">{cents}</div>}
          </div>
          <div className="title">{product.name}</div>
          <ProductRating className={'mb-2'} readOnly />
          <div className="flex w-full items-center justify-between">
            <ProductCounterInput />
            <AddCartButton />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default memo(ProductCard);
