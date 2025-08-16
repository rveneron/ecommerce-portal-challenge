import React, { memo } from 'react';
import { cn } from '@/lib/utils';
import styles from './styles.module.css';
import { ClassNameProps } from '@/types/classnames-props.type';
import { IProduct } from '@/interfaces/product';
import Image from 'next/image';
import { FALL_BACK_IMAGE } from '@/constants';
import ProductCard from '@/modules/home/components/product-card/product-card.component';
import { TProps } from '@/types/t-props.type';

type Props = ClassNameProps &
  TProps & {
    product: IProduct;
    similars?: IProduct[];
  };

const ProductsDetailsContainer = ({ className, product, similars, t }: Props) => {
  return (
    <div className={cn(styles.container, className)}>
      <div className="flex flex-col gap-5 lg:flex-row">
        <Image
          alt={product.name}
          src={product.image?.url || FALL_BACK_IMAGE}
          width={276}
          height={240}
          className={'h-[240px] min-h-[240px] w-[276px] min-w-[276px]'}
        />
        <div className={'flex flex-col gap-2'}>
          <div className="product-title">{product.name}</div>
          <div
            className="product-description"
            dangerouslySetInnerHTML={{ __html: product.content }}
          />
        </div>
      </div>
      <div>
        <div className="product-list-title">{t('common:similarProducts')}</div>
        <div className="product-list">
          {similars?.map((product) => (
            <ProductCard product={product} t={t} key={product._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(ProductsDetailsContainer);
