import type { Metadata } from 'next';
import '../globals.css';
import { Inter, Montserrat } from 'next/font/google';
import { Toaster } from 'sonner';
import * as React from 'react';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import AppProvider from '@/context/app.provider';
import MainProvider from '@/context/main.provider';
import i18nConfig from '@/i18nConfig';
import { dir } from 'i18next';
import { notFound } from 'next/navigation';
import initTranslations from '@/app/i18n';
import NextTopLoader from 'nextjs-toploader';
import TranslationsProvider from '@/context/translation-provider';

const inter = Inter({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  fallback: ['sans-serif'],
  subsets: ['latin'],
  display: 'swap'
});

const monserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  fallback: ['sans-serif'],
  subsets: ['latin'],
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_APP_URL}`),
  title: process.env.NEXT_PUBLIC_STORE_NAME_SEO || 'Ecommerce platform',
  description: process.env.NEXT_PUBLIC_STORE_DESCRIPTION_SEO || 'Ecommerce platform',
  alternates: {
    canonical: new URL(`${process.env.NEXT_PUBLIC_APP_URL}/es`),
    languages: {
      'en-US': '/en-US',
      'es-ES': '/es-ES'
    }
  },
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

export function generateStaticParams(params: Record<string, string>) {
  return i18nConfig.locales.map((locale) => ({
    locale,
    region: params?.region || process.env.NEXT_PUBLIC_DEFAULT_REGION || 'hab'
  }));
}

const i18nNamespaces = ['common', 'errors'];

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  const { resources } = await initTranslations(locale, i18nNamespaces);

  if (!i18nConfig.locales.includes(locale)) {
    notFound();
  }

  return (
    <html lang={locale} dir={dir(locale)}>
      <body className={cn(inter.className, monserrat.className, 'antialiased')}>
        <NextTopLoader
          color="#264092"
          initialPosition={0.08}
          crawlSpeed={200}
          height={4}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #264092,0 0 5px #A94AA2"
          template='<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
          zIndex={999}
          showAtBottom={false}
        />

        <AppProvider>
          <MainProvider>{children}</MainProvider>
        </AppProvider>

        <TranslationsProvider namespaces={i18nNamespaces} locale={locale} resources={resources}>
          <Toaster />
        </TranslationsProvider>
      </body>
    </html>
  );
}
