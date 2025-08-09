'use client';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { ChildrenProps } from '@/types/children-props.type';

const AppProvider = ({ children }: ChildrenProps) => {
  const methods = useForm();

  return <FormProvider {...methods}>{children}</FormProvider>;
};

export default AppProvider;
