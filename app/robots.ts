const baseUrl = process.env.NEXT_PUBLIC_APP_URL;

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        disallow: ['/auth/*', '/admin/*']
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl
  };
}
