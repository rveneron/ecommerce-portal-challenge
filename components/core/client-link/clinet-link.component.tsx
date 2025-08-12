'use client';
import React, { memo } from 'react';
import { ClassNameProps } from '@/types/classnames-props.type';
import Link, { LinkProps } from 'next/link';
import { ChildrenProps } from '@/types/children-props.type';

type Props = ClassNameProps & ChildrenProps & LinkProps;

const ClientLink = ({ className, children, ...rest }: Props) => {
  const handleClick = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
  };
  return (
    <Link {...rest} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
};

export default memo(ClientLink);
