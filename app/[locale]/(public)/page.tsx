import PageWidthContainer from '@/components/core/layout/page-with-container';
import AdsList from '@/modules/home/components/ads-list/ads-list.component';
import Gallery from '@/modules/home/components/gallery/gallery.component';
import { getMainAds, getSecondaryAds } from '@/modules/common/services/ads';
import DrugStoreBanner from '@/modules/home/components/drug-store-banner/drug-store-banner.component';
import initTranslations from '@/i18n';
import SafeCarefullyBanner from '@/modules/home/components/safe-carefully-banner/safe-carefully-banner.component';

type Props = {
  params: Promise<{ locale: string }>;
};

const i18nNamespaces = ['common'];

export default async function Home({ params }: Readonly<Props>) {
  const dynamicParams = await params;
  const { t } = await initTranslations(dynamicParams?.locale, i18nNamespaces);

  const [mainAdsResponse, secondaryAdsResponse] = await Promise.all([
    getMainAds(),
    getSecondaryAds()
  ]);

  return (
    <div className={'min-h-screen pt-8'}>
      <Gallery
        ads={mainAdsResponse?.data?.data || []}
        className={'page-width-container mb-[55px]'}
      />
      <PageWidthContainer className={'mb-[70px]'}>
        <DrugStoreBanner t={t} />
      </PageWidthContainer>
      <PageWidthContainer className={'mb-[70px]'}>
        <AdsList ads={secondaryAdsResponse?.data?.data || []} />
      </PageWidthContainer>
      <PageWidthContainer className={'mb-[70px]'}>
        <SafeCarefullyBanner t={t} />
      </PageWidthContainer>
    </div>
  );
}
