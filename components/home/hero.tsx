'use client';

import Link from 'next/link';
import type { MouseEvent } from 'react';
import { site } from '@/data/site';
import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import { assetUrl } from '@/lib/asset-url';

const HERO_BANNER_PATH = '/assets/banner/hero-banner.png';

function handleHomeAnchorClick(event: MouseEvent<HTMLAnchorElement>, targetId: string) {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;

  const url = new URL((event.currentTarget as HTMLAnchorElement).href);
  const isSamePath = url.pathname === window.location.pathname || url.pathname === '/';

  if (!isSamePath) {
    return;
  }

  const target = document.getElementById(targetId);
  if (!target) return;

  event.preventDefault();

  const top = target.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({
    top,
    behavior: 'auto',
  });
}

export function Hero() {
  return (
    <section className="relative w-full max-w-full min-w-0 overflow-hidden text-white hero-full bg-[#0b1b3a]">
      {/* Фоновое изображение: мобильная и планшет — cover без пустых мест; ПК — отдельный блок */}
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-no-repeat bg-center lg:hidden hero-bg-original"
        style={{ backgroundImage: `url(${assetUrl(HERO_BANNER_PATH)})` }}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-no-repeat hidden lg:block hero-bg-original"
        style={{
          backgroundImage: `url(${assetUrl(HERO_BANNER_PATH)})`,
          backgroundSize: 'cover',
          backgroundPosition: 'right 12%',
        }}
      />
      {/* Дополнительное мягкое затемнение для десктопного фонового изображения и диапазона 877–1023px */}
      <div
        aria-hidden
        className="absolute inset-0 hidden lg:block pointer-events-none bg-black/60 hero-desktop-overlay"
      />
      {/* Затемнение: базовый градиент + дополнительный слой на точке 876px */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none hero-overlay-base"
        style={{
          background:
            'linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.28) 45%, rgba(0,0,0,0.1) 70%, transparent 100%)',
        }}
      />
      <div aria-hidden className="absolute inset-0 pointer-events-none hero-overlay-876" />
      <Container className="relative flex items-center justify-center pt-6 pb-10 sm:py-24 lg:py-32 lg:justify-start hero-inner">
        <div className="max-w-full w-full text-center lg:text-left lg:max-w-4xl">
          <h1 className="font-display text-3xl font-bold uppercase tracking-[0.22em] text-primary-200/95 sm:text-4xl animate-fade-in [text-shadow:0_1px_2px_rgba(0,0,0,0.4)]">
            КЛИНИНГОВАЯ КОМПАНИЯ
          </h1>
          <h2 className="font-display mt-3 sm:mt-6 text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight animate-slide-up text-balance leading-[1.1] [text-shadow:0_1px_3px_rgba(0,0,0,0.4)]">
            БОЛЬШАЯ УБОРКА
          </h2>
          <p className="mt-3 sm:mt-6 text-lg sm:text-2xl text-slate-200 leading-relaxed max-w-full lg:max-w-xl lg:mx-0 mx-auto text-balance [text-shadow:0_1px_2px_rgba(0,0,0,0.4)]">
            Профессиональная уборка. Для частных лиц и организаций. В Москве и Московской области.
          </p>
          <div className="mt-6 sm:mt-12 flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
            <Button
              asChild
              size="lg"
              className="font-semibold rounded-xl px-6 py-3 text-base min-w-[240px] border border-transparent bg-[#1D4ED8] text-white hover:bg-[#1D4ED8] hover:brightness-[1.08]"
            >
              <Link
                href="/#contact-questions"
                onClick={(event) => handleHomeAnchorClick(event, 'contact-questions')}
              >
                {site.cta.callback}
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="font-semibold rounded-xl px-6 py-3 text-base min-w-[240px] border border-slate-300 bg-[#EFF6FF] text-slate-900 hover:bg-[#EFF6FF] hover:border-slate-400"
            >
              <Link
                href="/#zayavka"
                onClick={(event) => handleHomeAnchorClick(event, 'zayavka')}
              >
                {site.cta.calculate}
              </Link>
            </Button>
          </div>
          <div className="hero-usp-cards mt-6 sm:mt-12 mb-6 sm:mb-8 text-sm sm:text-base text-slate-100/90">
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 hero-usp-row">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm hero-usp-card">
                <span className="inline-block h-2 w-2 rounded-full bg-amber-400 shrink-0" aria-hidden />
                <span>Живые отзывы 4.9</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm hero-usp-card">
                <span className="inline-block h-2 w-2 rounded-full bg-sky-400 shrink-0" aria-hidden />
                <span>Любые помещения</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm hero-usp-card">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 shrink-0" aria-hidden />
                <span>Физические и юридические лица</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm hero-usp-card">
                <span className="inline-block h-2 w-2 rounded-full bg-indigo-300 shrink-0" aria-hidden />
                <span>Опыт более 8 лет</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
