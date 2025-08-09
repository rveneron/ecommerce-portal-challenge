import React from 'react';
import { cn } from '@/lib/utils';
import styles from './styles.module.css';
import { ClassNameProps } from '@/types/classnames-props.type';
import { TProps } from '@/types/t-props.type';
import PageWidthContainer from '@/components/core/layout/page-with-container';
import FooterContactCard from '@/modules/common/components/footer-contact-card/footer-contact-card.component';
import { CustomInput } from '@/components/ui/custom-input';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

type Props = ClassNameProps & TProps;

const Footer = ({ className, t }: Props) => {
  return (
    <div className={cn(styles.container, className)}>
      <PageWidthContainer>
        <div className="subscription-container">
          <div>
            <div className="subscription-title">{t('menu:footer.subscription.title')}</div>
            <div className="subscription-subtitle">{t('menu:footer.subscription.subtitle')}</div>
          </div>
          <div className={'max-w-[420px]'}>
            <CustomInput
              type={'email'}
              className={'email-input'}
              placeholder={t('common:email')}
              startAdornment={
                <Image
                  src={'/images/footer/subscription-email.webp'}
                  alt={'email'}
                  width={20}
                  height={20}
                  className={'ml-4 h-[20px] w-[20px]'}
                />
              }
              endAdornment={<Button className={'send-button'}>{t('common:send')}</Button>}
            />
            <span className={'terms'}>
              {t('menu:footer.termsAndPolicies.part1')}
              <Link href={'/terms'}>{t('menu:footer.termsAndPolicies.part2')}</Link>
            </span>
          </div>
        </div>
        <div className="contacts">
          <FooterContactCard
            type={'phone'}
            value={'+1 800 300-353'}
            title={t('menu:footer.contacts.phone')}
          />
          <FooterContactCard
            type={'email'}
            value={'info@example.com'}
            title={t('menu:footer.contacts.email')}
          />
        </div>
      </PageWidthContainer>
    </div>
  );
};

export default Footer;
