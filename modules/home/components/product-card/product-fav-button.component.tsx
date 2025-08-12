'use client';
import React, { type MouseEvent, useCallback, useMemo, useState } from 'react';
import { ClassNameProps } from '@/types/classnames-props.type';
import { cn } from '@/lib/utils';
import { HeartPlusIcon, HeartMinusIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { useTranslation } from 'react-i18next';

type Props = ClassNameProps;

const ProductFavButton = ({ className }: Props) => {
  const [fav, setFav] = useState<boolean>(false);
  const { t } = useTranslation();

  const handleClick = useCallback((event: any) => {
    event.preventDefault();
    event.stopPropagation();
    setFav((prev) => !prev);
  }, []);

  const Icon = useMemo(() => (fav ? HeartMinusIcon : HeartPlusIcon), [fav]);

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div
          className={cn(
            'h-[40px] w-[40px] rounded-[50%] bg-transparent text-[#3D3D3D] shadow-none',
            'flex items-center justify-center',
            'border-[1px] hover:border-[#3D3D3D]',
            className
          )}
          onClick={handleClick}
        >
          <Icon className={'h-[22px] w-[22px]'} />
        </div>
      </TooltipTrigger>
      <TooltipContent>
        {fav ? t('common:favorites.remove') : t('common:favorites.add')}
      </TooltipContent>
    </Tooltip>
  );
};

export default ProductFavButton;
