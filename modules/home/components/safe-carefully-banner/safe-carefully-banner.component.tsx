import React, { memo } from 'react';
import { cn } from '@/lib/utils';
import styles from './styles.module.css';
import { ClassNameProps } from '@/types/classnames-props.type';
import { TProps } from '@/types/t-props.type';
import Link from 'next/link';

type Props = ClassNameProps &
  TProps & {
    discount: string;
  };

const SafeCarefullyBanner = ({ className, t, discount = '-50%' }: Props) => {
  return (
    <div className={cn(styles.container, className)}>
      <div className={'safe-carefully-data'}>
        <div className={'data-text'}>
          <div className="safe-carefully-title">{t('common:safeCarefully.title')}</div>
          <div className="safe-carefully-subtitle">
            <span>{t('common:safeCarefully.subtitle.part1')}</span>
            <Link href={'/ofertas'}>{t('common:safeCarefully.subtitle.part2')}</Link>
          </div>
        </div>
        <div className="safe-carefully-discount">{discount}</div>
      </div>
    </div>
  );
};

export default memo(SafeCarefullyBanner);
