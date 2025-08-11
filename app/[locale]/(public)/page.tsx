import PageWidthContainer from '@/components/core/layout/page-with-container';
import AdsList from '@/modules/home/components/ads-list/ads-list.component';
import Gallery from '@/modules/home/components/gallery/gallery.component';
import { getMainAds, getSecondaryAds } from '@/modules/common/services/ads';
import DrugStoreBanner from '@/modules/home/components/drug-store-banner/drug-store-banner.component';
import initTranslations from '@/i18n';
import SafeCarefullyBanner from '@/modules/home/components/safe-carefully-banner/safe-carefully-banner.component';
import { getRecommendedProducts, getSaveProducts } from '@/modules/common/services/products';
import OnePlaceSection from '@/modules/home/components/one-place-section/one-place-section.component';
import CategoryList from '@/modules/home/components/category-list/category-list.component';
import { getCategories } from '@/modules/common/services/categories';
import RecommendedProductSection from '@/modules/home/components/recommended-products-section/recommended-products-section.component';

type Props = {
  params: Promise<{ locale: string }>;
};

const i18nNamespaces = ['common'];

export default async function Home({ params }: Readonly<Props>) {
  const dynamicParams = await params;
  const { t } = await initTranslations(dynamicParams?.locale, i18nNamespaces);

  const [
    mainAdsResponse,
    categoriesResponse,
    secondaryAdsResponse,
    recommendedProductsResponse,
    saveProductsResponse
  ] = await Promise.all([
    getMainAds(),
    getCategories(),
    getSecondaryAds(),
    getRecommendedProducts(),
    getSaveProducts()
  ]);

  return (
    <div className={'min-h-screen pt-8'}>
      <Gallery
        ads={mainAdsResponse?.data?.data || []}
        className={'page-width-container mb-[55px]'}
      />
      <PageWidthContainer className={'mb-[70px]'}>
        <CategoryList categories={categoriesResponse?.data?.data || []} t={t} />
        <DrugStoreBanner t={t} className={'mt-[20px] xl:mt-[10px]'} />
      </PageWidthContainer>
      <RecommendedProductSection
        products={recommendedProductsResponse?.data?.data || []}
        className={'page-width-container mb-[70px]'}
        t={t}
      />
      <PageWidthContainer className={'mb-[70px]'}>
        <AdsList ads={secondaryAdsResponse?.data?.data || []} />
      </PageWidthContainer>
      <PageWidthContainer className={'max-sm:px-0'}>
        <SafeCarefullyBanner
          className={'mx-[20px] mb-[200px] sm:mx-0 xl:mb-[70px]'}
          t={t}
          discount={'-20%'}
          products={saveProductsResponse?.data?.data || []}
        />
        <OnePlaceSection t={t} />
      </PageWidthContainer>
    </div>
  );
}
