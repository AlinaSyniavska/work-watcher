import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import { cn } from '@/lib/utils';

import './globals.css';
import Sidebar from '@/components/Sidebar/Sidebar';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Efforts',
  description: 'The App for tracking time and tasks',
  icons: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      sizes: '16x16',
      url: '/favicon.ico',
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
          fontSans.variable,
        )}
      >
        <main className="flex h-screen items-center justify-between px-24 py-12">
          <div className="flex h-full w-full  bg-secondary-foreground text-sm shadow-xl">
            <Sidebar />

            <div className={'w-full'}>{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}
