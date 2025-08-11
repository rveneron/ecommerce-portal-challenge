'use client';

import { ClassNameProps } from '@/types/classnames-props.type';

type Props = ClassNameProps & {
  value: number;
  onChange: (value: number) => void;
};

import { MinusIcon, PlusIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { memo, useCallback, useState } from 'react';
import { cn } from '@/lib/utils';

const buttonClasses = 'rounded-none shadow-none border-none focus-visible:z-10 bg-white';

const NumberButton = ({ className, value, onChange }: Props) => {
  const [val, setVal] = useState(0);

  const increment = useCallback(() => {
    setVal((val) => {
      onChange?.(val + 1);
      return val + 1;
    });
  }, [onChange]);

  const decrement = useCallback(() => {
    setVal((val) => {
      if (val > 0) {
        onChange?.(val - 1);
        return val - 1;
      }
      return val;
    });
  }, [onChange]);

  return (
    <div
      className={cn(
        'flex h-[36px] w-[100px] items-stretch overflow-hidden rounded-xl text-[#2B3445]',
        className
      )}
      style={{
        stroke: 'red !important'
      }}
    >
      <Button
        className={cn(buttonClasses)}
        variant="outline"
        size="icon"
        aria-label="rest"
        onClick={decrement}
      >
        <MinusIcon size={16} aria-hidden="true" />
      </Button>
      <span className="relative flex w-[48px] items-center bg-white">
        <div className={'w-full border-x-[1px] px-2 text-center'}>{val}</div>
      </span>
      <Button
        className={cn(buttonClasses)}
        variant="outline"
        size="icon"
        aria-label="add"
        onClick={increment}
      >
        <PlusIcon size={16} aria-hidden="true" />
      </Button>
    </div>
  );
};

export default memo(NumberButton);
