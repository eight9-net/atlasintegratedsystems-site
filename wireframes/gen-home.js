// gen-home.js
// Atlas Integrated Systems — Home Page (Home.vue)
// All section text matches actual Vue component content exactly.
// Output: wireframes/home.excalidraw

'use strict';
const wf = require('./excalidraw-wf')();
const { W, P, HALF, THIRD,
        TX, TXL, TXM, STK, STKD,
        BG_W, BG_L, BG_DK, BG_MD, BG_PH, BG_BTN, CTA, FTR,
        rect, txt, sectionBar, imgPlaceholder, btn, field, output } = wf;

// ── Soft-wrap helper ─────────────────────────────────────────────────────────
// Inserts \n at word boundaries so txt() calculates the correct element height.
// n = approximate target chars per line (depends on font-size and element width).
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

// Content-area widths → chars-per-line approximations (Helvetica, proportional)
// HALF - P*4 = 656 px  @ size 12 → ~88 cpl  @ size 13 → ~78 cpl  @ size 14 → ~70 cpl
// HALF_CARD - P*2 = 328 px  @ size 12 → ~44 cpl
// CE_W - P*2 = 628 px  @ size 12 → ~84 cpl  @ size 13 → ~74 cpl
// SLD_W - 160 = 1120 px  @ size 13 → ~130 cpl

let y = 0;

// ─── TITLE ────────────────────────────────────────────────────────────────────
rect('title', 0, y, W, 70, { bg: BG_DK, stroke: STKD, sw: 2 });
txt('title_t', 0, y + 18, W,
  'Atlas Integrated Systems \u2014 Home Page', { size: 26, color: TXL, align: 'center' });
txt('title_sub', 0, y + 50, W,
  'Home.vue  |  HomeHero + ContentFullSection + ContentLeft/RightSection + HomeRecentProjects + HomeFaq + HomeContactSection',
  { size: 11, color: TXM, align: 'center' });
y += 70;

// ─── NAVBAR REFERENCE ─────────────────────────────────────────────────────────
y += 10;
sectionBar('nav_bar', 0, y, W,
  'NAVBAR  (sticky  top-0  z-50  \u2014  see navigation.excalidraw for full detail)', '#e9ecef', TXM);
y += 26;
rect('nav_ref', 0, y, W, 80, { bg: '#9ca3af', stroke: STKD, sw: 2 });
rect('nav_logo', P, y + 20, 230, 40, { bg: BG_W, stroke: STK });
txt('nav_logo_t', P + 10, y + 30, 210,
  "atlas-logo.svg  \u2192  { name: 'home' }", { size: 11, color: TXM });
txt('nav_links', 310, y + 28, 760,
  "Home          Projects \u25BE          Services \u25BE          Request A Quote",
  { size: 15, color: BG_W, align: 'center' });
btn('nav_cta', W - 190, y + 22, 'Contact Us', { w: 160, bg: CTA, stroke: CTA, color: TXL });
y += 80;

// ─── HERO ─────────────────────────────────────────────────────────────────────
y += 16;
sectionBar('hero_bar', 0, y, W,
  'HERO  \u2014  HomeHero.vue  |  min-h-[640px]  |  hero-bg-1.jpg/hero-bg-2.jpg  rotates every 5 s (Transition fade)  +  bg-black opacity-40 overlay  |  <section class="hero">',
  '#e9ecef', TXM);
y += 26;

const HERO_H = 640;
imgPlaceholder('hero_img', 0, y, W, HERO_H, 'hero-bg-1.jpg / hero-bg-2.jpg  (rotates every 5 s)');
const heroW = 820;
const heroX = HALF - heroW / 2;
txt('hero_h1', heroX, y + 216, heroW,
  'Design. Engineering. Installation.', { size: 36, color: TXL, align: 'center' });
txt('hero_sub', heroX, y + 276, heroW,
  'Solutions for Every Communications Systems design', { size: 22, color: TXL, align: 'center' });
btn('hero_cta', HALF - 100, y + 344, 'Contact Us', { w: 200, bg: CTA, stroke: CTA, color: TXL });
txt('hero_cta_cls', HALF - 100, y + 388, 200,
  'btn-soft  btn-primary  btn-lg', { size: 9, color: TXM, align: 'center' });
y += HERO_H;

// ─── HOME CARDS (2 × 2 grid) ──────────────────────────────────────────────────
y += 16;
sectionBar('cards_bar', 0, y, W,
  'HOME CARDS  \u2014  ContentFullSection#HomeCards  |  grid grid-cols-1 md:grid-cols-2  |  4 \u00D7 ContentFullSection  min-h-[400px] max-h-[400px] each',
  '#e9ecef', TXM);
y += 26;

// Layout: full-width bg image + semi-transparent overlay on one half.
// flex justify-end → text box on RIGHT;  flex justify-start → LEFT.
// backdrop-brightness-30 (dark) → BG_DK overlay;  bg-white/40 → BG_W overlay.
const CARD_H  = 400;
const CARD_W  = HALF;          // each card half the canvas width
const HALF_CW = CARD_W / 2;   // overlay width = 360 px
const C_TXT_W = HALF_CW - P * 2;  // text content width ≈ 328 px  → ~44 cpl @ size 12

const cards = [
  // contentClasses="text-black p-5"  sectionClasses="flex justify-end"  backdropClasses="mr-[50%] bg-white/40 backdrop-brightness-80"
  { id: 'c_prof',  img: 'engineer-tower.jpg', title: 'Trained Professionals',
    body: wrap('Our engineers have completed the necessary professional certifications and participate in ongoing training to keep up with communication industry standards.', 44),
    side: 'right', ov: BG_W, tc: TX },
  // contentClasses="text-white p-5"  sectionClasses="flex justify-start"  backdropClasses="backdrop-brightness-30 mr-[50%]"
  { id: 'c_supp',  img: 'monitor.jpg',  title: 'Continuous Support',
    body: wrap('Get peace of mind with technology and 24/7 expert monitoring. Our customers rely on us to safeguard their businesses from outages.', 44),
    side: 'left', ov: BG_DK, tc: TXL },
  // contentClasses="text-black p-5"  sectionClasses="flex justify-end"  backdropClasses="md:ml-[50%] bg-white/50 md:backdrop-brightness-80"
  { id: 'c_cust',  img: 'blueprint.jpg', title: 'Custom Designed Solutions',
    body: wrap('We serve a variety of industries with varied needs. We offer systems and services for commercial, government, and military spaces.', 44),
    side: 'right', ov: BG_W, tc: TX },
  // contentClasses="text-white p-5"  sectionClasses="flex justify-start"  backdropClasses="backdrop-brightness-30 ml-[50%]"
  { id: 'c_brand', img: 'server-gear.jpg', title: 'Trusted Brands',
    body: wrap('Atlas Integrated Systems in Irvine, CA is a direct supplier of quality communication system products from well-known brands from a wide range of suppliers.', 44),
    side: 'left', ov: BG_DK, tc: TXL },
];

cards.forEach((card, i) => {
  const cx  = (i % 2) * CARD_W;
  const cy  = y + Math.floor(i / 2) * CARD_H;
  const ovX = card.side === 'right' ? cx + HALF_CW : cx;
  imgPlaceholder(card.id + '_img', cx, cy, CARD_W, CARD_H, card.img);
  rect(card.id + '_ov', ovX, cy, HALF_CW, CARD_H, { stroke: STKD, sw: 1 });
  txt(card.id + '_ttl', ovX + P, cy + 38, C_TXT_W, card.title, { size: 18, color: card.tc });
  txt(card.id + '_body', ovX + P, cy + 80, C_TXT_W, card.body, { size: 12, color: card.tc });
});
y += Math.ceil(cards.length / 2) * CARD_H;

// ─── METRICS ──────────────────────────────────────────────────────────────────
y += 16;
sectionBar('met_bar', 0, y, W,
  'METRICS  \u2014  ContentFullSection#Metrics  |  fiber-optic-bg.jpg  +  backdrop-brightness-25  |  grid lg:grid-cols-4  headline  |  text-white',
  '#e9ecef', TXM);
y += 26;

const MET_H = 280;
imgPlaceholder('met_bg', 0, y, W, MET_H, 'fiber-optic-bg.jpg  (backdrop-brightness-25)');
txt('met_ttl', 0, y + 18, W, 'Our Metrics', { size: 24, color: TXL, align: 'center' });
const stats = [
  { val: '22+',  lbl: 'Years of\nExperience' },
  { val: '100%', lbl: 'Customer\nSatisfaction' },
  { val: '500+', lbl: 'Completed\nProjects' },
  { val: '25+',  lbl: 'Subcontractor\nRelationships' },
];
const statW = W / 4;
stats.forEach((s, i) => {
  txt('stat_v_' + i, i * statW, y + 88,  statW, s.val, { size: 34, color: TXL, align: 'center' });
  txt('stat_l_' + i, i * statW, y + 140, statW, s.lbl, { size: 14, color: TXL, align: 'center' });
});
btn('met_cta', HALF - 80, y + 218, 'Contact Us', { w: 160, bg: CTA, stroke: CTA, color: TXL });
y += MET_H;

// ─── REQUEST CONSULTATION (ContentRightSection) ───────────────────────────────
y += 16;
sectionBar('consult_bar', 0, y, W,
  'CONTENT RIGHT SECTION  \u2014  #RequestConsultation  |  image flex-1 LEFT  +  content flex-1 RIGHT  |  solar-turbine-blueprint.jpg',
  '#e9ecef', TXM);
y += 26;

const CR_H = 300;
imgPlaceholder('consult_img', 0, y, HALF, CR_H, 'solar-turbine-blueprint.jpg');
rect('consult_cnt', HALF, y, HALF, CR_H, { stroke: STKD, sw: 2 });
txt('consult_ttl', HALF + P * 2, y + 38, HALF - P * 4,
  'Request a Consultation', { size: 22, color: TX });
txt('consult_body', HALF + P * 2, y + 90, HALF - P * 4,
  'Our team will be happy to assist you with your upcoming communication system design.',
  { size: 14, color: TX });
btn('consult_cta', HALF + P * 2, y + 190, 'Contact Us', { w: 160, bg: CTA, stroke: CTA, color: TXL });
y += CR_H;

// ─── WHO WE ARE (ContentLeftSection) ─────────────────────────────────────────
y += 16;
sectionBar('wwa_bar', 0, y, W,
  'CONTENT LEFT SECTION  \u2014  #WhoWeAre  |  content flex-1 LEFT  +  image flex-1 RIGHT  |  engineers-solar.jpg  |  preTitle: "Who We Are"',
  '#e9ecef', TXM);
y += 26;

// body: 503 chars  @size 12, width 656 px  → wrap(88) → ~6 lines → h ≈ 107 px
const wwaBody = wrap(
  'Our company is a leader in providing design, production and maintenance support of communications systems for industrial and municipal customers in Southern California. While our products and systems are primarily focused on the physical layer of networked applications, our Municipal Systems business also offers services and systems for Homeland Security, Government and commercial applications. We also provide a wide range of services and support to our customers through our network of subcontractors.',
  88);

const WWA_H = 420;
rect('wwa_cnt', 0, y, HALF, WWA_H, { stroke: STKD, sw: 2 });
txt('wwa_pre',  P * 2, y + 26, HALF - P * 4, 'Who We Are', { size: 13, color: TXM });
txt('wwa_ttl',  P * 2, y + 50, HALF - P * 4,
  'Building Integrity in Communications', { size: 22, color: TX });
txt('wwa_body', P * 2, y + 104, HALF - P * 4, wwaBody, { size: 12, color: TX });
btn('wwa_cta',  P * 2, y + 336, 'Tell Us More', { w: 160, bg: CTA, stroke: CTA, color: TXL });
imgPlaceholder('wwa_img', HALF, y, HALF, WWA_H, 'engineers-solar.jpg');
y += WWA_H;

// ─── RECENT PROJECTS ─────────────────────────────────────────────────────────
y += 16;
sectionBar('rp_bar', 0, y, W,
  'RECENT PROJECTS  \u2014  HomeRecentProjects.vue  |  ContentFullSection  |  lawai/lawai-solar.jpg  +  bg-primary  backdrop-brightness-25  |  Carousel  :autoplay="true"  :interval="20000"  height="h-[700px] md:h-[650px] lg:h-[500px]"',
  '#e9ecef', TXM);
y += 26;

const RP_H = 644;
imgPlaceholder('rp_bg', 0, y, W, RP_H, 'lawai/lawai-solar.jpg  (bg-primary  backdrop-brightness-25)');
txt('rp_ttl', 0, y + 22, W, 'Recent Projects', { size: 24, color: TXL, align: 'center' });

const SLD_X = 80;
const SLD_W = W - 160;
const SLD_H = 508;
rect('rp_slide', SLD_X, y + 62, SLD_W, SLD_H, { stroke: STKD, sw: 2 });
txt('rp_prev', SLD_X - 32, y + 62 + SLD_H / 2 - 14, 28, '\u2039', { size: 30, color: TXL });
txt('rp_next', SLD_X + SLD_W + 6, y + 62 + SLD_H / 2 - 14, 28, '\u203A', { size: 30, color: TXL });

// Slide 1 of 5 — full text
// body @size 13, width SLD_W-160=1120 px → wrap(130)
txt('rp_sld_tag', SLD_X + P, y + 82, SLD_W - P * 2,
  'slide 1 of 5  \u2014  San Diego Pure Water Project', { size: 11, color: TXM, align: 'center' });
txt('rp_sld_ttl', SLD_X + P, y + 110, SLD_W - P * 2,
  'City of San Diego Pure Water Project', { size: 20, color: TXL, align: 'center' });
txt('rp_sld_body', SLD_X + 80, y + 158, SLD_W - 160,
  wrap('Atlas Integrated Systems, Inc. is actively involved in the City-wide Pure Water Project in San Diego, handling the installation of extensive Fiber Optic Communication Systems for public utilities and security networks. Their comprehensive services include design engineering, documentation, and providing detailed budgetary estimates for each phase, while ensuring compliance with safety and wage regulations. Atlas operates both as a direct contractor and subcontractor, coordinating closely with various companies to update infrastructure and support system redundancy.',
       130),
  { size: 13, color: TXL });
btn('rp_sld_cta', SLD_X + SLD_W / 2 - 90, y + 62 + SLD_H - 56,
  'View Project', { w: 180, bg: CTA, stroke: CTA, color: TXL });

// Dot indicators
const DOT_Y  = y + 62 + SLD_H + 12;
const DOT_X0 = HALF - (5 * 22) / 2;
[0, 1, 2, 3, 4].forEach(di => {
  rect('rp_dot_' + di, DOT_X0 + di * 22, DOT_Y, 10, 10,
    { bg: di === 0 ? TXL : TXM, stroke: 'transparent', round: true });
});
txt('rp_ann', 0, DOT_Y + 16, W,
  "autoplay  interval: 20 000 ms  |  route: { name: 'projects', hash }",
  { size: 9, color: TXM, align: 'center' });
y += RP_H;

// ── CAROUSEL CONTENT REFERENCE — all 5 slide texts ───────────────────────────
// (In live UI only one slide is visible at a time; all content listed here for reference)
y += 8;
const slides = [
  {
    n: 1, label: 'San Diego Pure Water Project',
    title: 'City of San Diego Pure Water Project',
    body: wrap('Atlas Integrated Systems, Inc. is actively involved in the City-wide Pure Water Project in San Diego, handling the installation of extensive Fiber Optic Communication Systems for public utilities and security networks. Their comprehensive services include design engineering, documentation, and providing detailed budgetary estimates for each phase, while ensuring compliance with safety and wage regulations. Atlas operates both as a direct contractor and subcontractor, coordinating closely with various companies to update infrastructure and support system redundancy.', 160),
    route: "{ name: 'projects', hash: '#SanDiegoPureWaterProject' }",
  },
  {
    n: 2, label: "L\u0101wa\u02BBi Solar",
    title: "AES-KIUC L\u0101wa\u02BBi Solar Project",
    body: wrap("Atlas Integrated Systems, Inc. played a crucial role in the L\u0101wa\u02BBi Solar Project, known as the world's largest solar storage peaker at the time, by installing cutting-edge SCADA communications and energy control networks beginning in 2018. They expertly handled the complex task of integrating new fiber optic and copper communications into the active plant, contributing to the project's success through 2019, with ongoing enhancements for new and reconfigured systems. Post-completion, AES recognized Atlas's expertise by entrusting them with the design of future PoE panels and setting standards for Operations and Maintenance buildings.", 160),
    route: "{ name: 'projects', hash: '#LawaiSolarProject' }",
  },
  {
    n: 3, label: 'PMRF Power Grid',
    title: 'FY16 MCON Project P-416 Energy PMRF Power Grid Consolidation',
    body: wrap("For the Pacific Missile Range Facility, Atlas Integrated Systems, Inc. was instrumental in integrating power from the AES-KIUC Solar site to support the Navy base's operations. They managed the installation of approximately 29,000 feet of new cabling infrastructure, meeting strict military specifications, and provided certification testing for the base's communication systems to ensure reliability and security.", 160),
    route: "{ name: 'projects', hash: '#FY16MCONProjectP416EnergyPMRFPowerGridConsolidation' }",
  },
  {
    n: 4, label: 'Rialto Bio Energy',
    title: 'Rialto Bio Energy Facility',
    body: wrap("Atlas Integrated Systems, Inc. successfully installed roughly 4,800 feet of new 12-fiber OM3 multimode cable for a SCADA network, terminating and testing connections across 12 locations with new patch panels and cabinets. The project also involved the installation of innerducts and the certification of the entire administration building's communication systems to ensure optimal performance and system integrity.", 160),
    route: "{ name: 'projects', hash: '#RialtoBioEnergyFacility' }",
  },
  {
    n: 5, label: 'Camp Pendleton Data Center',
    title: 'Camp Pendleton Data Center',
    body: wrap("Atlas Integrated Systems, Inc. was tasked with the crucial job of certifying the fiber optic communications systems for the processing functions at the new Data Center on Camp Pendleton Marine Base. They conducted comprehensive OTDR Testing on over 5,000 fiber connectors within 300 enclosed racks, ensuring that both SIPRNet and NIPRNet connections met rigorous standards. Their work included meticulous documentation and the repair of any components that did not meet the required specifications.", 160),
    route: "{ name: 'projects', hash: '#CampPendletonDataCenter' }",
  },
];

// Row height = title(25) + body(3–4 lines @size 11 ≈ 56px) + padding = 100 px
const RPR_ROW_H = 112;
const RPR_H = 36 + slides.length * RPR_ROW_H + 12;
rect('rpr_box', 40, y, W - 80, RPR_H, { stroke: STKD, sw: 2 });
sectionBar('rpr_hdr', 40, y, W - 80,
  'CAROUSEL CONTENT REFERENCE  \u2014  All 5 slide texts  (live UI shows one at a time)',
  '#374151', TXL);
slides.forEach((sl, i) => {
  const ry = y + 36 + i * RPR_ROW_H;
  rect('rpr_row_' + i, 40, ry, W - 80, RPR_ROW_H, { stroke: STK });
  rect('rpr_num_' + i, 56, ry + 10, 28, 28, { bg: CTA, stroke: CTA, round: true });
  txt('rpr_n_' + i, 56, ry + 14, 28, String(sl.n), { size: 13, color: TXL, align: 'center' });
  txt('rpr_ttl_' + i, 96, ry + 10, W - 300, sl.title, { size: 13, color: TX });
  txt('rpr_rt_' + i,  96, ry + 30, W - 300, sl.route,  { size: 9,  color: TXM });
  txt('rpr_body_' + i, 96, ry + 50, W - 200, sl.body,  { size: 11, color: TXM });
});
y += RPR_H + 16;

// ─── DESIGN PROCESS (ContentLeftSection) ─────────────────────────────────────
y += 16;
sectionBar('dp_bar', 0, y, W,
  'CONTENT LEFT SECTION  \u2014  #DesignProcess  |  content flex-1 LEFT  +  image flex-1 RIGHT  |  field-engineer2.jpg',
  '#e9ecef', TXM);
y += 26;

// body: 430 chars  @size 12, width 656 px  → wrap(88) → ~5 lines → h ≈ 90 px
const dpBody = wrap(
  'Using the most relevant technologies allows Atlas the flexibility to retrofit as well as build out an entire new infrastructure. This provides the best ROI for our clients. Our technical expertise is unmatched in our ability to provide as-built drawings and matrices for sites that have little or no information on existing infrastructure. This is crucial for finding what may be utilized, saving thousands of dollars and downtime.',
  88);

const DP_H = 360;
rect('dp_cnt', 0, y, HALF, DP_H, { stroke: STKD, sw: 2 });
txt('dp_ttl',  P * 2, y + 38, HALF - P * 4, 'Our Design Process', { size: 22, color: TX });
txt('dp_body', P * 2, y + 90, HALF - P * 4, dpBody, { size: 12, color: TX });
btn('dp_cta',  P * 2, y + 280, 'Submit Project Outline', { w: 220, bg: CTA, stroke: CTA, color: TXL });
imgPlaceholder('dp_img', HALF, y, HALF, DP_H, 'field-engineer2.jpg');
y += DP_H;

// ─── SERVICES GALLERY ─────────────────────────────────────────────────────────
y += 16;
sectionBar('sg_bar', 0, y, W,
  "SERVICES GALLERY  \u2014  ContentFullSection#ServicesGallery  |  fiberoptic-bg.jpg  (no dark overlay)  |  Gallery  cols=4  :labels=true  labelClasses='block text-white text-center p-2 bg-gray-400/80'",
  '#e9ecef', TXM);
y += 26;

const SG_H = 396;
imgPlaceholder('sg_bg', 0, y, W, SG_H, 'fiberoptic-bg.jpg  (no dark overlay)');
txt('sg_ttl', 0, y + 16, W,
  'All the services you need, in one place', { size: 22, color: TX, align: 'center' });

const gImgW = W / 4;
const gImgH = 240;
const gImgY = y + 58;
const galItems = [
  { img: 'blueprint2.jpg',     alt: 'Communications Systems Design',
    hash: '#CommunicationsSystemsDesign' },
  { img: 'field-engineer.jpg', alt: 'Communications Systems Troubleshooting',
    hash: '#CommunicationsSystemsTroubleshooting' },
  { img: 'fiber-switch.jpg',   alt: 'Configuration & Installation of Backbone Infrastructure',
    hash: '#BackboneInfrastructure' },
  { img: 'id-badges.jpg',      alt: 'Enhanced Access Security',
    hash: '#EnhancedAccessSecurity' },
];
galItems.forEach((g, i) => {
  imgPlaceholder('sg_img_' + i, i * gImgW, gImgY, gImgW, gImgH, g.img);
  rect('sg_lbl_' + i, i * gImgW, gImgY + gImgH, gImgW, 44, { bg: '#9ca3af', stroke: STK });
  txt('sg_alt_' + i,  i * gImgW + 4, gImgY + gImgH + 4,  gImgW - 8,
    g.alt,  { size: 10, color: TXL, align: 'center' });
  txt('sg_hash_' + i, i * gImgW + 4, gImgY + gImgH + 24, gImgW - 8,
    g.hash, { size: 9,  color: TXL, align: 'center' });
});
btn('sg_cta', HALF - 100, y + SG_H - 46,
  'View Service Details', { w: 200, bg: CTA, stroke: CTA, color: TXL });
txt('sg_cta_rt', HALF - 100, y + SG_H - 46 + 40, 200,
  "\u2192 { name: 'services' }", { size: 9, color: TXM, align: 'center' });
y += SG_H;

// ─── FOCUS COMMUNICATION SOLUTIONS ───────────────────────────────────────────
y += 16;
sectionBar('fcs_bar', 0, y, W,
  'CONTENT FULL SECTION  \u2014  #FocusCommunicationSolutions  |  datacenter.jpg  |  contentClasses: "bg-white/80 text-black p-10"  |  preTitle: "Our Focus"',
  '#e9ecef', TXM);
y += 26;

// quote: 233 chars  @size 13, width 668 px → wrap(82) → ~3 lines → h ≈ 61 px
const fcsQuote = wrap(
  '\u201cWe can find a solution for any communication system\u201d. That\u2019s a bold statement\u2026 but we are confident that we can implement a system that encompasses multiple disciplines to achieve our clients\u2019 needs and in some cases exceeds expectations.',
  82);

const FCS_H = 320;
imgPlaceholder('fcs_bg', 0, y, W, FCS_H, 'datacenter.jpg');
const FCS_W = 700;
const FCS_X = HALF - FCS_W / 2;
rect('fcs_box', FCS_X, y + 28, FCS_W, 264, { stroke: STKD, sw: 2 });
txt('fcs_pre',   FCS_X + P, y + 48,  FCS_W - P * 2, 'Our Focus', { size: 12, color: TXM });
txt('fcs_ttl',   FCS_X + P, y + 72,  FCS_W - P * 2,
  'Delivering Sound Solutions for Communications Infrastructure', { size: 18, color: TX });
txt('fcs_quote', FCS_X + P, y + 118, FCS_W - P * 2, fcsQuote, { size: 13, color: TX });
btn('fcs_cta',   FCS_X + P, y + 240, 'Get In Touch', { w: 160, bg: CTA, stroke: CTA, color: TXL });
y += FCS_H;

// ─── TROUBLESHOOTING SIGNAL LOSS (ContentRightSection) ───────────────────────
y += 16;
sectionBar('ts_bar', 0, y, W,
  'CONTENT RIGHT SECTION  \u2014  #TroubleShootingSignalLoss  |  image flex-1 LEFT  +  content flex-1 RIGHT  |  construction-site.jpg',
  '#e9ecef', TXM);
y += 26;

// Content width = HALF - P*4 = 656 px
// ts_sub  @size 13, wrap(78) → 2 lines → h ≈ 43 px
// ts_p1   @size 12, wrap(88) → 4 lines → h ≈ 74 px
// ts_p2   @size 12, wrap(88) → 3 lines → h ≈ 57 px
const tsSubHead = wrap(
  'Project Description: Troubleshoot South Bay Water Treatment Facility to Metropolitan Bio-Solids Complex Communication Infrastructure',
  78);
const tsP1 = wrap(
  "The City of San Diego's pipeline and communications network infrastructure was finally linked together. However, the signal loss was too great from its South Bay facilities to its Operations Center over 22 miles away. Segments had been patched together and installed over a period of more than 10 years in some areas.",
  88);
const tsP2 = wrap(
  'Atlas was able to isolate the problem areas, and fix all the problems without disturbing the citywide plant, lowering the signal loss substantially and establishing the communications link the City required.',
  88);

const TS_H = 430;
imgPlaceholder('ts_img', 0, y, HALF, TS_H, 'construction-site.jpg');
rect('ts_cnt',  HALF, y, HALF, TS_H, { stroke: STKD, sw: 2 });
txt('ts_pre',   HALF + P * 2, y + 26,  HALF - P * 4, 'Troubleshooting', { size: 13, color: TXM });
txt('ts_ttl',   HALF + P * 2, y + 50,  HALF - P * 4, 'Signal Loss', { size: 22, color: TX });
txt('ts_sub',   HALF + P * 2, y + 100, HALF - P * 4, tsSubHead, { size: 13, color: TX });
txt('ts_p1',    HALF + P * 2, y + 160, HALF - P * 4, tsP1, { size: 12, color: TX });
txt('ts_p2',    HALF + P * 2, y + 256, HALF - P * 4, tsP2, { size: 12, color: TX });
btn('ts_cta',   HALF + P * 2, y + 344, 'Learn More', { w: 160, bg: CTA, stroke: CTA, color: TXL });
y += TS_H;

// ─── COST EFFICIENT NETWORK UPGRADES (ContentFullSection) ────────────────────
y += 16;
sectionBar('ce_bar', 0, y, W,
  'CONTENT FULL SECTION  \u2014  #CostEfficientNetworkUpgrades  |  solar-plant.jpg  |  contentBgColor: "bg-primary text-white"  (\u2192 CTA box kept in print)',
  '#e9ecef', TXM);
y += 26;

// CE box content width = CE_W - P*2 = 628 px
// ce_sub  @size 13, wrap(74) → 1 line  → h ≈ 25 px
// ce_body @size 12, wrap(84) → 5 lines → h ≈ 90 px
const ceSub = wrap(
  "Project Description: New fiber optic network for FPL\u2019s Kramer Junction Solar Site",
  74);
const ceBody = wrap(
  "Our client, Florida Power & Light, needed to upgrade its fiber optic network and give it room to grow. They required underground and aerial cost estimates to evaluate which would be the most viable solution. We designed the most cost-effective system and installed over 2 miles of network infrastructure both incorporating both aerial and underground designs while not disturbing plant operations at the peak of their season.",
  84);

const CE_H = 380;
imgPlaceholder('ce_bg', 0, y, W, CE_H, 'solar-plant.jpg');
const CE_W = 660;
const CE_X = HALF - CE_W / 2;
rect('ce_box', CE_X, y + 20, CE_W, CE_H - 40, { stroke: STKD, sw: 2 });
txt('ce_ttl',  CE_X + P, y + 40,  CE_W - P * 2, 'Cost Efficient Network Upgrades', { size: 20, color: TXL });
txt('ce_sub',  CE_X + P, y + 78,  CE_W - P * 2, ceSub,   { size: 13, color: TXL });
txt('ce_body', CE_X + P, y + 112, CE_W - P * 2, ceBody,  { size: 12, color: TXL });
btn('ce_cta',  CE_X + P, y + 272, 'Get Started', { w: 160, bg: CTA, stroke: CTA, color: TXL });
y += CE_H;

// ─── INNOVATIVE SOLUTIONS (ContentLeftSection) ───────────────────────────────
y += 16;
sectionBar('inn_bar', 0, y, W,
  'CONTENT LEFT SECTION  \u2014  #InnovativeSolutions  |  content flex-1 LEFT  +  image flex-1 RIGHT  |  turbines-clouds.webp  |  contentBgColor: "bg-primary text-white"',
  '#e9ecef', TXM);
y += 26;

// Content width = HALF - P*4 = 656 px
// inn_sub @size 13, wrap(78) → 1 line  → h ≈ 25 px
// inn_p2  @size 12, wrap(78) → 3 lines → h ≈ 57 px
// inn_p3  @size 12, wrap(78) → 4 lines → h ≈ 74 px
const innSub = wrap(
  "Project Description: Hybrid Communications For FPL\u2019s Cabazon Wind Energy Site",
  78);
const innP2 = wrap(
  "Once again our client Florida Power & Light needed a solution that was both cost-effective and functional. The SCADA system at their Cabazon Wind location needed updates.",
  78);
const innP3 = wrap(
  'After assessing the plant\'s needs, and its number of turbines, we incorporated a Hybrid communication system. We used \u201cmesh radio\u201d RF technologies and a backbone fiber optic trunk that would increase reporting speeds without the expense of trenching new fiber optic cable to every wind turbine location.',
  78);

const INN_H = 440;
rect('inn_cnt', 0, y, HALF, INN_H, { stroke: STKD, sw: 2 });
txt('inn_ttl', P * 2, y + 36,  HALF - P * 4,
  'Innovative Solutions, High-Tech Methods', { size: 20, color: TXL });
txt('inn_sub', P * 2, y + 82,  HALF - P * 4, innSub, { size: 13, color: TXL });
txt('inn_p2',  P * 2, y + 118, HALF - P * 4, innP2,  { size: 12, color: TXL });
txt('inn_p3',  P * 2, y + 196, HALF - P * 4, innP3,  { size: 12, color: TXL });
btn('inn_cta', P * 2, y + 360, 'Contact Us', { w: 160, bg: CTA, stroke: CTA, color: TXL });
imgPlaceholder('inn_img', HALF, y, HALF, INN_H, 'turbines-clouds.webp');
y += INN_H;

// ─── FAQ ─────────────────────────────────────────────────────────────────────
y += 16;
sectionBar('faq_bar', 0, y, W,
  'FAQ  \u2014  HomeFaq.vue  |  ContentFullSection#FAQs  |  fiberoptic-bg.jpg  |  Accordion.vue  5 items  (siteProperties injected at onMounted)',
  '#e9ecef', TXM);
y += 26;

// FAQ titles use siteProperties.companyName = "Atlas Integrated Systems, Inc."
const faqs = [
  'Why hire Atlas Integrated Systems, Inc.?',
  'Does Atlas Integrated Systems, Inc. carry a valid contracting license?',
  'Can you troubleshoot an existing communication system?',
  'Where is your main office?',
  'How do I contact you?',
];
const FAQ_ITEM_H = 58;
const FAQ_H = 78 + faqs.length * FAQ_ITEM_H + 24;
imgPlaceholder('faq_bg', 0, y, W, FAQ_H, 'fiberoptic-bg.jpg');
txt('faq_ttl', 0, y + 16, W,
  'Frequently Asked Questions', { size: 24, color: TX, align: 'center' });

const FAQ_W = 980;
const FAQ_X = HALF - FAQ_W / 2;
rect('faq_box', FAQ_X, y + 66, FAQ_W, faqs.length * FAQ_ITEM_H + 16, { stroke: STKD, sw: 2 });
faqs.forEach((q, i) => {
  const fy = y + 66 + 8 + i * FAQ_ITEM_H;
  rect('faq_row_' + i, FAQ_X + 8, fy, FAQ_W - 16, FAQ_ITEM_H - 4, { stroke: STK });
  txt('faq_q_' + i,  FAQ_X + 24, fy + 18, FAQ_W - 80, q, { size: 14, color: TX });
  txt('faq_ch_' + i, FAQ_X + FAQ_W - 48, fy + 18, 30, '\u25B8', { size: 14, color: TXM });
});
y += FAQ_H;

// ─── CONTACT US ───────────────────────────────────────────────────────────────
y += 16;
sectionBar('ctct_bar', 0, y, W,
  'CONTACT US  \u2014  HomeContactSection.vue  |  amirun-ai-generated-8894644_1280.jpg  +  backdrop-brightness-40  |  HomeContactForm.vue  |  POST \u2192 sendContactForm() \u2192 https.js \u2192 AWS API Gateway Lambda  |  Pinia contact store',
  '#e9ecef', TXM);
y += 26;

const CT_H = 720;
imgPlaceholder('ct_bg', 0, y, W, CT_H,
  'amirun-ai-generated-8894644_1280.jpg  (backdrop-brightness-40)');
txt('ct_ttl', 0, y + 20, W, 'Contact Us', { size: 28, color: TXL, align: 'center' });

txt('ct_call',      0, y + 70,  W, 'Call Us', { size: 13, color: TXL, align: 'center' });
txt('ct_phone',     0, y + 92,  W, '\u260E  1 (949)-509-9605', { size: 15, color: TXL, align: 'center' });
txt('ct_email_lbl', 0, y + 126, W, 'Email Us', { size: 13, color: TXL, align: 'center' });
txt('ct_email_val', 0, y + 148, W, '\u2709  info@atlasintegratedsystems.com', { size: 15, color: TXL, align: 'center' });
txt('ct_intro', 100, y + 180, W - 200,
  wrap('Enter your information below along with a brief message and your contact details. A member of our team will be in touch with you as soon as possible to schedule a consultation.', 110),
  { size: 13, color: TXL, align: 'center' });

// Form rows: (Contact Name + Title) | (Phone + Email) | (Subject) | (Property Type + Company) | (Message) | Submit
const FM_W = 720;
const FM_X = HALF - FM_W / 2;
const FM_Y = y + 238;
const FH_W = FM_W / 2 - 12;

field('fm_name',    FM_X,              FM_Y,       FH_W, 'Contact Name *');
field('fm_title',   FM_X + FH_W + 16, FM_Y,       FH_W, 'Title');
field('fm_phone',   FM_X,              FM_Y + 58,  FH_W, 'Phone *');
field('fm_email',   FM_X + FH_W + 16, FM_Y + 58,  FH_W, 'Email *');
field('fm_subj',    FM_X,              FM_Y + 116, FM_W, 'Subject *');
field('fm_ptype',   FM_X,              FM_Y + 174, FH_W, 'Property Type *');
field('fm_company', FM_X + FH_W + 16, FM_Y + 174, FH_W, 'Company Name');

rect('fm_msg', FM_X, FM_Y + 232, FM_W, 120, { stroke: STKD, round: true });
txt('fm_msg_t', FM_X + 14, FM_Y + 250, FM_W - 28, 'Message \u2026', { size: 13, color: STK });

btn('fm_submit', FM_X + FM_W - 200, FM_Y + 368, 'Send Message',
  { w: 200, bg: CTA, stroke: CTA, color: TXL });
txt('fm_ann', FM_X, FM_Y + 416, FM_W,
  'isDisabledRef: prevents double-submit  |  messageSentRef: green success banner  |  messageErrorRef: red error banner  |  honeypot: hidden text field',
  { size: 9, color: TXM });
y += CT_H;

// ─── FOOTER ───────────────────────────────────────────────────────────────────
rect('ftr', 0, y, W, 220, { stroke: STKD, sw: 2 });
rect('ftr_bar', 0, y, W, 46, { bg: FTR, stroke: FTR });
txt('ftr_tag', 0, y + 12, W,
  'Communications Systems Design', { size: 15, color: TXL, align: 'center' });

rect('ftr_c1', 0,         y + 46, THIRD, 174, { stroke: STK });
txt('ftr_phone', P, y + 66, THIRD - P * 2,
  '\u260E  1 (949)-509-9605', { size: 13, color: TX });

rect('ftr_c2', THIRD,    y + 46, THIRD, 174, { stroke: STK });
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
output('home.excalidraw');
