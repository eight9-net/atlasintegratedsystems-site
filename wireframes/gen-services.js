// gen-services.js
// Atlas Integrated Systems — Services Page (Services.vue)
// All section text matches actual Vue component content exactly.
// Output: wireframes/services.excalidraw

'use strict';
const wf = require('./excalidraw-wf')();
const { W, P, HALF, THIRD,
        TX, TXL, TXM, STK, STKD,
        BG_W, BG_L, BG_DK, BG_MD, BG_PH, CTA, FTR,
        rect, txt, sectionBar, imgPlaceholder, btn, field, output } = wf;

function wrap(text, n) {
  const words = text.split(' ');
  const lines = [];
  let cur = '';
  for (const w of words) {
    if (cur.length + (cur ? 1 : 0) + w.length > n && cur.length > 0) {
      lines.push(cur);
      cur = w;
    } else {
      cur = cur ? cur + ' ' + w : w;
    }
  }
  if (cur) lines.push(cur);
  return lines.join('\n');
}

let y = 0;

// ─── TITLE ────────────────────────────────────────────────────────────────────
rect('title', 0, y, W, 70, { bg: BG_DK, stroke: STKD, sw: 2 });
txt('title_t', 0, y + 18, W,
  'Atlas Integrated Systems — Services Page', { size: 26, color: TXL, align: 'center' });
txt('title_sub', 0, y + 50, W,
  'Services.vue  |  PageHero + ContentRightSection × 2 + ContentLeftSection × 2',
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
  'PAGE HERO  — PageHero.vue  |  min-h-[640px]  |  fiber-optic-bg.jpg  |  :button="false"',
  '#e9ecef', TXM);
y += 26;

const HERO_H = 640;
imgPlaceholder('hero_img', 0, y, W, HERO_H, 'fiber-optic-bg.jpg  (bg-fixed bg-center bg-cover  +  bg-black opacity-40)');
const heroW = 820;
const heroX = HALF - heroW / 2;
txt('hero_h1', heroX, y + 240, heroW,
  'Our Services', { size: 44, color: TXL, align: 'center' });
y += HERO_H;

// ─── COMMUNICATIONS SYSTEMS DESIGN (ContentRightSection) ──────────────────────
y += 16;
sectionBar('csd_bar', 0, y, W,
  'CONTENT RIGHT SECTION  — #CommunicationsSystemsDesign  |  image flex-1 LEFT  +  content flex-1 RIGHT  |  blueprint.jpg  |  contentBgColor: "bg-white/80"  |  btn: "Get Started" → { name: \'quote\' }',
  '#e9ecef', TXM);
y += 26;

const CSD_H = 300;
imgPlaceholder('csd_img', 0, y, HALF, CSD_H, 'blueprint.jpg');
rect('csd_cnt', HALF, y, HALF, CSD_H, { stroke: STKD, sw: 2 });
txt('csd_ttl', HALF + P * 2, y + 38, HALF - P * 4,
  'Communications Systems Design', { size: 22, color: TX });
txt('csd_body', HALF + P * 2, y + 90, HALF - P * 4,
  wrap('Our crew at Atlas Integrated Systems, Inc. is made up of experts in communication systems design with an average age of 15 years of experience in the IT industry. Their basic training and licensure are a good starting point, but to stay current on new technologies, their functions, and how to properly integrate them into your network infrastructure, our communication system design specialists attend ongoing workshops, webinars, and training sessions. This helps to promote a communication system that is fit for the future.', 88),
  { size: 12, color: TX });
btn('csd_cta', HALF + P * 2, y + 240, 'Get Started', { w: 160, bg: CTA, stroke: CTA, color: TXL });
y += CSD_H;

// ─── COMMUNICATIONS SYSTEMS TROUBLESHOOTING (ContentLeftSection) ──────────────
y += 16;
sectionBar('cst_bar', 0, y, W,
  'CONTENT LEFT SECTION  — #CommunicationsSystemsTroubleshooting  |  content flex-1 LEFT  +  image flex-1 RIGHT  |  fiber-tester.jpg  |  contentBgColor: "bg-white/80"  |  btn: "Get An Estimate" → { name: \'quote\' }',
  '#e9ecef', TXM);
y += 26;

const CST_H = 380;
rect('cst_cnt', 0, y, HALF, CST_H, { stroke: STKD, sw: 2 });
txt('cst_ttl', P * 2, y + 38, HALF - P * 4,
  'Communications Systems Troubleshooting', { size: 20, color: TX });
txt('cst_intro', P * 2, y + 84, HALF - P * 4,
  wrap('Quality control is one of the main goals for many communication design specialists. We strive to minimize potential product mistakes as a result of technological advancements. An estimated 50% of all network failures have been attributed to improper installation procedures. This may be caused by a number of different point-of-failures, including:', 88),
  { size: 12, color: TX });
txt('cst_list', P * 2, y + 178, HALF - P * 4,
  '• Incorrect installation procedures\n• Installed cable is longer than what BICSI advises\n• Overly tense situation in the cables\n• Kinks or twists in the cables\n• Bend radiuses outside of what the manufacturer specifies\n• Failure at terminals',
  { size: 12, color: TX });
txt('cst_close', P * 2, y + 296, HALF - P * 4,
  wrap('Atlas can assess your existing system and make repairs as necessary. We can also pinpoint a weakness at the design point and implement changes to avoid system failures.', 88),
  { size: 12, color: TX });
btn('cst_cta', P * 2, y + 320, 'Get An Estimate', { w: 180, bg: CTA, stroke: CTA, color: TXL });
imgPlaceholder('cst_img', HALF, y, HALF, CST_H, 'fiber-tester.jpg');
y += CST_H;

// ─── BACKBONE INFRASTRUCTURE (ContentRightSection) ────────────────────────────
y += 16;
sectionBar('bi_bar', 0, y, W,
  'CONTENT RIGHT SECTION  — #BackboneInfrastructure  |  image flex-1 LEFT  +  content flex-1 RIGHT  |  backbone-cable.jpg  |  contentBgColor: "bg-white/80"  |  btn: "Get A Quote" → { name: \'quote\' }',
  '#e9ecef', TXM);
y += 26;

const BI_H = 300;
imgPlaceholder('bi_img', 0, y, HALF, BI_H, 'backbone-cable.jpg');
rect('bi_cnt', HALF, y, HALF, BI_H, { stroke: STKD, sw: 2 });
txt('bi_ttl', HALF + P * 2, y + 38, HALF - P * 4,
  'Configuration & Installation of Backbone Infrastructure', { size: 18, color: TX });
txt('bi_body', HALF + P * 2, y + 90, HALF - P * 4,
  wrap('One of the top three most important parts of a communications system design is a well-designed and deployed infrastructure backbone. An optimized and correctly placed communications backbone will give your business the dependable copper/fiber infrastructure it needs to handle the applications of today and tomorrow in the quickly developing field of technology. An organized network architecture that can endure the task is necessary for your daily operations.', 88),
  { size: 12, color: TX });
btn('bi_cta', HALF + P * 2, y + 240, 'Get A Quote', { w: 160, bg: CTA, stroke: CTA, color: TXL });
y += BI_H;

// ─── ENHANCED ACCESS SECURITY (ContentLeftSection) ────────────────────────────
y += 16;
sectionBar('eas_bar', 0, y, W,
  'CONTENT LEFT SECTION  — #EnhancedAccessSecurity  |  content flex-1 LEFT  +  image flex-1 RIGHT  |  sg1.jpg  |  contentBgColor: "bg-white/80"  |  btn: "Get Started" → { name: \'quote\' }',
  '#e9ecef', TXM);
y += 26;

const EAS_H = 460;
rect('eas_cnt', 0, y, HALF, EAS_H, { stroke: STKD, sw: 2 });
txt('eas_ttl', P * 2, y + 38, HALF - P * 4,
  'Enhanced Access Security', { size: 22, color: TX });
txt('eas_intro', P * 2, y + 84, HALF - P * 4,
  wrap('A tailored access control system will block or allow entry to a certain building, space, or location, playing a crucial part in protecting your investment\'s interest. Your implementation of access control will give you:', 88),
  { size: 12, color: TX });
txt('eas_list1', P * 2, y + 152, HALF - P * 4,
  '• Enhanced security\n• Restricted access for approved personnel\n• Improved Image\n• Convenience',
  { size: 12, color: TX });
txt('eas_list2_hdr', P * 2, y + 224, HALF - P * 4,
  '• Enhance user experience with access control solutions, such as:',
  { size: 12, color: TX });
txt('eas_list2', P * 2 + 16, y + 244, HALF - P * 4 - 16,
  '  • With the stroke of a button, access control systems today cost a fraction of what they once did.\n  • Historical activity logs that are exact\n  • Detail-oriented activity logs that will give your security staff the pertinent data required for internal audits or law enforcement agencies',
  { size: 12, color: TX });
txt('eas_close', P * 2, y + 352, HALF - P * 4,
  wrap('Technology is here to stay and is always evolving. Our specialists work with producers and suppliers to develop a "future-proof" design that will offer an access control system for both the present and the future.', 88),
  { size: 12, color: TX });
btn('eas_cta', P * 2, y + 400, 'Get Started', { w: 160, bg: CTA, stroke: CTA, color: TXL });
imgPlaceholder('eas_img', HALF, y, HALF, EAS_H, 'sg1.jpg');
y += EAS_H;

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
output('services.excalidraw');
