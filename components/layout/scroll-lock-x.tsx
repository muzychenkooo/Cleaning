'use client';

import * as React from 'react';

/**
 * Жёстко блокирует горизонтальный скролл при любых обстоятельствах:
 * - Сбрасывает scrollLeft на 0 при любой попытке прокрутки
 * - Блокирует горизонтальное колёсико мыши
 */
export function ScrollLockX() {
  React.useEffect(() => {
    function forceNoScrollX() {
      document.documentElement.scrollLeft = 0;
      document.body.scrollLeft = 0;
      if (window.scrollX !== 0) {
        window.scrollTo(0, window.scrollY);
      }
    }

    function handleScroll() {
      if (document.documentElement.scrollLeft !== 0 || document.body.scrollLeft !== 0 || window.scrollX !== 0) {
        forceNoScrollX();
      }
    }

    function handleWheel(e: WheelEvent) {
      if (Math.abs(e.deltaX) > 0) {
        e.preventDefault();
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('wheel', handleWheel, { passive: false });

    const intervalId = setInterval(forceNoScrollX, 150);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleWheel);
      clearInterval(intervalId);
    };
  }, []);

  return null;
}
