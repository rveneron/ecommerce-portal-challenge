import React from 'react';
import { cn } from '@/lib/utils';
import styles from './styles.module.css';
import { ClassNameProps } from '@/types/classnames-props.type';
import { IBanner } from '@/interfaces/media.interface';
import Banner from '@/components/core/banner/banner.component';

type Props = ClassNameProps & {
  ads: IBanner[];
};

const AdsList = ({ className, ads }: Props) => {
  return (
    <div className={cn(styles.container, className)}>
      {ads.map((ad, index) => (
        <Banner banner={ad} key={ad.name || index} />
      ))}
    </div>
  );
};

export default AdsList;
