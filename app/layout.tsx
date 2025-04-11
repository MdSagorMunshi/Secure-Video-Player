import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Secure Video Player - Private & Secure Video Playback',
  description: 'A secure, private video player that ensures your privacy with client-side processing and no data retention.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1 animate-fade-in">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}