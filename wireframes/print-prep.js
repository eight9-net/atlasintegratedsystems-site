// print-prep.js
// Strips background fills from Excalidraw wireframes for clean print output.
//
// KEPT (never stripped):
//   #dedede          image placeholder rects (patch-placeholders.js → hachure)
//   #4466cc rounded  CTA buttons and numbered badges (roundness !== null only)
//
// STRIPPED (everything else), including but not limited to:
//   #4466cc flat     bg-primary content boxes (non-rounded — content areas, not buttons)
//   #ffffff  (#BG_W) white content panels / footer columns / FAQ boxes
//   #f8f9fa  (#BG_L) light-grey panels, logo placeholder, carousel ref rows
//   #374151  (#BG_DK) dark card overlays, carousel slide area, section-bar headers
//   #9ca3af  (#BG_MD) nav stand-in, gallery label bars
//   #e9ecef           section label bars (light)
//   #60a5fa  (#FTR)  footer accent bar
//   (any other colour not in KEEP_BG is also stripped as a safety net)
//
// Note: generator scripts should use bg:'transparent' for content boxes so that
// the wireframe is clean before this script runs.  This script acts as a safety
// net in case any fills slip through.
//
// TEXT: white (#ffffff) strokeColor → dark (#1f2937) except on #4466cc rounded rects.

const fs = require('fs');

const files = require('fs').readdirSync('.').filter(f => f.endsWith('.excalidraw'));

const PH_BG  = '#dedede';  // image placeholders — always kept
const CTA_BG = '#4466cc';  // CTA colour — kept only on rounded rects (buttons/badges)
const WHITE  = '#ffffff';
const DARK   = '#1f2937';

// Is rect r a rounded (button/badge) element?
function isRounded(r) { return r.roundness !== null && r.roundness !== undefined; }

// Is the center of textEl inside rect r?
function inside(textEl, r) {
  const cx = textEl.x + textEl.width  / 2;
  const cy = textEl.y + textEl.height / 2;
  return cx >= r.x && cx <= r.x + r.width &&
         cy >= r.y && cy <= r.y + r.height;
}

files.forEach(file => {
  const d = JSON.parse(fs.readFileSync(file, 'utf8'));

  // Only rounded blue rects protect white text (buttons/badges, not content boxes)
  const blueRects = d.elements.filter(e =>
    e.type === 'rectangle' &&
    (e.backgroundColor || '').toLowerCase() === CTA_BG &&
    isRounded(e)
  );

  let bgRemoved = 0, textFixed = 0;

  d.elements = d.elements.map(el => {
    // ── Rectangles: strip fill unless it's a kept colour ────────────────────
    if (el.type === 'rectangle') {
      const bg = (el.backgroundColor || '').toLowerCase();
      if (bg && bg !== 'transparent') {
        const keep = bg === PH_BG || (bg === CTA_BG && isRounded(el));
        if (!keep) {
          bgRemoved++;
          return { ...el, backgroundColor: 'transparent' };
        }
      }
    }

    // ── Text: white → dark unless sitting on a rounded blue button ───────────
    if (el.type === 'text') {
      const col = (el.strokeColor || '').toLowerCase();
      if (col === WHITE && !blueRects.some(r => inside(el, r))) {
        textFixed++;
        return { ...el, strokeColor: DARK };
      }
    }

    return el;
  });

  fs.writeFileSync(file, JSON.stringify(d, null, 2));
  console.log(`${file.padEnd(40)} bg removed: ${String(bgRemoved).padStart(3)}   text darkened: ${String(textFixed).padStart(3)}`);
});
