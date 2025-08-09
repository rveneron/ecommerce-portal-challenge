import React from 'react';
import { cn } from '@/lib/utils';
import styles from './styles.module.css';
import { ChildrenProps } from '@/types/children-props.type';
import { ClassNameProps } from '@/types/classnames-props.type';

type Props = ChildrenProps & ClassNameProps;

const PageWidthContainer = ({ children, className }: Props) => {
  return (
    <div className={cn(styles.container, className)}>
      {children}
      <div className="header"></div>
    </div>
  );
};

export default PageWidthContainer;
