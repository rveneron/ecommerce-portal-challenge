import React, { memo } from 'react';
import { cn } from '@/lib/utils';
import styles from './styles.module.css';
import { ClassNameProps } from '@/types/classnames-props.type';
import { TProps } from '@/types/t-props.type';
import Card from './card.component';
import PageWidthContainer from '@/components/core/layout/page-with-container';
import Image from 'next/image';

type Props = ClassNameProps & TProps;

const NeedsSection = ({ className, t }: Props) => {
  return (
    <div className={cn(styles.container, className)}>
      <Image
        src={'/images/needs/capsule.webp'}
        alt={'Capsula 1'}
        width={130}
        height={155}
        className={'capsule-1'}
      />
      <Image
        src={'/images/needs/capsule.webp'}
        alt={'Capsula 2'}
        width={130}
        height={155}
        className={'capsule-2'}
      />
      <Image
        src={'/images/needs/capsule.webp'}
        alt={'Capsula 3'}
        width={130}
        height={155}
        className={'capsule-3'}
      />
      <Image
        src={'/images/needs/capsule.webp'}
        alt={'Capsula 4'}
        width={130}
        height={155}
        className={'capsule-4'}
      />
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
