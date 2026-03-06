// gen-navigation.js
// Atlas Integrated Systems — Navigation Structure
// Header.vue + NavigationMenu.vue + DropdownMenu.vue
// Output: wireframes/navigation.excalidraw

'use strict';
const wf = require('./excalidraw-wf')();
const { W, P, HALF, THIRD,
        TX, TXL, TXM, STK, STKD,
        BG_W, BG_L, BG_DK, BG_PH, BG_BTN, CTA, FTR,
        rect, txt, sectionBar, btn, output } = wf;

let y = 0;

// ─── TITLE ────────────────────────────────────────────────────────────────────
rect('title', 0, y, W, 70, { bg: BG_DK, stroke: STKD, sw: 2 });
txt('title_t', 0, y + 18, W,
  'Atlas Integrated Systems — Navigation Structure', { size: 26, color: TXL, align: 'center' });
txt('title_sub', 0, y + 50, W,
  'Header.vue  +  NavigationMenu.vue  +  DropdownMenu.vue', { size: 12, color: TXM, align: 'center' });
y += 70;

// ─── DESKTOP HEADER MOCKUP ────────────────────────────────────────────────────
y += 16;
sectionBar('hdr_bar', 0, y, W,
  'DESKTOP HEADER  (lg+ breakpoint)  —  sticky top-0 z-50  |  navbar bg-gray-400', '#e9ecef', TXM);
y += 26;

rect('hdr', 0, y, W, 80, { bg: '#9ca3af', stroke: STKD, sw: 2 });
// Logo — navbar-start flex-2
rect('hdr_logo_box', P, y + 20, 230, 40, { bg: BG_W, stroke: STK });
txt('hdr_logo_t', P + 10, y + 30, 210, 'atlas-logo.svg  \u2192  { name: \'home\' }', { size: 11, color: TXM });
// Nav items — navbar-center, hidden on mobile (lg:flex)
txt('hdr_nav', 310, y + 28, 760,
  'Home          Projects \u25BE          Services \u25BE          Request A Quote',
  { size: 15, color: BG_W, align: 'center' });
// Contact Us — navbar-end
btn('hdr_cta', W - 190, y + 22, 'Contact Us', { w: 160, bg: CTA, stroke: CTA, color: TXL });
y += 80;

// ─── DESKTOP DROPDOWN PANELS ──────────────────────────────────────────────────
y += 16;
sectionBar('dd_bar', 0, y, W,
  'DESKTOP DROPDOWNS  —  DropdownMenu.vue  |  <details> v-element-hover delayEnter: 300ms  |  w-85  bg-base-100  border-gray-300',
  '#e9ecef', TXM);
y += 26;

const DD_PAD   = 40;
const DD_GAP   = 40;
const ddPanelW = Math.floor((W - DD_PAD * 2 - DD_GAP) / 2);
const DD_HDR_H = 38;
const DD_ITEM_H = 48;
const DD_LONG_H = 64;

// Projects dropdown
const projItems = [
  { label: 'City of San Diego Pure Water Project',                          hash: '#SanDiegoPureWaterProject' },
  { label: 'AES-KIUC L\u0101wa\u02BBi Solar Project',                       hash: '#LawaiSolarProject' },
  { label: 'FY16 MCON Project P-416 Energy PMRF\nPower Grid Consolidation', hash: '#PMRFPowerGridProject' },
  { label: 'Rialto Bio Energy Facility',                                    hash: '#RialtoBioEnergyProject' },
  { label: 'Camp Pendleton Data Center',                                    hash: '#CampPendletonDataCenterProject' },
];
let projDdH = DD_HDR_H + 8;
projItems.forEach(item => { projDdH += item.label.includes('\n') ? DD_LONG_H : DD_ITEM_H; });
projDdH += 8;

// Services dropdown
const svcItems = [
  { label: 'Communications Systems Design',                          hash: '#CommunicationsSystemsDesign' },
  { label: 'Communications Systems Troubleshooting',                 hash: '#CommunicationsSystemsTroubleshooting' },
  { label: 'Configuration & Installation of\nBackbone Infrastructure', hash: '#BackboneInfrastructure' },
  { label: 'Enhanced Access Security',                               hash: '#EnhancedAccessSecurity' },
];
let svcDdH = DD_HDR_H + 8;
svcItems.forEach(item => { svcDdH += item.label.includes('\n') ? DD_LONG_H : DD_ITEM_H; });
svcDdH += 8;

// Annotations above each panel
const projDdX = DD_PAD;
const svcDdX  = DD_PAD + ddPanelW + DD_GAP;
txt('proj_ann', projDdX, y + 2, ddPanelW,
  'Projects dropdown  —  appears below "Projects \u25BE" nav item', { size: 11, color: TXM });
txt('svc_ann', svcDdX, y + 2, ddPanelW,
  'Services dropdown  —  appears below "Services \u25BE" nav item', { size: 11, color: TXM });
const ddPanelY = y + 20;

// Draw Projects panel
rect('proj_dd', projDdX, ddPanelY, ddPanelW, projDdH, { bg: BG_W, stroke: STKD, sw: 2 });
txt('proj_dd_hdr', projDdX + P, ddPanelY + 10, ddPanelW - P * 2,
  'Projects  \u2192  { name: \'projects\' }', { size: 13, color: TX });
rect('proj_dd_div', projDdX, ddPanelY + DD_HDR_H, ddPanelW, 1, { stroke: '#e5e7eb' });

let ddy = ddPanelY + DD_HDR_H + 8;
projItems.forEach((item, i) => {
  const ih = item.label.includes('\n') ? DD_LONG_H : DD_ITEM_H;
  const lines = item.label.split('\n');
  txt('proj_item_' + i, projDdX + P * 2, ddy + 6, ddPanelW - P * 2 - 200, lines[0], { size: 13, color: TX });
  if (lines[1]) {
    txt('proj_item_' + i + '_2', projDdX + P * 2, ddy + 24, ddPanelW - P * 2 - 200, lines[1], { size: 13, color: TX });
  }
  txt('proj_hash_' + i, projDdX + ddPanelW - 210, ddy + Math.floor((ih - 20) / 2), 200,
    item.hash, { size: 10, color: TXM });
  if (i < projItems.length - 1) {
    rect('proj_div_' + i, projDdX + P, ddy + ih - 1, ddPanelW - P * 2, 1, { stroke: '#e5e7eb' });
  }
  ddy += ih;
});

// Draw Services panel
rect('svc_dd', svcDdX, ddPanelY, ddPanelW, svcDdH, { bg: BG_W, stroke: STKD, sw: 2 });
txt('svc_dd_hdr', svcDdX + P, ddPanelY + 10, ddPanelW - P * 2,
  'Services  \u2192  { name: \'services\' }', { size: 13, color: TX });
rect('svc_dd_div', svcDdX, ddPanelY + DD_HDR_H, ddPanelW, 1, { stroke: '#e5e7eb' });

ddy = ddPanelY + DD_HDR_H + 8;
svcItems.forEach((item, i) => {
  const ih = item.label.includes('\n') ? DD_LONG_H : DD_ITEM_H;
  const lines = item.label.split('\n');
  txt('svc_item_' + i, svcDdX + P * 2, ddy + 6, ddPanelW - P * 2 - 200, lines[0], { size: 13, color: TX });
  if (lines[1]) {
    txt('svc_item_' + i + '_2', svcDdX + P * 2, ddy + 24, ddPanelW - P * 2 - 200, lines[1], { size: 13, color: TX });
  }
  txt('svc_hash_' + i, svcDdX + ddPanelW - 210, ddy + Math.floor((ih - 20) / 2), 200,
    item.hash, { size: 10, color: TXM });
  if (i < svcItems.length - 1) {
    rect('svc_div_' + i, svcDdX + P, ddy + ih - 1, ddPanelW - P * 2, 1, { stroke: '#e5e7eb' });
  }
  ddy += ih;
});

y = ddPanelY + Math.max(projDdH, svcDdH) + 20;

// ─── MOBILE NAVIGATION ────────────────────────────────────────────────────────
y += 16;
sectionBar('mob_bar', 0, y, W,
  'MOBILE NAVIGATION  (< lg breakpoint)  —  hamburger <summary> toggles <details>  |  icon \u2630 \u2194 \u2715 via isOpen ref',
  '#e9ecef', TXM);
y += 26;

// Mobile header
rect('mob_hdr', 0, y, W, 80, { bg: '#9ca3af', stroke: STKD, sw: 2 });
rect('mob_ham', P, y + 20, 52, 40, { bg: BG_W, stroke: STK, round: true });
txt('mob_ham_t', P + 10, y + 29, 34, '\u2630 / \u2715', { size: 14, color: TX });
txt('mob_ham_ann', P + 58, y + 32, 180, '\u2190 toggles isOpen ref', { size: 9, color: TXM });
rect('mob_logo', HALF - 115, y + 20, 230, 40, { bg: BG_W, stroke: STK });
txt('mob_logo_t', HALF - 104, y + 30, 208, 'atlas-logo.svg', { size: 11, color: TXM });
btn('mob_cta', W - 190, y + 22, 'Contact Us', { w: 160, bg: CTA, stroke: CTA, color: TXL });
y += 80;

// Mobile dropdown panel
const MOB_W = 580;
const MOB_P_H = 44;   // parent row height
const MOB_C_H = 34;   // child row height

const mobItems = [
  { label: 'Home',            route: "{ name: 'home' }",     children: [] },
  {
    label: 'Projects',        route: "{ name: 'projects' }",
    children: [
      "City of San Diego Pure Water Project  \u2192  #SanDiegoPureWaterProject",
      "AES-KIUC L\u0101wa\u02BBi Solar Project  \u2192  #LawaiSolarProject",
      "FY16 MCON P-416 PMRF Power Grid  \u2192  #PMRFPowerGridProject",
      "Rialto Bio Energy Facility  \u2192  #RialtoBioEnergyProject",
      "Camp Pendleton Data Center  \u2192  #CampPendletonDataCenterProject",
    ],
  },
  {
    label: 'Services',        route: "{ name: 'services' }",
    children: [
      "Communications Systems Design  \u2192  #CommunicationsSystemsDesign",
      "Communications Systems Troubleshooting  \u2192  #CommunicationsSystemsTroubleshooting",
      "Config. & Install. Backbone Infrastructure  \u2192  #BackboneInfrastructure",
      "Enhanced Access Security  \u2192  #EnhancedAccessSecurity",
    ],
  },
  { label: 'Request A Quote', route: "{ name: 'quote' }",    children: [] },
];

let mobMenuH = 12;
mobItems.forEach(item => {
  mobMenuH += MOB_P_H;
  mobMenuH += item.children.length * MOB_C_H;
});
mobMenuH += 8;

rect('mob_menu', P, y, MOB_W, mobMenuH, { bg: BG_W, stroke: STKD, sw: 2 });
txt('mob_menu_ann', P + 8, y + 2, MOB_W - 16,
  'dropdown-content  menu-compact  shadow  bg-base-100  rounded-box  w-100  text-black  font-medium',
  { size: 9, color: TXM });

let my = y + 14;
mobItems.forEach((item, i) => {
  const hasKids = item.children.length > 0;
  txt('mob_mi_' + i, P + 16, my + 12, 300,
    hasKids ? item.label + ' \u25BE' : item.label, { size: 14, color: TX });
  txt('mob_mi_rt_' + i, P + MOB_W - 220, my + 14, 200, item.route, { size: 9, color: TXM });
  rect('mob_div_' + i, P + 8, my + MOB_P_H - 1, MOB_W - 16, 1, { stroke: '#e5e7eb' });
  my += MOB_P_H;
  item.children.forEach((child, ci) => {
    txt('mob_ci_' + i + '_' + ci, P + 44, my + 8, MOB_W - 60, child, { size: 11, color: TXM });
    my += MOB_C_H;
  });
});

// Notes beside mobile menu
const noteX = MOB_W + P + 50;
const noteW  = W - noteX - 40;
txt('mob_note_hdr', noteX, y + 16, noteW, 'Mobile dropdown behavior:', { size: 13, color: TX });
txt('mob_note_1', noteX, y + 40, noteW,
  '\u2022  <details> in .navbar-start, toggled by <summary> click', { size: 12, color: TXM });
txt('mob_note_2', noteX, y + 62, noteW,
  '\u2022  handleCloseMenu() sets isOpen = false and removes\n   the open attribute via mobileMenuElement ref', { size: 12, color: TXM });
txt('mob_note_3', noteX, y + 102, noteW,
  '\u2022  NavigationMenu rendered with :hover="false"\n   :border="false"  textSize="text-lg"', { size: 12, color: TXM });
txt('mob_note_4', noteX, y + 142, noteW,
  '\u2022  emitCloseMenu event bubbles up from DropdownMenu\n   \u2192 NavigationMenu \u2192 Header to close panel after nav', { size: 12, color: TXM });

y += mobMenuH + 20;

// ─── NAVIGATION TREE DIAGRAM ──────────────────────────────────────────────────
y += 16;
sectionBar('tree_bar', 0, y, W,
  'NAVIGATION TREE  —  4 top-level items  |  2 with dropdown sub-links  |  2 direct-navigate',
  '#e9ecef', TXM);
y += 26 + 16;

const navCols = [
  {
    title: 'Home',           route: "{ name: 'home' }",
    hBg: '#1d4ed8', dBg: '#dbeafe', items: [],
  },
  {
    title: 'Projects \u25BE', route: "{ name: 'projects' }",
    hBg: '#15803d', dBg: '#dcfce7',
    items: [
      { label: 'City of San Diego\nPure Water Project',  route: '#SanDiegoPureWaterProject' },
      { label: "AES-KIUC L\u0101wa\u02BBi Solar Project", route: '#LawaiSolarProject' },
      { label: 'FY16 MCON P-416\nPMRF Power Grid',      route: '#PMRFPowerGridProject' },
      { label: 'Rialto Bio Energy\nFacility',            route: '#RialtoBioEnergyProject' },
      { label: 'Camp Pendleton\nData Center',            route: '#CampPendletonDataCenterProject' },
    ],
  },
  {
    title: 'Services \u25BE',  route: "{ name: 'services' }",
    hBg: '#6d28d9', dBg: '#ede9fe',
    items: [
      { label: 'Comm. Systems\nDesign',             route: '#CommunicationsSystemsDesign' },
      { label: 'Comm. Systems\nTroubleshooting',    route: '#CommunicationsSystemsTroubleshooting' },
      { label: 'Config. & Install.\nBackbone Infra.', route: '#BackboneInfrastructure' },
      { label: 'Enhanced Access\nSecurity',          route: '#EnhancedAccessSecurity' },
    ],
  },
  {
    title: 'Request A Quote', route: "{ name: 'quote' }",
    hBg: '#b45309', dBg: '#fef3c7', items: [],
  },
];

const N_COLS    = navCols.length;
const colW      = Math.floor((W - 80) / N_COLS);
const colStartX = 40;
const COL_HDR_H = 56;
const COL_ITM_H = 58;   // height for 2-line item
const diagStartY = y;

navCols.forEach((nav, ci) => {
  const cx = colStartX + ci * colW;
  const cw = colW - 16;

  // Column header
  rect('col_hdr_' + ci, cx, diagStartY, cw, COL_HDR_H,
    { bg: nav.hBg, stroke: STKD, round: true });
  txt('col_hdr_lbl_' + ci, cx, diagStartY + 12, cw,
    nav.title, { size: 16, color: TXL, align: 'center' });
  txt('col_hdr_rt_' + ci, cx, diagStartY + 34, cw,
    nav.route, { size: 10, color: '#a5b4fc', align: 'center' });

  if (nav.items.length > 0) {
    const dropH = nav.items.length * COL_ITM_H + 28;
    rect('col_drop_' + ci, cx, diagStartY + COL_HDR_H + 4, cw, dropH,
      { bg: nav.dBg, stroke: STK, round: true });
    txt('col_drop_ann_' + ci, cx + 8, diagStartY + COL_HDR_H + 8, cw - 16,
      'v-element-hover  delayEnter: 300ms', { size: 9, color: TXM });

    nav.items.forEach((item, ii) => {
      const iy = diagStartY + COL_HDR_H + 4 + 24 + ii * COL_ITM_H;
      rect('col_itm_' + ci + '_' + ii, cx + 8, iy, cw - 16, COL_ITM_H - 8,
        { bg: BG_W, stroke: STK, round: true });
      const lines = item.label.split('\n');
      txt('col_itm_l1_' + ci + '_' + ii, cx + 14, iy + 5, cw - 28,
        lines[0], { size: 12, color: TX });
      if (lines[1]) {
        txt('col_itm_l2_' + ci + '_' + ii, cx + 14, iy + 21, cw - 28,
          lines[1], { size: 12, color: TX });
      }
      txt('col_itm_rt_' + ci + '_' + ii, cx + 14, iy + 36, cw - 28,
        item.route, { size: 9, color: TXM });
    });
  } else {
    rect('col_empty_' + ci, cx, diagStartY + COL_HDR_H + 4, cw, 64,
      { bg: nav.dBg, stroke: STK, round: true });
    txt('col_empty_l1_' + ci, cx, diagStartY + COL_HDR_H + 18, cw,
      '(no dropdown)', { size: 13, color: TXM, align: 'center' });
    txt('col_empty_l2_' + ci, cx, diagStartY + COL_HDR_H + 38, cw,
      'navigates directly on click', { size: 10, color: TXM, align: 'center' });
  }
});

const maxItems = Math.max(...navCols.map(n => n.items.length));
const treeH = COL_HDR_H + 4 + Math.max(maxItems * COL_ITM_H + 28, 72);
y += treeH + 30;

// ─── BEHAVIOR NOTES ───────────────────────────────────────────────────────────
y += 10;
const legendH = 112;
rect('legend', 40, y, W - 80, legendH, { bg: BG_L, stroke: STKD, sw: 2 });
sectionBar('legend', 40, y, W - 80, 'BEHAVIOR NOTES', '#e9ecef', TXM);
txt('leg1', 60, y + 38, W - 120,
  '\u2022  Desktop (lg+): NavigationMenu in .navbar-center  |  menu-horizontal text-2xl font-medium  |  <details> v-element-hover 300ms enter delay  |  click title \u2192 parent route',
  { size: 12, color: TX });
txt('leg2', 60, y + 62, W - 120,
  '\u2022  Mobile (<lg): <details> in .navbar-start toggled by hamburger  |  NavigationMenu with hover=false border=false  |  w-100 menu-compact text-lg shadow rounded-box',
  { size: 12, color: TX });
txt('leg3', 60, y + 86, W - 120,
  '\u2022  Click item: goto({ name, hash }) via router.push()  |  emitCloseMenu closes mobile dropdown  |  handleCloseMenu() sets isOpen=false + removes open attr',
  { size: 12, color: TX });
y += legendH + 20;

// ─── SITE ROUTE MAP ───────────────────────────────────────────────────────────
y += 10;
rect('map_hdr', 40, y, W - 80, 46, { bg: BG_DK, stroke: STKD, sw: 2 });
txt('map_hdr_t', 60, y + 12, W - 120,
  'SITE ROUTE MAP  —  Vue Router 5  |  createWebHashHistory (GitHub Pages)', { size: 16, color: TXL });
y += 46;

const routes = [
  {
    path:   '/#/  (home)',
    detail: 'Eager-loaded (Home.vue)  |  Components: HomeHero, HomeRecentProjects, HomeFaq, HomeContactSection',
  },
  {
    path:   '/#/projects',
    detail: 'Lazy-loaded  |  Sections: #SanDiegoPureWaterProject  #LawaiSolarProject  #PMRFPowerGridProject  #RialtoBioEnergyProject  #CampPendletonDataCenterProject',
  },
  {
    path:   '/#/services',
    detail: 'Lazy-loaded  |  Sections: #CommunicationsSystemsDesign  #CommunicationsSystemsTroubleshooting  #BackboneInfrastructure  #EnhancedAccessSecurity',
  },
  {
    path:   '/#/request-a-quote',
    detail: 'Lazy-loaded  |  RequestAQuoteForm.vue  |  POSTs via https.js \u2192 AWS API Gateway Lambda  |  Pinia contact store manages loading/form state',
  },
];

const ROW_H = 52;
rect('map_body', 40, y, W - 80, routes.length * ROW_H + 16, { bg: BG_L, stroke: STKD, sw: 2 });
routes.forEach((r, i) => {
  const ry = y + 12 + i * ROW_H;
  if (i % 2 === 0) rect('map_row_' + i, 40, ry, W - 80, ROW_H - 4, { bg: BG_W, stroke: STK });
  txt('map_path_' + i, 56, ry + 8, 310, r.path, { size: 13, color: TX });
  txt('map_det_'  + i, 374, ry + 8, W - 430, r.detail, { size: 12, color: TXM });
});
y += routes.length * ROW_H + 16 + 30;

// ─── FOOTER ───────────────────────────────────────────────────────────────────
rect('footer', 0, y, W, 220, { bg: BG_W, stroke: STKD, sw: 2 });
rect('ftr_bar', 0, y, W, 46, { bg: FTR, stroke: FTR });
txt('ftr_tag', 0, y + 12, W,
  'Communications Systems Design', { size: 15, color: TXL, align: 'center' });

rect('ftr_c1', 0, y + 46, THIRD, 174, { bg: BG_W, stroke: STK });
txt('ftr_phone', P, y + 66, THIRD - P * 2,
  '\u260E  1 (949)-509-9605', { size: 13, color: TX });

rect('ftr_c2', THIRD, y + 46, THIRD, 174, { bg: BG_W, stroke: STK });
txt('ftr_addr', THIRD + P, y + 58, THIRD - P * 2,
  '\u2302  6789 Quail Hill Pkwy #405\n     Irvine, CA 92603',
  { size: 13, color: TX, align: 'center' });

rect('ftr_c3', THIRD * 2, y + 46, THIRD, 174, { bg: BG_W, stroke: STK });
txt('ftr_email', THIRD * 2 + P, y + 66, THIRD - P * 2,
  '\u2709  info@atlasintegratedsystems.com', { size: 13, color: TX, align: 'right' });

rect('ftr_logo', HALF - 80, y + 104, 160, 56, { bg: BG_L, stroke: STK });
txt('ftr_logo_t', HALF - 68, y + 124, 136,
  'ATLAS LOGO', { size: 11, color: TXM, align: 'center' });

txt('ftr_lic', 0, y + 178, W,
  'CA Lic. #777306  |  ACO 6678  |  \u00A9 2026 All Rights Reserved  \u2014  Atlas Integrated Systems, Inc.',
  { size: 11, color: TXM, align: 'center' });
y += 220;

// ─── OUTPUT ───────────────────────────────────────────────────────────────────
output('navigation.excalidraw');
