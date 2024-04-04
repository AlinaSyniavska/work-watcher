import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import { cn } from '@/lib/utils';

import './globals.css';
import Sidebar from '@/components/Sidebar/Sidebar';

const raleway = Raleway({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Efforts',
  description: 'The App for tracking time and tasks',
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32.png',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans text-primary antialiased',
          raleway.className,
        )}
      >
        <main className="flex h-screen items-center justify-between px-24 py-12">
          <div
            className="flex h-full w-full  bg-secondary-foreground text-sm shadow-xl"
            style={
              {
                // backgroundColor: 'rgba(255,255,255,0.25)',
                // boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                // backdropFilter: 'blur(1px)',
                // border: '1px solid rgba(255, 255, 255, 0.3)',
              }
            }
          >
            <Sidebar />

            <div className={'w-full'}>{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}
