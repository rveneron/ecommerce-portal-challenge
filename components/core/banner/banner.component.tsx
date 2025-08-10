import React from 'react';
import { ClassNameProps } from '@/types/classnames-props.type';
import Image from 'next/image';
import { IBanner } from '@/interfaces/media.interface';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ChildrenProps } from '@/types/children-props.type';

type Props = ClassNameProps & {
  banner: IBanner;
  breakpoint?: string;
  desktopClassName?: string;
  mobileClassName?: string;
};

type WrapperProps = ChildrenProps & {
  banner: IBanner;
};

const WrapperComponent = ({ banner, children }: WrapperProps) => {
  if (banner.link) {
    return <Link href={banner.link}>{children}</Link>;
  }

  return <>{children}</>;
};

const Banner = ({
  className,
  desktopClassName,
  mobileClassName,
  banner,
  breakpoint = 'md'
}: Props) => {
  if (banner?.desktop?.url && banner?.mobile?.url) {
    return (
      <WrapperComponent banner={banner}>
        <Image
          alt={banner?.name || ''}
          src={banner?.mobile?.url}
          width={banner?.mobile?.width}
          height={banner?.mobile?.height}
          className={cn(className, mobileClassName, `${breakpoint}:hidden`)}
        />
        <Image
          alt={banner?.name || ''}
          src={banner?.desktop?.url}
          width={banner?.desktop?.width}
          height={banner?.desktop?.height}
          className={cn(className, desktopClassName, `hidden ${breakpoint}:block`)}
        />
      </WrapperComponent>
    );
  }

  if (banner?.desktop?.url || banner?.mobile?.url) {
    return (
      <WrapperComponent banner={banner}>
        <Image
          alt={banner?.name || ''}
          src={(banner?.desktop?.url || banner?.mobile?.url) as string}
          width={banner?.desktop ? banner?.desktop?.width : banner?.mobile?.width}
          height={banner?.desktop ? banner?.desktop?.height : banner?.mobile?.height}
          className={cn(className, banner?.desktop?.url ? desktopClassName : mobileClassName)}
        />
      </WrapperComponent>
    );
  }

  return null;
};

export default Banner;
