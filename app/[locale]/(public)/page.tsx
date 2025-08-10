import PageWidthContainer from '@/components/core/layout/page-with-container';
import AdsList from '@/modules/home/components/ads-list/ads-list.component';
import { ads } from '@/data/ads';

export default function Home() {
  return (
    <div className={'min-h-screen pt-8'}>
      <PageWidthContainer>
        <AdsList ads={ads} />
      </PageWidthContainer>
    </div>
  );
}
