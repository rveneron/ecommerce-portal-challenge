import { ReactNode } from 'react';
import '@/app/globals.css';
import type { Metadata } from 'next';
import { PUBLIC_APP_URL } from '@/constants';
import AdsBar from '@/modules/common/components/ads-bar/ads-bar.component';

export const metadata: Metadata = {
  metadataBase: new URL(PUBLIC_APP_URL),
  title: 'Botifarma',
  description:
    'Bienvenido a botifarma, tu tienda en línea especializada en medicamentos, productos de cuidado personal y soluciones de bienestar. Navega con confianza por nuestro catálogo cuidadosamente seleccionado, donde encontrarás desde tratamientos recetados hasta suplementos naturales, todo con la garantía de calidad y seguridad que mereces.'
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div className="page-width-container relative flex flex-col-reverse gap-5 py-8 xl:flex-row">
      <div className="data-content">{children}</div>
      <aside className="ads-section relative">
        <AdsBar className={'w-full h-full'}/>
      </aside>
    </div>
  );
}
