import React, { memo } from 'react';
import { cn } from '@/lib/utils';
import styles from './styles.module.css';
import { ClassNameProps } from '@/types/classnames-props.type';
import { TProps } from '@/types/t-props.type';
import Card from './card.component';
import PageWidthContainer from '@/components/core/layout/page-with-container';

type Props = ClassNameProps & TProps;

const NeedsSection = ({ className, t }: Props) => {
  return (
    <div className={cn(styles.container, className)}>
      <PageWidthContainer className={'content'}>
        <div className="section-title">{t('common:needsSection.title')}</div>
        <div className="card-list">
          <Card
            className={'card'}
            image={'/images/needs/payment.webp'}
            title={t('common:needsSection.payment.title')}
            description={t('common:needsSection.payment.description')}
          />
          <Card
            className={'card'}
            image={'/images/needs/delivery.webp'}
            title={t('common:needsSection.delivery.title')}
            description={t('common:needsSection.delivery.description')}
          />
          <Card
            className={'card'}
            image={'/images/needs/location.webp'}
            title={t('common:needsSection.location.title')}
            description={t('common:needsSection.location.description')}
          />
        </div>
      </PageWidthContainer>
    </div>
  );
};

export default memo(NeedsSection);
