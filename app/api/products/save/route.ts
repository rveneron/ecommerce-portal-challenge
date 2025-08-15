import { saveProducts } from '@/constants/products';

export const dynamic = 'force-static';

export async function GET() {
  return Response.json({
    data: saveProducts,
    total: saveProducts?.length,
    error: null
  });
}
