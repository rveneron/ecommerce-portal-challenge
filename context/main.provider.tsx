import React from 'react';
import { BreadcrumbsContextProvider } from '@/context/breadcrumbs-provider';
import { ChildrenProps } from '@/types/children-props.type';

type Props =  ChildrenProps;

const MainProvider = async ({ children }: Props) => {
  return <BreadcrumbsContextProvider>{children}</BreadcrumbsContextProvider>;
};

export default MainProvider;
