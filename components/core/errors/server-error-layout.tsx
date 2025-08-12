'use client';
import { memo } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

interface ServerErrorLayoutProps {
  reset?: () => void;
}

const ServerErrorLayout = ({ reset = () => location?.reload() }: ServerErrorLayoutProps) => {
  return (
    <div className={'flex min-h-screen w-full flex-col items-center justify-center gap-[20px]'}>
      <Image
        loading={'eager'}
        src={'/images/500.webp'}
        alt={'500'}
        width={500}
        height={500}
        className={'h-[500px] w-[500px]'}
      />
      <Link href={'/'}>
        <Button onClick={reset}>Reintentar</Button>
      </Link>
    </div>
  );
};

export default memo(ServerErrorLayout);
