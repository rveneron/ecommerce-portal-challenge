import React, { memo, ReactNode } from 'react';
import Image from 'next/image';

type Props = {
  children: ReactNode;
  imgLeft?: string;
  sizesLeft?: string;
  imgLeftClass?: string;
  imgRight?: string;
  sizesRight?: string;
  imgRightClass?: string;
  loading?: 'eager' | 'lazy' | undefined;
  priority?: boolean;
};

const ShapesWrapper = ({
  children,
  imgLeft,
  sizesLeft,
  imgRight,
  sizesRight,
  imgLeftClass,
  imgRightClass,
  loading = 'lazy',
  priority
}: Props) => {
  return (
    <div className="relative h-full w-full">
      <div className="absolute -z-10 h-full min-h-[100vh] w-full max-w-[100dvw] overflow-hidden">
        {imgLeft && (
          <div className={`absolute left-0 top-0 -z-10 h-[100px] w-[100px] ${imgLeftClass}`}>
            <Image
              src={imgLeft}
              alt="Left Shape"
              fill
              className="bg-contain object-contain"
              loading={loading}
              sizes={sizesLeft}
              priority={priority}
            />
          </div>
        )}
        {imgRight && (
          <div className={`absolute right-0 top-0 -z-10 h-[100px] w-[100px] ${imgRightClass}`}>
            <Image
              src={imgRight}
              alt="Right Shape"
              fill
              className="bg-contain object-contain"
              loading={loading}
              sizes={sizesRight}
              priority={priority}
            />
          </div>
        )}
      </div>
      {children}
    </div>
  );
};

export default memo(ShapesWrapper);
