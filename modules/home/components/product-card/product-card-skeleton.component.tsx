import React, { memo } from 'react';
import { cn } from '@/lib/utils';
import styles from './skeleton-styles.module.css';
import { ClassNameProps } from '@/types/classnames-props.type';

type Props = ClassNameProps;

const ProductCardSkeleton = ({ className }: Props) => {
  return (
    <div className={cn(styles.container, className)}>
      <div className="h-[240px] w-full max-h-[50%] bg-gray-200 dark:bg-gray-700" />
      <div className="skeleton-product-data-container">
        <div className="mb-4 h-2.5 w-1/2 rounded-md bg-gray-200 dark:bg-gray-700" />
        <div className="mb-4 h-2.5 w-1/3 rounded-md bg-gray-200 dark:bg-gray-700" />
        <div className="flex w-full items-end justify-between flex-1">
          <div className="h-[40px] w-24 rounded-full bg-gray-200 dark:bg-gray-700" />
          <div className="h-[40px] w-[40px] rounded-full bg-gray-200 dark:bg-gray-700" />
        </div>
      </div>
    </div>
  );
};

export default memo(ProductCardSkeleton);
