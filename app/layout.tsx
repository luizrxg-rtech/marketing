import './globals.css';
import type { Metadata } from 'next';
import { LanguageProvider } from '@/hooks/useLanguage';

export const metadata: Metadata = {
  title: 'RTech',
  description: 'Somos a solução de performance em vendas para sua marca. Transformando marcas através de estratégias digitais baseadas em dados.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}