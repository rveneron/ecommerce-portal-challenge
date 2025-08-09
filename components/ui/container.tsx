import React, { memo, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type Props = {
  children?: ReactNode;
  className?: string;
};

const Container = ({ children, className }: Props) => {
  return (
    <div className={cn('mx-auto mt-4 flex w-full max-w-[1445px] flex-col gap-4 px-4', className)}>
      {children}
    </div>
  );
};

export default memo(Container);
