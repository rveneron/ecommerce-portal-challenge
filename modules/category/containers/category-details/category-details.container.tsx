import React, { memo } from 'react';
import { cn } from '@/lib/utils';
import styles from './styles.module.css';
import { ClassNameProps } from '@/types/classnames-props.type';
import { Category } from '@/types/category.type';
import { IProduct } from '@/interfaces/product';
import Image from 'next/image';
import { FALL_BACK_IMAGE } from '@/constants';
import ProductCard from '@/modules/home/components/product-card/product-card.component';
import { TProps } from '@/types/t-props.type';

type Props = ClassNameProps &
  TProps & {
    category: Category;
    products?: IProduct[];
  };

const CategoryDetailsContainer = ({ className, category, products, t }: Props) => {
  return (
    <div className={cn(styles.container, className)}>
      <div className="flex flex-row gap-5">
        <Image
          alt={category.name}
          src={category.image?.url || FALL_BACK_IMAGE}
          width={60}
          height={60}
          className={'h-[60px] min-h-[60px] w-[60px] min-w-[60px]'}
        />
        <div className={'flex flex-col gap-2'}>
          <div className="category-title">{category.name}</div>
          <div className="category-description">{category.content}</div>
        </div>
      </div>
      <div>
        <div className="product-list-title">{t('common:categorySection.products')}</div>
        <div className="product-list">
          {products?.map((product) => (
            <ProductCard product={product} t={t} key={product._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(CategoryDetailsContainer);
