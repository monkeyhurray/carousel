import type { Metadata } from 'next';
import '@/styles/style.scss';

export const metadata: Metadata = {
  title: '캐러셀',
  description: '캐러셀 연습',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <main className="main">{children}</main>
      </body>
    </html>
  );
}
