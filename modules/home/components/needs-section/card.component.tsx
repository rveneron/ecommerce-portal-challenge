import React, { memo } from 'react';
import { cn } from '@/lib/utils';
import styles from './card-styles.module.css';
import { ClassNameProps } from '@/types/classnames-props.type';
import Image from 'next/image';

type Props = ClassNameProps & {
  image: string;
  title: string;
  description: string;
};

const Card = ({ className, image, title, description }: Props) => {
  return (
    <div className={cn(styles.container, className)}>
      <Image alt={title} src={image} width={68} height={68} className={'h-[68px] w-[68px] mb-5'} />
      <div className="title">{title}</div>
      <div className="description">{description}</div>
    </div>
  );
};

export default memo(Card);
