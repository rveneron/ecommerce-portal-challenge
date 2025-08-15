import { recommendedProducts } from '@/constants/products';

export const dynamic = 'force-static';

export async function GET() {
  return Response.json({
    data: recommendedProducts,
    total: recommendedProducts?.length,
    error: null
  });
}
