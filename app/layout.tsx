import Link from 'next/link';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Frontend UIs',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} relative bg-slate-900 h-screen text-slate-50`}
      >
        <Link
          href="/"
          className="rounded px-4 py-2 bg-indigo-400 text-indigo-950 absolute bottom-4 right-4"
        >
          Back To Home Page
        </Link>
        {children}
      </body>
    </html>
  );
}
