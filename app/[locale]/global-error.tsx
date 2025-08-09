'use client';

import { useEffect } from 'react';
import { Poppins } from 'next/font/google';
import ServerErrorLayout from '@/components/core/errors/server-error-layout';
import { cn } from '@/lib/utils';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  fallback: ['sans-serif'],
  subsets: ['latin'],
  display: 'swap'
});

export default function GlobalError({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Next,JS error =======:', error);
  }, [error]);

  return (
    <html lang="en">
      <body className={cn(poppins.className)}>
        <main>
          <ServerErrorLayout reset={reset} />
        </main>
      </body>
    </html>
  );
}
