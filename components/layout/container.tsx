import * as React from 'react';
import { cn } from '@/lib/utils';

/**
 * Global content container.
 * Mobile: max-w-full — NEVER exceed viewport (100% collapses to parent; parent constrained).
 * Desktop: wider max-width. Uses max-w-full on mobile to guarantee no overflow.
 */
/* max-w только когда viewport уже вмещает: 1440 при 2xl(1536+), иначе max-w-full */
const CONTAINER_CLASS =
  'mx-auto w-full min-w-0 max-w-full 2xl:max-w-[1440px] px-4 sm:px-6 lg:px-8';

export function Container({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(CONTAINER_CLASS, className)}
      {...props}
    />
  );
}
