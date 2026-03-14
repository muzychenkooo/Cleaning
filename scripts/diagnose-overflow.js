/**
 * Horizontal overflow diagnostic script.
 * Paste into browser console on any page to find offending elements.
 *
 * Usage: Copy and paste the entire IIFE into the console, or run:
 *   node -e "console.log(require('fs').readFileSync('scripts/diagnose-overflow.js','utf8'))" | pbcopy
 *   then paste in console.
 */
(function diagnosOverflow() {
  const vw = document.documentElement.clientWidth;
  const sw = document.documentElement.scrollWidth;
  const bsw = document.body.scrollWidth;
  console.log(`viewport clientWidth: ${vw}`);
  console.log(`documentElement scrollWidth: ${sw}`);
  console.log(`body scrollWidth: ${bsw}`);
  console.log(`overflow delta: ${sw - vw}px`);

  const offenders = [];
  document.querySelectorAll('*').forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.right > vw + 1 || rect.left < -1) {
      offenders.push({
        el,
        tag: el.tagName,
        id: el.id,
        class: el.className?.toString?.().slice(0, 80),
        right: Math.round(rect.right),
        left: Math.round(rect.left),
        width: Math.round(rect.width),
        overflow_right: Math.round(rect.right - vw),
      });
    }
  });

  console.table(offenders);

  offenders.forEach((o) => {
    o.el.style.outline = '2px solid red';
  });

  return offenders;
})();