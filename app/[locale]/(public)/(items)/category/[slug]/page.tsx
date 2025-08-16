import initTranslations from '@/i18n';
import i18nConfig from '@/i18nConfig';
import { Metadata, ResolvingMetadata } from 'next';
import { getCategories, getCategoryBySlug } from '@/modules/common/services/categories';
import { getImageAbsolutePath } from '@/utils/image';
import CategoryDetailsContainer from '@/modules/category/containers/category-details/category-details.container';
import { getProductsByCategory } from '@/modules/common/services/products';

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

/*export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { locale, slug } = await params;

  const category = await getCategoryBySlug(slug);
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: category.name,
    description: category.description,
    keywords: category?.slug,
    alternates: {
      canonical: new URL(`${process.env.NEXT_PUBLIC_APP_URL}/${locale}/category/${slug}`),
      languages: {
        'es-ES': '/es-ES'
      }
    },
    openGraph: {
      title: category.name,
      description: category?.description,
      images: [getImageAbsolutePath(category.image), ...previousImages],
      type: 'website'
    }
  };
}*/

export async function generateStaticParams() {
  //Generar páginas estáticas para todas las categorías
  const categories = await getCategories();

  if (!categories?.length) {
    return [];
  }

  return categories.flatMap((category) =>
    i18nConfig.locales.map((locale) => ({
      locale,
      slug: category.slug
    }))
  );
}

export const revalidate = 3600;
export const dynamicParams = false;

const i18nNamespaces = ['common'];

export default async function Page({ params }: Readonly<Props>) {
  const dynamicParams = await params;
  const category = await getCategoryBySlug(dynamicParams.slug);
  const products = await getProductsByCategory(category);

  const { t } = await initTranslations(dynamicParams?.locale, i18nNamespaces);

  return <CategoryDetailsContainer category={category} products={products} t={t} />;
}
