// Text balancing via pretext — find the narrowest max-width that
// keeps the same line count, making each line roughly equal in length.
//
// This removes awkward orphaned words/characters on the last line
// of headings and callout quotes.

import { prepareWithSegments, walkLineRanges } from './pretext/layout.js';

// Build CSS font shorthand from computed style
function fontString(el) {
  const s = getComputedStyle(el);
  return `${s.fontStyle !== 'normal' ? s.fontStyle + ' ' : ''}${s.fontWeight} ${s.fontSize} ${s.fontFamily}`;
}

// Binary-search the narrowest width where lineCount stays the same.
// Returns null if the element is single-line (nothing to balance).
function findBalancedWidth(el) {
  const rect = el.getBoundingClientRect();
  const maxWidth = rect.width;
  if (maxWidth <= 0) return null;

  const text = el.textContent.trim();
  if (!text) return null;

  const font = fontString(el);
  const prepared = prepareWithSegments(text, font);

  let totalLines = 0;
  walkLineRanges(prepared, maxWidth, () => { totalLines++; });
  if (totalLines <= 1) return null;

  // Binary search: lo = floor (40% of max), hi = full width
  let lo = maxWidth * 0.4, hi = maxWidth;
  for (let i = 0; i < 24; i++) {
    const mid = (lo + hi) / 2;
    let lines = 0;
    walkLineRanges(prepared, mid, () => { lines++; });
    if (lines <= totalLines) hi = mid;
    else lo = mid;
  }

  return Math.ceil(hi);
}

function balanceAll() {
  const selectors = [
    '.site-header h1',
    'h2',
    '.key-quote p',
    '.closing p',
    // Only editorial blockquotes, not example-dialogue ones inside .scenario cards
    'main > blockquote p',
    '.acknowledgments blockquote p',
  ];

  for (const sel of selectors) {
    for (const el of document.querySelectorAll(sel)) {
      // Reset first so we measure the natural full width
      el.style.maxWidth = '';
      const w = findBalancedWidth(el);
      if (w !== null) el.style.maxWidth = w + 'px';
    }
  }
}

// Debounced resize handler
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(balanceAll, 120);
}, { passive: true });

// Wait for fonts then run
document.fonts.ready.then(balanceAll);
