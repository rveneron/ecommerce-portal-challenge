import React from 'react';
import { cn } from '@/lib/utils';
import styles from './styles.module.css';
import { ClassNameProps } from '@/types/classnames-props.type';
import Image from 'next/image';

type Props = ClassNameProps & {
  type: 'phone' | 'email';
  value: string;
  title: string;
};

const FooterContactCard = ({ className, title, value, type }: Props) => {
  const src = type === 'phone' ? '/images/footer/phone.webp' : '/images/footer/email.webp';
  return (
    <div className={cn(styles.container, className)}>
      <Image alt={value} src={src} width={28} height={28} className={'h-[28px] w-[28px]'} />
      <div className="contact-data">
        <div className={'contact-title'}>{title}</div>
        <div className={type === 'phone' ? 'phone-value' : 'email-value'}>{value}</div>
      </div>
    </div>
  );
};

export default FooterContactCard;
