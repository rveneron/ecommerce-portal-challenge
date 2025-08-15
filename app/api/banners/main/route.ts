import mainBanners from '@/constants/main-banners.json';

export const dynamic = 'force-static';

export async function GET() {
  return Response.json({ data: mainBanners, total: mainBanners?.length, error: null });
}
