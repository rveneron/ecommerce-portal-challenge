import { secondaryBanners } from '@/constants/banners';

export const dynamic = 'force-static';

export async function GET() {
  return Response.json({ data: secondaryBanners, total: secondaryBanners?.length, error: null });
}
