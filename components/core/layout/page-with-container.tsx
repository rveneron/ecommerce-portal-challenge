import React from 'react';
import { cn } from '@/lib/utils';

interface PageWidthContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const PageWidthContainer = ({ children, className, ...props }: PageWidthContainerProps) => {
  return (
    <div
      className={cn('mx-auto w-full max-w-[1445px] px-5 md:px-16 2xl:px-0', className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default PageWidthContainer;
