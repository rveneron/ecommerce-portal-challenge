import React from 'react';
import { MenuIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { mainMenu } from '@/data/home-menu';
import { ClassNameProps } from '@/types/classnames-props.type';
import { TProps } from '@/types/t-props.type';
import Link from 'next/link';

type Props = ClassNameProps & TProps;

const MenuDropDown = ({ className, t }: Props) => {
  return (
    <div className={cn('lg:hidden', className)}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="size-12">
            <MenuIcon className={'text-primary'} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 app-responsive-menu" align="start">
          {mainMenu.map((item) => (
            <Link href={item.url} key={item.name}>
              <DropdownMenuItem>{t(item.name)}</DropdownMenuItem>
            </Link>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default MenuDropDown;
