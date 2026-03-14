'use client';

import { site } from '@/data/site';
import { Container } from '@/components/layout/container';
import { SocialIconLinks } from '@/components/ui/social-icon-links';

/**
 * Верхняя полоска шапки.
 * Слева: email + расписание.
 * Справа: соцсети → телефон (CTA-кнопки — в нижней полосе).
 */
export function Topbar() {
  return (
    <div className="hidden w-full overflow-visible border-b border-slate-100 bg-slate-50 lg:block">
      <Container className="header-container flex h-10 min-h-10 w-full min-w-0 max-w-full 2xl:max-w-[1760px] flex-nowrap items-center gap-4 text-sm px-4 sm:px-6 lg:px-8">

        {/* Левая группа: email + расписание */}
        <div className="flex min-w-0 flex-1 flex-nowrap items-center gap-3 overflow-hidden lg:gap-4">
          <a
            href={`mailto:${site.email}`}
            className="hidden shrink-0 truncate font-medium text-blue-900 hover:text-primary-600 xl:block xl:max-w-[220px]"
            title={site.email}
          >
            {site.email}
          </a>
          <span className="shrink-0 whitespace-nowrap font-semibold text-slate-500">{site.schedule}</span>
        </div>

        {/* Правая группа: Соцсети | Телефон — все три иконки в одном ряду */}
        <div className="topbar-right ml-auto flex min-w-0 shrink items-center gap-3 lg:gap-4 min-[1025px]:shrink-0">
          <div className="flex shrink-0 items-center border-r border-slate-200 pr-3 lg:pr-4">
            <SocialIconLinks size="sm" />
          </div>

          {/* Телефон */}
          <a
            href={`tel:+${site.phoneRaw}`}
            className="shrink-0 font-medium text-blue-900 hover:text-primary-600 whitespace-nowrap"
          >
            {site.phoneDisplay}
          </a>
        </div>
      </Container>
    </div>
  );
}
