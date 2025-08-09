import React from 'react';
import { cn } from '@/lib/utils';
import styles from './styles.module.css';
import { ClassNameProps } from '@/types/classnames-props.type';
import { mainMenu } from '@/data/home-menu';
import Link from 'next/link';
import { TProps } from '@/types/t-props.type';
import PageWidthContainer from '@/components/core/layout/page-with-container';
import ProfileDropDown from '@/components/core/layout/profile-dropdown';

type Props = ClassNameProps & TProps;

const Navbar = ({ className, t }: Props) => {
  return (
    <div className={cn(styles.container, className)}>
      <PageWidthContainer className="header">
        <div className="username">Tu Nombre</div>
        <ProfileDropDown />
      </PageWidthContainer>
      <div className="menu">
        <PageWidthContainer className={'menu-container'}>
          {mainMenu.map((item) => (
            <Link href={item.url} key={item.name} className={'menu-item'}>
              <div>{t(item.name)}</div>
            </Link>
          ))}
        </PageWidthContainer>
      </div>
    </div>
  );
};

export default Navbar;
