'use client';

import Link from 'next/link';
import { site } from '@/data/site';
import { Button } from '@/components/ui/button';

export function StickyCta() {
  return (
    <div
      className="sticky-cta-bar fixed bottom-0 left-0 z-[100] w-full min-w-[320px] max-w-[639px] bg-white/95 shadow-[0_-4px_20px_-4px_rgba(0,0,0,0.12)] backdrop-blur box-border overflow-hidden sm:hidden"
      style={{ width: 'min(100vw, 639px)' }}
    >
      <div className="flex items-stretch gap-2 min-[380px]:gap-3 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] w-full min-w-0 box-border">
        <Button asChild className="flex-1 min-w-0 min-h-11 h-auto py-2.5 rounded-xl font-semibold box-border shrink basis-0 overflow-hidden">
          <Link
            href="/#special-offer"
            className="block min-w-0 whitespace-normal text-center"
            onClick={(event) => {
              if (typeof window === 'undefined' || typeof document === 'undefined') return;
              const url = new URL((event.currentTarget as HTMLAnchorElement).href);
              const isSamePath = url.pathname === window.location.pathname || url.pathname === '/';
              if (!isSamePath) return;
              const target = document.getElementById('special-offer');
              if (!target) return;
              event.preventDefault();
              target.scrollIntoView({ behavior: 'auto', block: 'start' });
            }}
          >
            {site.cta.order}
          </Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className="flex-1 min-w-0 min-h-11 h-auto py-2.5 rounded-xl font-semibold border-2 box-border shrink basis-0 overflow-hidden"
        >
          <Link
            href="/#zayavka"
            className="block min-w-0 whitespace-normal text-center"
            onClick={(event) => {
              if (typeof window === 'undefined' || typeof document === 'undefined') return;
              const url = new URL((event.currentTarget as HTMLAnchorElement).href);
              const isSamePath = url.pathname === window.location.pathname || url.pathname === '/';
              if (!isSamePath) return;
              const target = document.getElementById('zayavka');
              if (!target) return;
              event.preventDefault();
              target.scrollIntoView({ behavior: 'auto', block: 'start' });
            }}
          >
            {site.cta.calculateShort}
          </Link>
        </Button>
      </div>
    </div>
  );
}
