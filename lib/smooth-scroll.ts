export function smoothScrollToId(targetId: string) {
  if (typeof window === 'undefined') return;
  const target = document.getElementById(targetId);
  if (!target) return;

  const header = document.querySelector('header');
  const headerHeight = header instanceof HTMLElement ? header.getBoundingClientRect().height : 0;

  const rect = target.getBoundingClientRect();
  const absoluteTop = rect.top + window.scrollY;
  const offset = absoluteTop - headerHeight - 16; // небольшое смещение вниз от шапки

  window.scrollTo({
    top: offset < 0 ? 0 : offset,
    behavior: 'smooth',
  });
}

