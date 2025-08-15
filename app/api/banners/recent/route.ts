import recentBanner from '@/constants/recent-banner.json';

export const dynamic = 'force-static';

export async function GET() {
  return Response.json({ data: recentBanner, error: null });
}
