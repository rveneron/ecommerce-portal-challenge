import React, { memo } from 'react';
import { cn } from '@/lib/utils';
import styles from './styles.module.css';
import { ClassNameProps } from '@/types/classnames-props.type';
import { Category } from '@/types/category.type';
import { getCategoryIcon } from '@/modules/home/utils/category';
import Link from 'next/link';

type Props = ClassNameProps & {
  category: Category;
};

const CategoryCard = ({ className, category }: Props) => {
  return (
    <Link href={`/category/${category.slug}`}>
      <div className={cn(styles.container, className)}>
        <div className="semicircle"></div>
        {getCategoryIcon(category)}
        <div className={'category-name'}>{category.name}</div>
      </div>
    </Link>
  );
};

export default memo(CategoryCard);
