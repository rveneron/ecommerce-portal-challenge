import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const ProfileDropDown = ({ className }: Props) => {
  return (
    <Avatar className={cn('h-[45px] w-[45px]', className)}>
      <AvatarImage src="https://github.com/shadcn.png" width={45} height={45} />
      <AvatarFallback>RV</AvatarFallback>
    </Avatar>
  );
};

export default ProfileDropDown;
