'use client';
import React from 'react';
import { ClassNameProps } from '@/types/classnames-props.type';
import { cn } from '@/lib/utils';
import { Rating, RatingButton } from '@/components/ui/shadcn-io/rating';

type Props = ClassNameProps;

const ProductRating = ({ className }: Props) => {
  return (
    <div className={cn(className)}>
      <Rating defaultValue={4} className={'gap-0'}>
        {Array.from({ length: 5 }).map((_, index) => (
          <RatingButton key={index} />
        ))}
      </Rating>
    </div>
  );
};

export default ProductRating;
