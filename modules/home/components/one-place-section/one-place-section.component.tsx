import React from 'react';
import { cn } from '@/lib/utils';
import styles from './styles.module.css';
import { ClassNameProps } from '@/types/classnames-props.type';
import Image from 'next/image';
import { TProps } from '@/types/t-props.type';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

type Props = ClassNameProps & TProps;

const OnePlaceSection = ({ className, t }: Props) => {
  return (
    <div className={cn(styles.container, className)}>
      <div className="image-section">
        <Image src={'/images/canasta.webp'} alt={'one place'} width={813} height={474} />
      </div>
      <div className="data-section">
        <div className="title">{t('common:allPlace.title')}</div>
        <div className="subtitle">{t('common:allPlace.subtitle')}</div>
        <Link href={'/catalog'}>
          <Button color={'primary'}>{t('common:allPlace.action')}</Button>
        </Link>
      </div>
    </div>
  );
};

export default OnePlaceSection;
