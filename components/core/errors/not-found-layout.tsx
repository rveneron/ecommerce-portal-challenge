'use client';
import { memo, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import Container from '@/components/ui/container';

const NotFoundLayout = () => {
  const { push } = useRouter();
  const { t } = useTranslation();

  const goTo = useCallback(
    (to: string) => {
      push(to);
    },
    [push]
  );
  return (
    <Container className="mt-5 min-h-[60vh] lg:mt-24">
      <div className="gird-cols-1 grid gap-5 md:gap-10 lg:grid-cols-2 lg:gap-20">
        <div className="col-span-1">
          <div className="relative mx-auto flex h-full w-full object-contain object-right lg:h-[430px] lg:w-[500px]">
            <Image src={'/images/pages/error-404.webp'} width={500} height={430} alt={'error_404'} />
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex flex-col items-start justify-start">
            <h1 className="bg-btn-primary bg-clip-text text-[70px] font-bold leading-none text-transparent md:text-[140px]">
              404
            </h1>
            <h2 className="text-3xl font-bold leading-10 md:text-[39px]">
              {t('errors:pageNotFound.title')}
            </h2>
            <p className="mt-2 text-sm">{t('errors:notFound.description')}</p>
            <Button
              className="mt-4 w-full max-w-[220px]"
              variant="contained"
              color="primary"
              onClick={() => goTo('/')}
            >
              {t('errors:notFound.action')}
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default memo(NotFoundLayout);
