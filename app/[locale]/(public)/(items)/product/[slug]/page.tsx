import initTranslations from '@/i18n';
import i18nConfig from '@/i18nConfig';
import {
  getMostSellProducts,
  getProductBySlug,
  getSimilarsProducts
} from '@/modules/common/services/products';
import { IProduct } from '@/interfaces/product';
import { Metadata, ResolvingMetadata } from 'next';
import { getImageAbsolutePath } from '@/utils/image';
import ProductsDetailsContainer from '@/modules/product/containers/product-details/product-details.container';

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

/*export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { locale, slug } = await params;

  const product = await getProductBySlug(slug);
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: product.name,
    description: product.description,
    keywords: product?.slug,
    alternates: {
      canonical: new URL(`${process.env.NEXT_PUBLIC_APP_URL}/${locale}/product/${slug}`),
      languages: {
        'es-ES': '/es-ES'
      }
    },
    openGraph: {
      title: product.name,
      description: product?.description,
      images: product.image
        ? [getImageAbsolutePath(product.image), ...previousImages]
        : previousImages,
      type: 'website'
    }
  };
}*/

export async function generateStaticParams() {
  //Generar páginas estáticas para los productos más vendidos
  const mostSellProducts = await getMostSellProducts();

  if (!mostSellProducts?.length) {
    return [];
  }

  return mostSellProducts.flatMap((product: IProduct) =>
    i18nConfig.locales.map((locale) => ({
      lang: locale,
      slug: product.slug
    }))
  );
}

export const revalidate = 3600;

const i18nNamespaces = ['common'];

export default async function Page({ params }: Readonly<Props>) {
  const dynamicParams = await params;
  const product = await getProductBySlug(dynamicParams.slug);
  const similars = await getSimilarsProducts(dynamicParams.slug);

  const { t } = await initTranslations(dynamicParams?.locale, i18nNamespaces);

  return (
    <div className={'overflow-x-hidden pt-8'}>
      <ProductsDetailsContainer t={t} product={product} similars={similars} />
    </div>
  );
}
