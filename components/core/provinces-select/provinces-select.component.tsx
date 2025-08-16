'use client';
import * as React from 'react';
import { useState } from 'react';

import { useMediaQuery } from '@/hooks/use-media-query';
import { Button } from '@/components/ui/button';
import { Command, CommandGroup, CommandItem, CommandList } from '@/components/ui/command';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { ChevronDown, MapPin } from 'lucide-react';
import { provinces } from '@/data/provinces';
import { useIsClient } from '@/hooks/use-is-client';

export default function ProvincesResponsiveSelect() {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const [selectedProvince, setSelectedProvince] = useState<string | null>(provinces[2]);

  const isClient = useIsClient();

  if (!isClient) {
    return null;
  }

  if (isDesktop) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            aria-label={'Provincias'}
            className="p-x-3 p-y-1 flex h-[50px] min-w-[240px] items-center justify-start gap-1 bg-[#E6E9EE] text-[#1E1E1E]"
            icon={<ChevronDown className={'ml-2 h-[16px] w-[16px] text-primary'} />}
          >
            <MapPin className={'mr-2 min-h-[24px] min-w-[24px] text-primary'} />
            <div className="text-[14px] text-[#1E1E1E]">
              {selectedProvince ? selectedProvince : ''}
            </div>
          </Button>
        </PopoverTrigger>
        <PopoverContent align="start" className={'context-menu'}>
          <ProvincesList setOpen={setOpen} setSelectedProvince={setSelectedProvince} />
        </PopoverContent>
      </Popover>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button
          variant="ghost"
          className="max-w-[32px] justify-center px-1"
          aria-label={'Provincias'}
        >
          <MapPin className={'min-h-[32px] min-w-[32px] text-primary'} />
        </Button>
      </DrawerTrigger>
      <DrawerContent className={'context-menu'}>
        <div className="mt-4 border-t">
          <ProvincesList setOpen={setOpen} setSelectedProvince={setSelectedProvince} />
        </div>
      </DrawerContent>
    </Drawer>
  );
}

function ProvincesList({
  setOpen,
  setSelectedProvince
}: {
  setOpen: (open: boolean) => void;
  setSelectedProvince: (province: string | null) => void;
}) {
  return (
    <Command>
      <CommandList>
        <CommandGroup>
          {provinces.map((province) => (
            <CommandItem
              key={province}
              value={province}
              onSelect={(value: any) => {
                setSelectedProvince(provinces.find((prov) => prov === value) || null);
                setOpen(false);
              }}
            >
              {province}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
