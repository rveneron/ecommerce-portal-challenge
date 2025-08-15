import saveProducts from '@/constants/save-products.json';
export const dynamic = 'force-static';

export async function GET() {
  return Response.json({
    data: saveProducts,
    total: saveProducts?.length,
    error: null
  });
}
