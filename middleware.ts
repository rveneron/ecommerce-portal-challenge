import type { NextRequest } from 'next/server';
import { i18nRouter } from 'next-i18n-router';
import i18nConfig from './i18nConfig';

export async function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  // Get the current locale from the cookie or use the default
  const locale = request?.cookies?.get('NEXT_LOCALE')?.value || i18nConfig?.defaultLocale;

  // Initialize i18nRouter with a request and i18n config
  const i18nRedirect = i18nRouter(request, i18nConfig);

  // If the conditions are not met, continue with the request normally.
  return i18nRedirect;
}

// Apply middleware only to relevant routes
export const config = {
  matcher: ['/', '/(es|en)/:path*', '/((?!_next|_vercel|api|sitemap|.*\\..*).*)']
};
