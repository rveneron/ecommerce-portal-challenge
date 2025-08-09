import React from 'react';
import { cn } from '@/lib/utils';

interface PageWidthContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const PageWidthContainer = ({ children, className, ...props }: PageWidthContainerProps) => {
  return (
    <div className={cn('mx-auto w-full max-w-[1445px] px-[20px]', className)} {...props}>
      {children}
    </div>
  );
};

export default PageWidthContainer;
