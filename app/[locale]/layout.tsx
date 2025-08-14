import type { Metadata } from 'next';
import '../globals.css';
import { Inter, Montserrat } from 'next/font/google';
import * as React from 'react';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import MainProvider from '@/context/main.provider';
import i18nConfig from '@/i18nConfig';
import { dir } from 'i18next';
import { notFound } from 'next/navigation';
import NextTopLoader from 'nextjs-toploader';

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

const PUBLIC_APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(PUBLIC_APP_URL),
  title: 'Botifarma',
  description: 'Botifarma Store',
  alternates: {
    canonical: new URL(PUBLIC_APP_URL),
    languages: {
      'es-ES': '/es-ES'
    }
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true
    }
  }
};

export const dynamic = 'force-static';

export function generateStaticParams(_params: unknown) {
  return i18nConfig.locales.map((locale) => ({
    locale
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
        <MainProvider>{children}</MainProvider>
      </body>
    </html>
  );
}
