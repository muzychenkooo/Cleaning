/**
 * Вставьте в консоль браузера для проверки отсутствия горизонтального скролла.
 * Должно вывести: overflow: 0px, offenders: []
 */
(function () {
  const vw = document.documentElement.clientWidth;
  const sw = document.documentElement.scrollWidth;
  const delta = sw - vw;
  const offenders = [];
  document.querySelectorAll('*').forEach((el) => {
    const r = el.getBoundingClientRect();
    if (r.right > vw + 1 || r.left < -1) offenders.push({ tag: el.tagName, class: (el.className || '').slice(0, 50) });
  });
  console.log('%cOverflow check:', 'font-weight:bold', 'delta=' + delta + 'px', 'offenders=' + offenders.length);
  if (offenders.length) console.table(offenders);
  return delta === 0 && offenders.length === 0;
})();
