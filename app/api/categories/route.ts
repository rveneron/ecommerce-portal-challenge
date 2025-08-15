import categories from '@/constants/categories.json';

export const dynamic = 'force-static';

export async function GET() {
  return Response.json({ data: categories, total: categories?.length, error: null });
}
