import { mostSellProducts } from '@/constants/products';

export const dynamic = 'force-static';

export async function GET() {
  return Response.json({
    data: mostSellProducts,
    total: mostSellProducts?.length,
    error: null
  });
}
