import React from 'react';
import { ChildrenProps } from '@/types/children-props.type';

type Props = ChildrenProps;

const MainProvider = async ({ children }: Props) => {
  return <>{children}</>;
};

export default MainProvider;
