import type { Metadata } from 'next';
import * as React from 'react';
import initTranslations from '@/i18n';
import { ChildrenProps } from '@/types/children-props.type';
import TranslationsProvider from '@/context/translation-provider';
import Navbar from '@/modules/common/components/navbar/navbar.component';

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_STORE_NAME_SEO || 'Botifarma',
  description: process.env.NEXT_PUBLIC_STORE_DESCRIPTION_SEO || 'Botifarma',
  robots: {
    index: false,
    follow: false,
    nocache: false,
    googleBot: {
      index: false,
      follow: false
    }
  }
};

const i18nNamespaces = ['common', 'menu'];

type Props = ChildrenProps & {
  params: Promise<{ locale: string }>;
};

export default async function RootLayout({ children, params }: Readonly<Props>) {
  const dynamicParams = await params;
  const { resources, t } = await initTranslations(dynamicParams?.locale, i18nNamespaces);

  // const { data } = await getTreeCategories();

  return (
    <main className="relative">
      <TranslationsProvider
        namespaces={i18nNamespaces}
        locale={dynamicParams?.locale}
        resources={resources}
      >
        <Navbar t={t} />
        {children}
        {/*<NavbarWrapper>
          <TopNavbar categories={data || []} locale={dynamicParams?.locale} region={cookieRegion} />
        </NavbarWrapper>*/}

        {/*<div className="z-10 flex items-center justify-center bg-white px-4 lg:hidden">
          <Suspense fallback={<SkeletonSearchBar />}>
            <MobileSearchBar categories={data || []} />
          </Suspense>
        </div>*/}
        {/*<Footer t={t} />*/}
      </TranslationsProvider>
    </main>
  );
}
