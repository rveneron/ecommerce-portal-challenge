import { allProducts } from '@/constants/products';

export const dynamic = 'force-static';

export async function GET() {
  return Response.json({
    data: allProducts,
    total: allProducts?.length,
    error: null
  });
}
