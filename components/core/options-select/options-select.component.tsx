'use client';
import * as React from 'react';
import { memo, useEffect, useState } from 'react';

import { useMediaQuery } from '@/hooks/use-media-query';
import { Button } from '@/components/ui/button';
import { Command, CommandGroup, CommandItem, CommandList } from '@/components/ui/command';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { ChevronDown, LayoutGridIcon } from 'lucide-react';
import { useIsClient } from '@/hooks/use-is-client';
import { ClassNameProps } from '@/types/classnames-props.type';

export type OptionValue = {
  label: string;
  value: string;
};

type Props = ClassNameProps & {
  options: Array<OptionValue>;
  value?: OptionValue;
  onChange: (value: string) => void;
};

const OptionsResponsiveSelect = ({ className, options, value }: Props) => {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const [selectedValue, setSelectedValue] = useState<OptionValue | null>(value || null);

  const isClient = useIsClient();

  useEffect(() => {
    setSelectedValue(value || null);
  }, [value]);

  if (!isClient) {
    return null;
  }

  if (isDesktop) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild className={className}>
          <Button
            variant="contained"
            color={'primary'}
            className="p-x-3 p-y-1 flex min-w-[160px] items-center justify-start gap-1 rounded-[8px] shadow-none hover:shadow-none"
            icon={<ChevronDown className={'ml-2 h-[16px] w-[16px] text-white'} />}
          >
            <LayoutGridIcon className={'mr-2 min-h-[16px] min-w-[16px] text-white'} />
            <div className="text-[14px] text-white">
              {selectedValue ? selectedValue?.label : ''}
            </div>
          </Button>
        </PopoverTrigger>
        <PopoverContent align="start" className={'context-menu'}>
          <OptionsList setOpen={setOpen} setSelectedOption={setSelectedValue} options={options} />
        </PopoverContent>
      </Popover>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild className={className}>
        <Button
          variant="contained"
          color={'primary'}
          className="min-w-[50px] justify-center rounded-[5px] px-1"
        >
          <LayoutGridIcon className={'min-h-[16px] min-w-[16px] text-white'} />
        </Button>
      </DrawerTrigger>
      <DrawerContent className={'context-menu'}>
        <div className="mt-4 border-t">
          <OptionsList setOpen={setOpen} setSelectedOption={setSelectedValue} options={options} />
        </div>
      </DrawerContent>
    </Drawer>
  );
};

function OptionsList({
  options = [],
  setOpen,
  setSelectedOption
}: {
  options: Array<OptionValue>;
  setOpen: (open: boolean) => void;
  setSelectedOption: (value: OptionValue | null) => void;
}) {
  return (
    <Command>
      <CommandList>
        <CommandGroup>
          {options.map((option) => (
            <CommandItem
              key={option?.value}
              value={option?.value}
              onSelect={(currentValue: string | null) => {
                setSelectedOption(options.find((opt) => opt?.value === currentValue) || null);
                setOpen(false);
              }}
            >
              {option.label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}

export default memo(OptionsResponsiveSelect);
