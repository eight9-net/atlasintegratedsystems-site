// gen-quote.js
// Atlas Integrated Systems — Request a Quote Page (RequestAQuote.vue)
// All section text matches actual Vue component content exactly.
// Output: wireframes/quote.excalidraw

'use strict';
const wf = require('./excalidraw-wf')();
const { W, P, HALF, THIRD,
        TX, TXL, TXM, STK, STKD,
        BG_W, BG_L, BG_DK, BG_MD, BG_PH, CTA, FTR,
        rect, txt, sectionBar, imgPlaceholder, btn, field, output } = wf;

let y = 0;

// ─── TITLE ────────────────────────────────────────────────────────────────────
rect('title', 0, y, W, 70, { bg: BG_DK, stroke: STKD, sw: 2 });
txt('title_t', 0, y + 18, W,
  'Atlas Integrated Systems — Request a Quote Page', { size: 26, color: TXL, align: 'center' });
txt('title_sub', 0, y + 50, W,
  'RequestAQuote.vue  |  PageHero + section (bg-blue-400 backdrop-brightness-50) + RequestAQuoteForm',
  { size: 11, color: TXM, align: 'center' });
y += 70;

// ─── NAVBAR REFERENCE ─────────────────────────────────────────────────────────
y += 10;
sectionBar('nav_bar', 0, y, W,
  'NAVBAR  (sticky  top-0  z-50  — see navigation.excalidraw for full detail)', '#e9ecef', TXM);
y += 26;
rect('nav_ref', 0, y, W, 80, { bg: BG_MD, stroke: STKD, sw: 2 });
rect('nav_logo', P, y + 20, 230, 40, { stroke: STK });
txt('nav_logo_t', P + 10, y + 30, 210,
  "atlas-logo.svg  → { name: 'home' }", { size: 11, color: TXM });
txt('nav_links', 310, y + 28, 760,
  "Home          Projects \u25BE          Services \u25BE          Request A Quote",
  { size: 15, color: TXL, align: 'center' });
btn('nav_cta', W - 190, y + 22, 'Contact Us', { w: 160, bg: CTA, stroke: CTA, color: TXL });
y += 80;

// ─── PAGE HERO ────────────────────────────────────────────────────────────────
y += 16;
sectionBar('hero_bar', 0, y, W,
  'PAGE HERO  — PageHero.vue  |  hero-bg-1.jpg (default)  |  :button="false"  |  title: "Request a Quote"',
  '#e9ecef', TXM);
y += 26;

const HERO_H = 360;
imgPlaceholder('hero_img', 0, y, W, HERO_H, 'hero-bg-1.jpg  (bg-fixed bg-center bg-cover  +  bg-black opacity-40)');
txt('hero_h1', HALF - 500, y + 140, 1000,
  'Request a Quote', { size: 44, color: TXL, align: 'center' });
y += HERO_H;

// ─── QUOTE FORM SECTION ───────────────────────────────────────────────────────
y += 16;
sectionBar('form_bar', 0, y, W,
  'QUOTE FORM SECTION  — RequestAQuote.vue <section class="contact-us-section">  |  bg-blue-400 bg-cover  +  backdrop-brightness-50  |  #ContactUs',
  '#e9ecef', TXM);
y += 26;

const FM_W   = 980;
const FM_X   = HALF - FM_W / 2;
const FH_W   = (FM_W - 16) / 2;   // half-width field
const FT_W   = (FM_W - 32) / 3;   // third-width field
const CT_H   = 820;

imgPlaceholder('form_bg', 0, y, W, CT_H, '(bg-blue-400 bg-cover  backdrop-brightness-50)');
txt('form_ttl', 0, y + 24, W,
  'Fill Out Our Form to Request a Quote', { size: 24, color: TXL, align: 'center' });

const FM_Y = y + 76;

// Row 1: Contact Name + Title
field('fm_name',    FM_X,              FM_Y,       FH_W, 'Contact Name *');
field('fm_title',   FM_X + FH_W + 16, FM_Y,       FH_W, 'Title *');

// Row 2: Phone + Email
field('fm_phone',   FM_X,              FM_Y + 58,  FH_W, 'Phone *');
field('fm_email',   FM_X + FH_W + 16, FM_Y + 58,  FH_W, 'Email *');

// Row 3: Property Type + Company
field('fm_ptype',   FM_X,              FM_Y + 116, FH_W, 'Property Type *');
field('fm_company', FM_X + FH_W + 16, FM_Y + 116, FH_W, 'Company Name');

// Row 4: Message textarea
rect('fm_msg', FM_X, FM_Y + 174, FM_W, 120, { stroke: STKD, round: true });
txt('fm_msg_t', FM_X + 14, FM_Y + 192, FM_W - 28, 'Questions? \u2026', { size: 13, color: STK });

// Row 5: Needs checkboxes + Communications checkboxes + Timeframe select
const CB_Y = FM_Y + 310;
const CB_W = FT_W;

rect('fm_needs_box', FM_X, CB_Y, CB_W, 160, { stroke: STKD, sw: 1 });
txt('fm_needs_lbl', FM_X + P, CB_Y + 8, CB_W - P * 2,
  'Needs (click all that apply)', { size: 11, color: TXL });
txt('fm_needs_opts', FM_X + P, CB_Y + 28, CB_W - P * 2,
  '\u25A1 SCADA\n\u25A1 Communications\n\u25A1 Design / Engineering\n\u25A1 Integration\n\u25A1 Service',
  { size: 12, color: TXL });

rect('fm_comm_box', FM_X + CB_W + 16, CB_Y, CB_W, 160, { stroke: STKD, sw: 1 });
txt('fm_comm_lbl', FM_X + CB_W + 16 + P, CB_Y + 8, CB_W - P * 2,
  'Type(s) of Communications (click all that apply)', { size: 11, color: TXL });
txt('fm_comm_opts', FM_X + CB_W + 16 + P, CB_Y + 28, CB_W - P * 2,
  '\u25A1 Radios\n\u25A1 Fiber Optics\n\u25A1 Cable Assemblies\n\u25A1 Other',
  { size: 12, color: TXL });
txt('fm_comm_other', FM_X + CB_W + 16 + P, CB_Y + 110, CB_W - P * 2,
  '[ Other Communications field — shown if "Other" checked ]',
  { size: 10, color: TXM });

rect('fm_tf_box', FM_X + (CB_W + 16) * 2, CB_Y, CB_W, 160, { stroke: STKD, sw: 1 });
txt('fm_tf_lbl', FM_X + (CB_W + 16) * 2 + P, CB_Y + 8, CB_W - P * 2,
  'Timeframe', { size: 11, color: TXL });
txt('fm_tf_opts', FM_X + (CB_W + 16) * 2 + P, CB_Y + 28, CB_W - P * 2,
  '[ Select ]\nImmediate\n1-3 months\n3-6 months\nWithin a year\nOver a one year + period',
  { size: 12, color: TXL });

// Submit button
btn('fm_submit', FM_X + FM_W - 200, CB_Y + 180, 'Request Quote',
  { w: 200, bg: CTA, stroke: CTA, color: TXL });

// Annotations
txt('fm_ann', FM_X, CB_Y + 222, FM_W,
  'isDisabledRef: prevents double-submit  |  messageSentRef: green success banner  |  messageErrorRef: red error banner  |  honeypot: hidden text field  |  subject auto-set: "Quote Request from {company} ({name})"',
  { size: 9, color: TXM });

y += CT_H;

// ─── FOOTER ───────────────────────────────────────────────────────────────────
y += 16;
sectionBar('ftr_bar_lbl', 0, y, W, 'FOOTER  — MainLayout.vue  (shared)', '#e9ecef', TXM);
y += 26;
rect('ftr', 0, y, W, 220, { stroke: STKD, sw: 2 });
rect('ftr_bar', 0, y, W, 46, { bg: FTR, stroke: FTR });
txt('ftr_tag', 0, y + 12, W,
  'Communications Systems Design', { size: 15, color: TXL, align: 'center' });

rect('ftr_c1', 0,         y + 46, THIRD, 174, { stroke: STK });
txt('ftr_phone', P, y + 66, THIRD - P * 2,
  '\u260E  1 (949)-509-9605', { size: 13, color: TX });

rect('ftr_c2', THIRD,     y + 46, THIRD, 174, { stroke: STK });
txt('ftr_addr', THIRD + P, y + 58, THIRD - P * 2,
  '\u2302  6789 Quail Hill Pkwy #405\n     Irvine, CA 92603',
  { size: 13, color: TX, align: 'center' });

rect('ftr_c3', THIRD * 2, y + 46, THIRD, 174, { stroke: STK });
txt('ftr_email', THIRD * 2 + P, y + 66, THIRD - P * 2,
  '\u2709  info@atlasintegratedsystems.com', { size: 13, color: TX, align: 'right' });

rect('ftr_logo', HALF - 80, y + 104, 160, 56, { stroke: STK });
txt('ftr_logo_t', HALF - 68, y + 124, 136,
  'ATLAS LOGO', { size: 11, color: TXM, align: 'center' });

txt('ftr_lic', 0, y + 178, W,
  'CA Lic. #777306  |  ACO 6678  |  \u00A9 2026 All Rights Reserved  \u2014  Atlas Integrated Systems, Inc.',
  { size: 11, color: TXM, align: 'center' });
y += 220;

// ─── OUTPUT ───────────────────────────────────────────────────────────────────
output('quote.excalidraw');
