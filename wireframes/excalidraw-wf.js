/**
 * excalidraw-wf.js
 * Reusable Excalidraw wireframe helper library.
 *
 * Usage in a generator script:
 *
 *   const wf = require('./excalidraw-wf')();          // default SCADA palette
 *   const { W, P, HALF, TX, TXL, TXM, STK, STKD,
 *           BG_W, BG_L, BG_DK, BG_PH, CTA,
 *           rect, txt, sectionBar, imgPlaceholder,
 *           btn, field, output } = wf;
 *
 *   let y = 0;
 *
 *   rect('header', 0, y, W, 80, { bg: BG_W, stroke: STKD, sw: 2 });
 *   txt('nav', P, y + 30, 820, 'Home  |  About', { size: 13, color: TX });
 *   y += 80;
 *
 *   output('wireframes/mypage.excalidraw');  // write to file
 *   // -or- output()                         // write JSON to stdout
 *
 * Override palette / canvas width:
 *
 *   const wf = require('./excalidraw-wf')({ W: 1280, CTA: '#0066ff' });
 */

'use strict';

const fs = require('fs');

module.exports = function createWireframe(opts = {}) {

  // ── Canvas & layout ─────────────────────────────────────────────────────────
  const W     = opts.W     || 1440;
  const P     = opts.P     || 16;          // base padding / margin
  const HALF  = W / 2;
  const THIRD = Math.floor(W / 3);

  // ── Colour palette ───────────────────────────────────────────────────────────
  // Body & label text
  const TX     = opts.TX     || '#1f2937'; // dark body text
  const TXL    = opts.TXL    || '#ffffff'; // light text on dark / blue backgrounds
  const TXM    = opts.TXM    || '#6b7280'; // muted / annotation text

  // Strokes
  const STK    = opts.STK    || '#9ca3af'; // hairline (sw:1)
  const STKD   = opts.STKD   || '#6b7280'; // section container (sw:2)

  // Section backgrounds
  const BG_W   = opts.BG_W   || '#ffffff'; // white
  const BG_L   = opts.BG_L   || '#f8f9fa'; // light grey
  const BG_DK  = opts.BG_DK  || '#374151'; // dark hero / contact
  const BG_MD  = opts.BG_MD  || '#9ca3af'; // parallax section stand-in
  const BG_PH  = opts.BG_PH  || '#dedede'; // image placeholder (post-processed → hachure)
  const BG_BTN = opts.BG_BTN || '#e5e7eb'; // neutral ghost button (prefer CTA where possible)

  // Accent colours
  const CTA    = opts.CTA    || '#4466cc'; // primary CTA / nav button
  const FTR    = opts.FTR    || '#60a5fa'; // footer bar (blue-400)

  // ── Internal state ───────────────────────────────────────────────────────────
  const elements = [];
  let sc = 100;
  const mk = () => sc++;

  // ── Primitive: rectangle ─────────────────────────────────────────────────────
  // opts: bg, stroke, sw (stroke-width), round (boolean → type:3 roundness)
  function rect(id, x, y, w, h, opts = {}) {
    const { bg = 'transparent', stroke = STK, sw = 1, round = false } = opts;
    elements.push({
      id, type: 'rectangle', x, y, width: w, height: h, angle: 0,
      strokeColor: stroke, backgroundColor: bg, fillStyle: 'solid',
      strokeWidth: sw, strokeStyle: 'solid', roughness: 0, opacity: 100,
      groupIds: [], frameId: null,
      roundness: round ? { type: 3 } : null,
      seed: mk(), version: 1, versionNonce: mk(), isDeleted: false,
      boundElements: null, updated: 1708800000000, link: null, locked: false,
    });
  }

  // ── Primitive: text ──────────────────────────────────────────────────────────
  // opts: size (px), color (hex), align ('left'|'center'|'right')
  // Height is auto-calculated from line count × line-height.
  function txt(id, x, y, w, content, opts = {}) {
    const { size = 14, color = TX, align = 'left' } = opts;
    const lines = content.split('\n').length;
    const h = Math.ceil(size * 1.4 * lines) + 6;
    elements.push({
      id, type: 'text', x, y, width: w, height: h, angle: 0,
      strokeColor: color, backgroundColor: 'transparent', fillStyle: 'solid',
      strokeWidth: 1, strokeStyle: 'solid', roughness: 0, opacity: 100,
      groupIds: [], frameId: null, roundness: null,
      seed: mk(), version: 1, versionNonce: mk(), isDeleted: false,
      boundElements: null, updated: 1708800000000, link: null, locked: false,
      text: content, fontSize: size, fontFamily: 2, // 2 = Helvetica
      textAlign: align, verticalAlign: 'top',
      containerId: null, originalText: content, lineHeight: 1.4,
    });
  }

  // ── Composite: section label bar (26 px tall) ────────────────────────────────
  // barBg defaults to light grey; labelColor defaults to TXM.
  function sectionBar(id, x, y, w, label, barBg, labelColor) {
    rect(id + '_bar', x, y, w, 26, { bg: barBg || '#e9ecef', stroke: STKD });
    txt(id + '_bar_t', x + 8, y + 5, w - 16, label, { size: 11, color: labelColor || TXM });
  }

  // ── Composite: image placeholder ────────────────────────────────────────────
  // Renders a #dedede rect + centred filename label.
  // Run patch-placeholders.js post-processor to convert to hachure for printing.
  function imgPlaceholder(id, x, y, w, h, filename) {
    rect(id + '_box', x, y, w, h, { bg: BG_PH, stroke: STK });
    txt(id + '_lbl', x + 8, y + h / 2 - 10, w - 16,
      '[' + filename + ']', { size: 12, color: TXM, align: 'center' });
  }

  // ── Composite: button ────────────────────────────────────────────────────────
  // opts: w (width, default 160), bg, stroke, color
  // Primary CTA: btn(id, x, y, 'Label', { bg: CTA, stroke: CTA, color: TXL })
  function btn(id, x, y, label, opts = {}) {
    const bw  = opts.w      || 160;
    const bg  = opts.bg     || BG_BTN;
    const stk = opts.stroke || STK;
    const col = opts.color  || TX;
    rect(id + '_bg', x, y, bw, 36, { bg, stroke: stk, round: true });
    txt(id + '_lbl', x + 10, y + 9, bw - 20, label, { size: 13, color: col, align: 'center' });
  }

  // ── Composite: form input field ──────────────────────────────────────────────
  // Dark-background field with muted placeholder text.
  function field(id, x, y, w, placeholder) {
    rect(id, x, y, w, 44, { bg: '#4B5563', stroke: STKD, round: true });
    txt(id + '_t', x + 12, y + 14, w - 24, placeholder, { size: 13, color: STK });
  }

  // ── Output ───────────────────────────────────────────────────────────────────
  // If filename is given, writes the file; otherwise writes JSON to stdout.
  function output(filename) {
    const doc = {
      type: 'excalidraw', version: 2,
      source: 'https://excalidraw.com',
      elements,
      appState: { gridSize: null, viewBackgroundColor: '#ffffff' },
      files: {},
    };
    const json = JSON.stringify(doc, null, 2);
    if (filename) {
      fs.writeFileSync(filename, json);
      console.error('Wrote ' + elements.length + ' elements → ' + filename);
    } else {
      process.stdout.write(json);
    }
  }

  // ── Public API ───────────────────────────────────────────────────────────────
  return {
    // Layout constants
    W, P, HALF, THIRD,
    // Palette
    TX, TXL, TXM,
    STK, STKD,
    BG_W, BG_L, BG_DK, BG_MD, BG_PH, BG_BTN,
    CTA, FTR,
    // Primitives
    rect, txt,
    // Composites
    sectionBar, imgPlaceholder, btn, field,
    // Output
    output,
    // Raw element array (for inspection / testing)
    get elements() { return elements; },
  };
};
