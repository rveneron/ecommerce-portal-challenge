import PageWidthContainer from '@/components/core/layout/page-with-container';
import AdsList from '@/modules/home/components/ads-list/ads-list.component';
import Gallery from '@/modules/home/components/gallery/gallery.component';
import { getMainAds, getSecondaryAds } from '@/modules/common/services/ads';

export default async function Home() {
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
      <PageWidthContainer>
        <AdsList ads={secondaryAdsResponse?.data?.data || []} />
      </PageWidthContainer>
    </div>
  );
}
