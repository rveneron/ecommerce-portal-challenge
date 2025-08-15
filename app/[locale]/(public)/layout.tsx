import type { Metadata } from 'next';
import * as React from 'react';
import initTranslations from '@/i18n';
import { ChildrenProps } from '@/types/children-props.type';
import TranslationsProvider from '@/context/translation-provider';
import Navbar from '@/modules/common/components/navbar/navbar.component';
import Footer from '@/modules/common/components/footer/footer.component';
import i18nConfig from '@/i18nConfig';
import { getCategories } from '@/modules/common/services/categories';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Botifarma',
  description: 'Botifarma',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true
    }
  }
};

export function generateStaticParams(_params: unknown) {
  return i18nConfig.locales.map((locale) => ({
    locale
  }));
}

const i18nNamespaces = ['common', 'menu'];

type Props = ChildrenProps & {
  params: Promise<{ locale: string }>;
};

export default async function RootLayout({ children, params }: Readonly<Props>) {
  const dynamicParams = await params;
  const { resources, t } = await initTranslations(dynamicParams?.locale, i18nNamespaces);

  const [categoriesResponse] = await Promise.all([getCategories()]);

  return (
    <main className="relative">
      <TranslationsProvider
        namespaces={i18nNamespaces}
        locale={dynamicParams?.locale}
        resources={resources}
      >
        <Navbar t={t} categories={categoriesResponse?.data || []} />
        {children}
        <Footer t={t} />
      </TranslationsProvider>
    </main>
  );
}
