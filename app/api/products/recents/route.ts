import { recentProducts } from '@/constants/products';

export const dynamic = 'force-static';

export async function GET() {
  return Response.json({
    data: recentProducts,
    total: recentProducts?.length,
    error: null
  });
}
