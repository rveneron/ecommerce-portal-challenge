'use client';
import React, { memo } from 'react';
import { cn } from '@/lib/utils';
import styles from './styles.module.css';
import { ClassNameProps } from '@/types/classnames-props.type';
import { useTranslation } from 'react-i18next';

type Props = ClassNameProps;

const AdsBar = ({ className }: Props) => {
  
  // TODO - Cargar la publicidad cada vez que cambie la ruta;
  
  const { t } = useTranslation();
  
  return (
    <div className={cn(styles.container, className)}>
      <div className="ads-title">{t('common:ad')}</div>
    </div>
  );
};

export default memo(AdsBar);
