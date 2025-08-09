'use client';
import { memo } from 'react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import Container from '@/components/ui/container';
import Image from 'next/image';
import ShapesWrapper from '@/components/core/shapes-wrapper/shapes-wrapper';

interface ServerErrorLayoutProps {
  reset?: () => void;
}

const ServerErrorLayout = ({ reset = () => location?.reload() }: ServerErrorLayoutProps) => {
  const { t } = useTranslation();
  return (
    <ShapesWrapper
      imgLeft="/images/shapes/shape-left-1.webp"
      imgLeftClass="!-left-[140px] h-[617px] w-[624px] !top-[480px]"
      imgRight="/images/shapes/shape-right-1.webp"
      imgRightClass="!-right-[85px] h-[517px] w-[524px] -top-[50px]"
      sizesLeft="(max-width: 624px) 100vw, (max-width:617px) 50vw, 33vw"
      sizesRight="(max-width: 624px) 100vw, (max-width:617px) 50vw, 33vw"
      loading="eager"
    >
      <Container className="mt-5 min-h-[60vh] lg:mt-24">
        <div className="gird-cols-1 grid items-center gap-5 md:gap-10 lg:grid-cols-2 lg:gap-20">
          <div className="col-span-1 flex w-full items-center justify-center lg:justify-end">
            <div className="relative flex h-[250px] w-[250px] items-center justify-center object-contain object-right md:justify-end lg:h-[432px] lg:w-[428px]">
              <Image
                src={'/images/pages/error2-500.webp'}
                fill
                className="bg-contain object-contain"
                loading="eager"
                sizes="(max-width: 624px) 100vw, (max-width:617px) 50vw, 33vw"
                alt={'error_500'}
              />
            </div>
          </div>
          <div className="col-span-1 w-full lg:max-w-[512px]">
            <div className="flex flex-col items-start justify-center lg:justify-start">
              {/*<h1 className="bg-btn-primary bg-clip-text text-[70px] font-bold leading-none text-transparent md:text-[140px]">*/}
              {/*  500*/}
              {/*</h1>*/}
              <h2 className="bg-btn-primary bg-clip-text text-3xl font-bold leading-normal text-transparent md:text-[49px]">
                {t('errors:serverError.title')}
              </h2>
              <h3 className="bg-btn-primary bg-clip-text text-xl font-bold text-transparent md:text-[32px]">
                {t('errors:serverError.subtitle')}
              </h3>
              <p className="mt-2 text-sm text-primary">{t('errors:serverError.description')}</p>

              <Button
                className="mt-4 w-full max-w-[220px] rounded-full"
                variant="contained"
                color="primary"
                onClick={() => reset()}
              >
                {t('errors:serverError.action')}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </ShapesWrapper>
  );
};

export default memo(ServerErrorLayout);
