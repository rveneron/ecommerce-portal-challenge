import { recentBanner } from '@/constants/banners';

export const dynamic = 'force-static';

export async function GET() {
  return Response.json({ data: recentBanner, error: null });
}
