'use client';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Companies } from '@/components/Companies';
import { Mission } from '@/components/Mission';
import { Cases } from '@/components/Cases';
import { Method } from '@/components/Method';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <Companies />
      <Mission />
      <Cases />
      <Method />
      <FAQ />
      <Footer />
    </main>
  );
}