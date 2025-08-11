import React, { memo } from 'react';
import { cn } from '@/lib/utils';
import styles from './styles.module.css';
import { ClassNameProps } from '@/types/classnames-props.type';
import { Category } from '@/types/category.type';
import { getCategoryIcon } from '@/modules/home/utils/category';

type Props = ClassNameProps & {
  category: Category;
};

const CategoryCard = ({ className, product }: Props) => {
  return (
    <div className={cn(styles.container, className)}>
      <div className="semicircle"></div>
      {getCategoryIcon(product)}
      <div className={'category-name'}>{product.name}</div>
    </div>
  );
};

export default memo(CategoryCard);
