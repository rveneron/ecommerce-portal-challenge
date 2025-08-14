'use client';
import React from 'react';
import { ChildrenProps } from '@/types/children-props.type';

const AppProvider = ({ children }: ChildrenProps) => {
  return <>{children}</>;
};

export default AppProvider;
