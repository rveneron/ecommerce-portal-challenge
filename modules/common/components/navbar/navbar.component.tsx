import React from 'react';
import { cn } from '@/lib/utils';
import styles from './styles.module.css';
import { ClassNameProps } from '@/types/classnames-props.type';
import { mainMenu } from '@/data/home-menu';
import Link from 'next/link';
import { TProps } from '@/types/t-props.type';
import PageWidthContainer from '@/components/core/layout/page-with-container';
import ProfileDropDown from '@/components/core/layout/profile-dropdown';
import MenuDropDown from '@/components/core/layout/menu-dropdown';
import ProvincesResponsiveSelect from '@/components/core/provinces-select/provinces-select.component';
import SearchBar from '@/components/core/search-bar/search-bar.component';
import { Category } from '@/types/category.type';

type Props = ClassNameProps &
  TProps & {
    categories: Category[];
  };

const Navbar = ({ className, t, categories }: Props) => {
  return (
    <div className={cn(styles.container, className)}>
      <PageWidthContainer className="header">
        <div className="flex flex-1 gap-1">
          <MenuDropDown t={t} />
          <div className="username">Rodolfo</div>
          <div className="flex flex-1 items-center justify-end gap-5 lg:justify-center 2xl:mx-[120px]">
            <ProvincesResponsiveSelect />
            <SearchBar className={'hidden flex-1 lg:flex'} categories={categories} />
          </div>
        </div>
        <ProfileDropDown />
      </PageWidthContainer>
      <PageWidthContainer className="pb-4">
        <SearchBar className={'w-full lg:hidden'} categories={categories} />
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
