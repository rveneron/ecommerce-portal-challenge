import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

function NotFoundPage() {
  return (
    <div className={'flex min-h-screen w-full flex-col items-center justify-center gap-[20px]'}>
      <Image
        loading={'eager'}
        src={'/images/404.webp'}
        alt={'404'}
        width={500}
        height={500}
        className={'w-[500px]'}
      />
      <Link href={'/'}>
        <Button>Inicio</Button>
      </Link>
    </div>
  );
}

export default NotFoundPage;
