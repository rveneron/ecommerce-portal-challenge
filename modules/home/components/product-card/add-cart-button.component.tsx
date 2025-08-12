'use client';
import React, { type MouseEvent, useCallback, useMemo, useState } from 'react';
import { ClassNameProps } from '@/types/classnames-props.type';
import { cn } from '@/lib/utils';
import { HeartPlusIcon, HeartMinusIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

type Props = ClassNameProps;

const AddCartButton = ({ className }: Props) => {
  const [fav, setFav] = useState<boolean>(false);
  const { t } = useTranslation();

  const handleClick = useCallback((event: any) => {
    event.preventDefault();
    event.stopPropagation();
    setFav((prev) => !prev);
  }, []);

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div
          className={cn(
            'h-[40px] w-[40px] rounded-[50%] bg-transparent shadow-none',
            'flex items-center justify-center',
            'hover:border-[1px] hover:border-[#3D3D3D]',
            className
          )}
          onClick={handleClick}
        >
          <Image
            alt={t('common:product.actions')}
            src={'/images/bag.webp'}
            width={29}
            height={29}
          />
        </div>
      </TooltipTrigger>
      <TooltipContent>{t('common:product.actions')}</TooltipContent>
    </Tooltip>
  );
};

export default AddCartButton;
