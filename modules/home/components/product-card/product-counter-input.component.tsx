'use client';
import React from 'react';
import { ClassNameProps } from '@/types/classnames-props.type';
import { cn } from '@/lib/utils';
import NumberButton from '@/components/ui/number-button';

type Props = ClassNameProps;

const ProductCounterInput = ({ className }: Props) => {
  return (
    <div className={cn(className)}>
      <NumberButton />
    </div>
  );
};

export default ProductCounterInput;
