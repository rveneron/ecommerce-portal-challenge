import React, { memo } from 'react';
import { ClassNameProps } from '@/types/classnames-props.type';
import Image from 'next/image';
import { IBanner } from '@/interfaces/media.interface';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ChildrenProps } from '@/types/children-props.type';

type Props = ClassNameProps & {
  banner: IBanner;
  desktopClassName?: string;
  mobileClassName?: string;
  loading: 'eager' | 'lazy';
};

type WrapperProps = ChildrenProps &
  ClassNameProps & {
    banner: IBanner;
  };

const WrapperComponent = ({ banner, children, className }: WrapperProps) => {
  if (banner.link) {
    return (
      <Link href={banner.link} className={cn('block', className)}>
        {children}
      </Link>
    );
  }

  return <div className={className}>{children}</div>;
};

const Banner = ({ className, desktopClassName, mobileClassName, banner, loading }: Props) => {
  if (banner?.desktop?.url && banner?.mobile?.url) {
    return (
      <WrapperComponent banner={banner} className={className}>
        <>
          <Image
            alt={banner?.name || ''}
            src={banner?.mobile?.url}
            width={banner?.mobile?.width}
            height={banner?.mobile?.height}
            className={cn('md:hidden', mobileClassName)}
            loading={loading}
          />
          <Image
            alt={banner?.name || ''}
            src={banner?.desktop?.url}
            width={banner?.desktop?.width}
            height={banner?.desktop?.height}
            className={cn('hidden md:block', desktopClassName)}
            loading={loading}
          />
        </>
      </WrapperComponent>
    );
  }

  if (banner?.desktop?.url || banner?.mobile?.url) {
    return (
      <WrapperComponent banner={banner}>
        <Image
          alt={banner?.name || ''}
          loading={loading}
          src={(banner?.desktop?.url || banner?.mobile?.url) as string}
          width={banner?.desktop ? banner?.desktop?.width : banner?.mobile?.width}
          height={banner?.desktop ? banner?.desktop?.height : banner?.mobile?.height}
          className={cn(banner?.desktop?.url ? desktopClassName : mobileClassName)}
        />
      </WrapperComponent>
    );
  }

  return null;
};

export default memo(Banner);
