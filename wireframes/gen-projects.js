// gen-projects.js
// Atlas Integrated Systems — Projects Page (Projects.vue)
// All section text matches actual Vue component content exactly.
// Projects.vue renders 5 project components in sequence, each with its own
// PageHero + ContentLeft/Right/FullSection stack.
// Output: wireframes/projects.excalidraw

'use strict';
const wf = require('./excalidraw-wf')();
const { W, P, HALF, THIRD,
        TX, TXL, TXM, STK, STKD,
        BG_W, BG_L, BG_DK, BG_MD, BG_PH, CTA, FTR,
        rect, txt, sectionBar, imgPlaceholder, btn, output } = wf;

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

// Shared content-left section: image LEFT, content RIGHT
// Returns height used
function contentLeft(pfx, imgFile, title, bodyText, btnLabel, btnRoute, y) {
  const H = 300;
  imgPlaceholder(pfx + '_img', 0, y, HALF, H, imgFile);
  rect(pfx + '_cnt', HALF, y, HALF, H, { stroke: STKD, sw: 2 });
  txt(pfx + '_ttl', HALF + P * 2, y + 38, HALF - P * 4, title, { size: 20, color: TX });
  if (bodyText) {
    txt(pfx + '_body', HALF + P * 2, y + 86, HALF - P * 4, bodyText, { size: 12, color: TX });
  }
  if (btnLabel) {
    btn(pfx + '_cta', HALF + P * 2, y + 240, btnLabel, { w: 180, bg: CTA, stroke: CTA, color: TXL });
  }
  return H;
}

// Shared content-right section: image RIGHT, content LEFT
function contentRight(pfx, imgFile, title, bodyText, btnLabel, btnRoute, y) {
  const H = 300;
  rect(pfx + '_cnt', 0, y, HALF, H, { stroke: STKD, sw: 2 });
  txt(pfx + '_ttl', P * 2, y + 38, HALF - P * 4, title, { size: 20, color: TX });
  if (bodyText) {
    txt(pfx + '_body', P * 2, y + 86, HALF - P * 4, bodyText, { size: 12, color: TX });
  }
  if (btnLabel) {
    btn(pfx + '_cta', P * 2, y + 240, btnLabel, { w: 180, bg: CTA, stroke: CTA, color: TXL });
  }
  imgPlaceholder(pfx + '_img', HALF, y, HALF, H, imgFile);
  return H;
}

// Full-width section (image bg, content centred)
function contentFull(pfx, imgFile, title, bodyText, y) {
  const lines = bodyText ? bodyText.split('\n').length : 0;
  const H = lines > 0 ? Math.max(240, 80 + lines * 18 + 40) : 180;
  imgPlaceholder(pfx + '_bg', 0, y, W, H, imgFile + '  (fixed-bg  backdrop-brightness-60)');
  if (title) {
    txt(pfx + '_ttl', HALF - 500, y + 28, 1000, title, { size: 22, color: TXL, align: 'center' });
  }
  if (bodyText) {
    txt(pfx + '_body', HALF - 500, y + 72, 1000, bodyText, { size: 12, color: TXL, align: 'center' });
  }
  return H;
}

let y = 0;

// ─── TITLE ────────────────────────────────────────────────────────────────────
rect('title', 0, y, W, 70, { bg: BG_DK, stroke: STKD, sw: 2 });
txt('title_t', 0, y + 18, W,
  'Atlas Integrated Systems — Projects Page', { size: 26, color: TXL, align: 'center' });
txt('title_sub', 0, y + 50, W,
  'Projects.vue  |  5 project components: SanDiegoPureWater · LawaiSolar · PMRFPowerGrid · RialtoBioEnergy · CampPendletonDataCenter',
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

// ══════════════════════════════════════════════════════════════════════════════
// PROJECT 1 — City of San Diego Pure Water Project
// ══════════════════════════════════════════════════════════════════════════════
y += 16;
rect('p1_divider', 0, y, W, 32, { bg: BG_DK, stroke: STKD, sw: 2 });
txt('p1_divider_t', 0, y + 8, W,
  'PROJECT 1 OF 5  —  SanDiegoPureWaterProject.vue', { size: 13, color: TXL, align: 'center' });
y += 32;

// PageHero
sectionBar('p1_hero_bar', 0, y, W,
  'PAGE HERO  — #SanDiegoPureWaterProject  |  sd_water/splash.jpg  |  :button="false"',
  '#e9ecef', TXM);
y += 26;
const P1_HERO_H = 360;
imgPlaceholder('p1_hero_img', 0, y, W, P1_HERO_H, 'sd_water/splash.jpg  (bg-fixed bg-center bg-cover  +  bg-black opacity-40)');
txt('p1_hero_h1', HALF - 500, y + 140, 1000,
  'City of San Diego Pure Water Project', { size: 36, color: TXL, align: 'center' });
y += P1_HERO_H;

// ContentFullSection — Milestones
y += 16;
sectionBar('p1_ms_bar', 0, y, W,
  'CONTENT FULL SECTION  — #SanDiegoPureWaterProjectMilestones  |  title: "Project Milestones"  |  bgClasses: "bg-primary"  |  :button="false"',
  '#e9ecef', TXM);
y += 26;
const p1MsBody = wrap('Atlas is currently engaged in multiple projects and under contracts; both contracted Directly and Subcontracting contracts through the Pure Water Program by prequalified General Contractors. This work encompasses the entire City-wide Pure Water Project for all the Processing Facilities and pipelines and DCS processes SCADA Support. The work involves installing miles of new Fiber Optic Communication Systems for City Of San Diego, PUD and various interdepartmental and security Network(s). Scheduling work with various Contracting Companies producing updated fiber optic matrix\'s of as-built conditions in the field and related locations, including all design engineering, documentation, cable(s), patch panels and component issues to assist in system redundancy in conjunction with other projects. We also provide budgetary estimates for all necessary phases of work for approval and RFQ processes. Atlas provides all labor and safety equipment for proposed work where required, while maintaining Prevailing DIR wages and reporting guidelines.', 160);
const P1_MS_H = Math.max(200, 80 + p1MsBody.split('\n').length * 18 + 40);
imgPlaceholder('p1_ms_bg', 0, y, W, P1_MS_H, '(bg-primary backdrop-brightness-60)');
txt('p1_ms_ttl', HALF - 500, y + 24, 1000, 'Project Milestones', { size: 24, color: TXL, align: 'center' });
txt('p1_ms_body', HALF - 500, y + 68, 1000, p1MsBody, { size: 12, color: TXL, align: 'center' });
y += P1_MS_H;

// ContentRightSection — Innovative Water Purification Technology
y += 16;
sectionBar('p1_iw_bar', 0, y, W,
  'CONTENT RIGHT SECTION  — #SanDiegoPureWaterProjectInnovativeTechnology  |  sd_water/glass-bottle.jpg  |  bgClasses: "bg-cover bg-center"  |  :button="false"',
  '#e9ecef', TXM);
y += 26;
const p1IwBody = wrap('Atlas Integrated Systems, Inc. leverages cutting-edge water purification technology in the City of San Diego\'s Pure Water Project, setting a new standard in sustainable water management. This advanced system employs a multi-barrier approach, incorporating processes such as microfiltration, reverse osmosis, and advanced ultraviolet light with hydrogen peroxide, to ensure the produced water is of the highest quality and meets all state and federal drinking water standards.', 88);
y += contentRight('p1_iw', 'sd_water/glass-bottle.jpg', 'Innovative Water Purification Technology', p1IwBody, null, null, y);

// ContentFullSection — Additional Project Sites
y += 16;
sectionBar('p1_ps_bar', 0, y, W,
  'CONTENT FULL SECTION  — #SanDiegoPureWaterProjectProjectSites  |  sd_water/water-bg.jpg  |  bgClasses: "bg-primary"  |  :button="false"',
  '#e9ecef', TXM);
y += 26;
const P1_PS_H = 220;
imgPlaceholder('p1_ps_bg', 0, y, W, P1_PS_H, 'sd_water/water-bg.jpg  (bg-primary backdrop-brightness-60)');
txt('p1_ps_ttl', HALF - 500, y + 24, 1000, 'Additional Project Sites', { size: 24, color: TXL, align: 'center' });
txt('p1_ps_list', HALF - 500, y + 70, 1000,
  'North City Pure Water Facility  \u203A  Current Contract\nMorena Conveyance South & Middle  \u203A  Current Contract\nMorena Conveyance North  \u203A  Current Contract\nNorth City Pure Water Pipeline  \u203A  Current Contract',
  { size: 14, color: TXL, align: 'center' });
y += P1_PS_H;

// ContentLeftSection — Environmental and Economic Benefits
y += 16;
sectionBar('p1_eb_bar', 0, y, W,
  'CONTENT LEFT SECTION  — #SanDiegoPureWaterProjectBenefits  |  sd_water/water-pitcher.jpg  |  bgClasses: "bg-cover bg-center"  |  :button="false"',
  '#e9ecef', TXM);
y += 26;
const p1EbBody = wrap('The City of San Diego\'s Pure Water Project, driven by Atlas Integrated Systems, Inc., delivers significant environmental and economic advantages. By reducing the city\'s reliance on imported water, the project minimizes the environmental impact associated with long-distance water transportation and contributes to the region\'s resilience against drought. Economically, this initiative is a game-changer, offering a cost-effective solution for water supply that promises long-term savings for both the city and its residents.', 88);
y += contentLeft('p1_eb', 'sd_water/water-pitcher.jpg', 'Environmental and Economic Benefits', p1EbBody, null, null, y);

// ContentRightSection — Community Engagement
y += 16;
sectionBar('p1_ce_bar', 0, y, W,
  'CONTENT RIGHT SECTION  — #SanDiegoPureWaterProjectCommunityImpact  |  sd_water/water-hands.jpg  |  bgClasses: "bg-cover bg-center"  |  :button="false"',
  '#e9ecef', TXM);
y += 26;
const p1CeBody = wrap('Atlas Integrated Systems, Inc. is at the forefront of community engagement and education through its involvement in the City of San Diego\'s Pure Water Project. The company actively collaborates with local stakeholders, educational institutions, and community groups to raise awareness about water sustainability and the importance of the Pure Water Project.', 88);
y += contentRight('p1_ce', 'sd_water/water-hands.jpg', 'Community Engagement and Education', p1CeBody, null, null, y);

// ══════════════════════════════════════════════════════════════════════════════
// PROJECT 2 — AES-KIUC Lāwaʻi Solar Project
// ══════════════════════════════════════════════════════════════════════════════
y += 16;
rect('p2_divider', 0, y, W, 32, { bg: BG_DK, stroke: STKD, sw: 2 });
txt('p2_divider_t', 0, y + 8, W,
  'PROJECT 2 OF 5  —  LawaiSolarProject.vue', { size: 13, color: TXL, align: 'center' });
y += 32;

sectionBar('p2_hero_bar', 0, y, W,
  "PAGE HERO  — #LawaiSolarProject  |  lawai/lawai-solar.jpg  |  :button=\"false\"  |  title: \"AES-KIUC L\u0101wa\u02BBi Solar Project\"",
  '#e9ecef', TXM);
y += 26;
const P2_HERO_H = 360;
imgPlaceholder('p2_hero_img', 0, y, W, P2_HERO_H, 'lawai/lawai-solar.jpg  (bg-fixed bg-center bg-cover  +  bg-black opacity-40)');
txt('p2_hero_h1', HALF - 500, y + 140, 1000,
  "AES-KIUC L\u0101wa\u02BBi Solar Project", { size: 36, color: TXL, align: 'center' });
y += P2_HERO_H;

// ContentLeftSection — Project Activities & Solutions
y += 16;
sectionBar('p2_ms_bar', 0, y, W,
  'CONTENT LEFT SECTION  — #LawaiSolarProjectMilestones  |  lawai/lawai-solar.jpg  |  :button="false"',
  '#e9ecef', TXM);
y += 26;
const p2MsBody = wrap("The L\u0101wa'i Solar Project was World's Largest Solar Storage Peaker project at the time. Atlas began installing the multimode SCADA communications systems, Energy Control Network and Single mode Telco system in 2018. We furnished and installed all new fiber optic cable terminations and copper communications, certifying and installing new panels switches and PoE media converters throughout the existing site, to over 30 locations, all while the plant operations were running. The majority of the work was completed in 2019 however, we were mobilized as new locations were added and reconfigurations of the PoE Panels and SCADA systems were required to complete a design and installation for the Operations and Maintenance building. After the project, AES asked Atlas to design the PoE panels for the next projects and to develop a standard for the O&M building as well.", 88);
y += contentLeft('p2_ms', 'lawai/lawai-solar.jpg', 'Project Activities & Solutions', p2MsBody, null, null, y);

// ContentRightSection — Innovative Solar Energy Technology
y += 16;
sectionBar('p2_is_bar', 0, y, W,
  'CONTENT RIGHT SECTION  — #LawaiSolarProjectInnovations  |  lawai/lawai-storage.webp  |  :button="false"',
  '#e9ecef', TXM);
y += 26;
const p2IsBody = wrap("The AES-KIUC L\u0101wa'i Solar Project stands as a testament to Atlas Integrated Systems, Inc.'s commitment to renewable energy innovation. This project harnesses cutting-edge solar technology to generate clean, sustainable energy, reducing reliance on fossil fuels and lowering carbon emissions. By incorporating advanced solar panels and energy storage systems, the project ensures a consistent power supply, even during non-daylight hours.", 88);
y += contentRight('p2_is', 'lawai/lawai-storage.webp', 'Innovative Solar Energy Technology', p2IsBody, null, null, y);

// ContentFullSection — Previous Work
y += 16;
sectionBar('p2_pw_bar', 0, y, W,
  'CONTENT FULL SECTION  — #LawaiSolarProjectPrevious  |  lawai/solar-sunset.jpg  |  :button="false"',
  '#e9ecef', TXM);
y += 26;
const P2_PW_H = 240;
imgPlaceholder('p2_pw_bg', 0, y, W, P2_PW_H, 'lawai/solar-sunset.jpg  (fixed-bg backdrop-brightness-60)');
txt('p2_pw_ttl', HALF - 500, y + 24, 1000,
  'Other Significant Past work for this Owner and similar projects', { size: 20, color: TXL, align: 'center' });
txt('p2_pw_list', HALF - 500, y + 68, 1000,
  'AES Distributed Energy/KIUC Kekaha Solar Project, Kauai\nAES Distributed Energy/MOSS West Oahu Solar Project, Kapolei, Oahu\nAES Na Pua Makani Wind Farm, Oahu\nLalamilo DWS Wind Farm, Hawaii County, Hawaii\nInnergex Hale Kuawehi Solar Project, Hawaii County, Hawaii',
  { size: 13, color: TXL, align: 'center' });
y += P2_PW_H;

// ContentLeftSection — Environmental and Economic Benefits
y += 16;
sectionBar('p2_eb_bar', 0, y, W,
  'CONTENT LEFT SECTION  — #LawaiSolarProjectBenefits  |  lawai/solar-aerial.jpg  |  bgClasses: "bg-cover bg-bottom"  |  :button="false"',
  '#e9ecef', TXM);
y += 26;
const p2EbBody = wrap("The AES-KIUC L\u0101wa'i Solar Project embodies a significant stride toward environmental and economic sustainability. By tapping into solar energy, the project substantially cuts greenhouse gas emissions, contributing to the fight against climate change. Economically, it provides the local community with a reliable source of clean energy, potentially stabilizing energy prices and fostering economic growth.", 88);
y += contentLeft('p2_eb', 'lawai/solar-aerial.jpg', 'Environmental and Economic Benefits', p2EbBody, null, null, y);

// ContentRightSection — Community Engagement
y += 16;
sectionBar('p2_ce_bar', 0, y, W,
  'CONTENT RIGHT SECTION  — #LawaiSolarProjectCommunity  |  lawai/solar-photographer.jpg  |  bgClasses: "bg-cover bg-top"  |  :button="false"',
  '#e9ecef', TXM);
y += 26;
const p2CeBody = wrap("Through the AES-KIUC L\u0101wa'i Solar Project, Atlas Integrated Systems, Inc. champions community engagement and educational outreach. The company works closely with local communities, schools, and organizations to spread awareness about the benefits of solar energy and the importance of transitioning to renewable resources.", 88);
y += contentRight('p2_ce', 'lawai/solar-photographer.jpg', 'Community Engagement and Education', p2CeBody, null, null, y);

// ══════════════════════════════════════════════════════════════════════════════
// PROJECT 3 — PMRF Power Grid Consolidation
// ══════════════════════════════════════════════════════════════════════════════
y += 16;
rect('p3_divider', 0, y, W, 32, { bg: BG_DK, stroke: STKD, sw: 2 });
txt('p3_divider_t', 0, y + 8, W,
  'PROJECT 3 OF 5  —  PMRFPowerGridProject.vue', { size: 13, color: TXL, align: 'center' });
y += 32;

sectionBar('p3_hero_bar', 0, y, W,
  'PAGE HERO  — #PMRFPowerGridProject  |  pmrf_grid/power-grid-diagram.png  |  imageBgClasses: "bg-center bg-cover"  |  :button="false"',
  '#e9ecef', TXM);
y += 26;
const P3_HERO_H = 360;
imgPlaceholder('p3_hero_img', 0, y, W, P3_HERO_H, 'pmrf_grid/power-grid-diagram.png  (bg-center bg-cover  +  bg-black opacity-40)');
txt('p3_hero_h1', HALF - 500, y + 120, 1000,
  'FY16 MCON Project P-416 Energy\nPMRF Power Grid Consolidation', { size: 30, color: TXL, align: 'center' });
y += P3_HERO_H;

// ContentLeftSection — Project Activities
y += 16;
sectionBar('p3_ms_bar', 0, y, W,
  'CONTENT LEFT SECTION  — #PMRFPowerGridProjectMilestones  |  pmrf_grid/power-pylons.jpg  |  :button="false"',
  '#e9ecef', TXM);
y += 26;
const p3MsBody = wrap("This project for the Navy's Pacific Missile Range Facility integrated the power generated from the AES-KIUC Solar site we had installed under an earlier contract. It allowed the transfer of power to the entire Navy Base. Atlas produced pull plans and as built patching matrix's, furnished and installed apx. 29,000' of new innerduct and 48 fiber single mode cable in new and existing ducts and hand holes for various SCADA, Power and security networks per Drawings and Rigid Military Specifications. Additionally, Atlas was brought in to certify entire administration building communications systems Providing Certification Testing for both new and existing cabling systems.", 88);
y += contentLeft('p3_ms', 'pmrf_grid/power-pylons.jpg', 'Project Activities & Solutions', p3MsBody, null, null, y);

// ContentRightSection — Innovative Power Grid Technology
y += 16;
sectionBar('p3_ig_bar', 0, y, W,
  'CONTENT RIGHT SECTION  — #PMRFPowerGridProjectInnovations  |  pmrf_grid/power-substation.jpg  |  imageBgClasses: "bg-center bg-cover"  |  :button="false"',
  '#e9ecef', TXM);
y += 26;
const p3IgBody = wrap("The FY16 MCON Project P-416 at the Pacific Missile Range Facility (PMRF) showcases Atlas Integrated Systems, Inc.'s expertise in advanced energy solutions through the consolidation of the power grid. This project employs state-of-the-art technology to enhance the efficiency and reliability of the power distribution system, significantly improving energy management and resilience at PMRF.", 88);
y += contentRight('p3_ig', 'pmrf_grid/power-substation.jpg', 'Innovative Power Grid Consolidation Technology', p3IgBody, null, null, y);

// ContentFullSection — Solutions & Goals (2-col grid)
y += 16;
sectionBar('p3_sg_bar', 0, y, W,
  'CONTENT FULL SECTION  — #PMRFPowerGridProjectSolutionsGoals  |  pmrf_grid/power-pylon-clouds.jpg  |  :button="false"  |  grid grid-cols-2',
  '#e9ecef', TXM);
y += 26;
const P3_SG_H = 280;
imgPlaceholder('p3_sg_bg', 0, y, W, P3_SG_H, 'pmrf_grid/power-pylon-clouds.jpg  (fixed-bg backdrop-brightness-60)');
// Left column — Project Solutions
txt('p3_sol_hdr', P * 4, y + 24, HALF - P * 6, 'Project Solutions', { size: 18, color: TXL });
txt('p3_sol_list', P * 4, y + 56, HALF - P * 6,
  '• Connected the Admin/Range Ops Area, Support Facilities/Housing Area,\n  and Kokole Point Area grids\n• Utility interconnections allow load sharing and power distribution\n  between the separate incoming feeders\n• Power transfers of excess renewable energy increase system efficiency,\n  reduce costs and improve energy security',
  { size: 12, color: TXL });
// Right column — Project Goals
txt('p3_goal_hdr', HALF + P * 4, y + 24, HALF - P * 6, 'Project Goals', { size: 18, color: TXL });
txt('p3_goal_list', HALF + P * 4, y + 56, HALF - P * 6,
  '• Consolidate the power grid into one continuous system\n• Facilitate power transfer between feeders\n• Maximize energy efficiency at the lowest lifecycle cost',
  { size: 12, color: TXL });
y += P3_SG_H;

// ContentLeftSection — Environmental and Economic Benefits
y += 16;
sectionBar('p3_eb_bar', 0, y, W,
  'CONTENT LEFT SECTION  — #PMRFPowerGridProjectImpact  |  pmrf_grid/power-pylon-upshot.jpg  |  imageBgClasses: "bg-center bg-cover"  |  :button="false"',
  '#e9ecef', TXM);
y += 26;
const p3EbBody = wrap("The consolidation of the PMRF power grid under Project P-416 represents a significant leap forward in environmental and economic efficiency. This initiative reduces the carbon footprint by optimizing energy distribution and usage, contributing to the Department of Defense's sustainability goals. Economically, the project promises enhanced energy efficiency, leading to considerable cost savings and improved operational reliability.", 88);
y += contentLeft('p3_eb', 'pmrf_grid/power-pylon-upshot.jpg', 'Environmental and Economic Benefits', p3EbBody, null, null, y);

// ContentRightSection — Community Engagement
y += 16;
sectionBar('p3_ce_bar', 0, y, W,
  'CONTENT RIGHT SECTION  — #PMRFPowerGridProjectCommunity  |  pmrf_grid/power-pylon-sunset.jpg  |  bgClasses: "bg-cover bg-center"  |  :button="false"',
  '#e9ecef', TXM);
y += 26;
const p3CeBody = wrap("While the FY16 MCON Project P-416 primarily focuses on military infrastructure, Atlas Integrated Systems, Inc. understands the importance of community engagement and education within the broader context of energy and environmental stewardship. Through informational sessions, workshops, and collaboration with local and military stakeholders, Atlas Integrated Systems, Inc. promotes awareness and fosters a culture of sustainability and resilience.", 88);
y += contentRight('p3_ce', 'pmrf_grid/power-pylon-sunset.jpg', 'Community Engagement and Education', p3CeBody, null, null, y);

// ══════════════════════════════════════════════════════════════════════════════
// PROJECT 4 — Rialto Bio Energy Facility
// ══════════════════════════════════════════════════════════════════════════════
y += 16;
rect('p4_divider', 0, y, W, 32, { bg: BG_DK, stroke: STKD, sw: 2 });
txt('p4_divider_t', 0, y + 8, W,
  'PROJECT 4 OF 5  —  RialtoBioEnergyProject.vue', { size: 13, color: TXL, align: 'center' });
y += 32;

sectionBar('p4_hero_bar', 0, y, W,
  'PAGE HERO  — #RialtoBioEnergyProject  |  rialto_bioenergy/rialto-bioenergy-image-hero.jpg  |  :button="false"',
  '#e9ecef', TXM);
y += 26;
const P4_HERO_H = 360;
imgPlaceholder('p4_hero_img', 0, y, W, P4_HERO_H, 'rialto_bioenergy/rialto-bioenergy-image-hero.jpg  (bg-fixed bg-center bg-cover  +  bg-black opacity-40)');
txt('p4_hero_h1', HALF - 500, y + 140, 1000,
  'Rialto Bio Energy Facility', { size: 36, color: TXL, align: 'center' });
y += P4_HERO_H;

// ContentLeftSection — Project Milestones
y += 16;
sectionBar('p4_ms_bar', 0, y, W,
  "CONTENT LEFT SECTION  — #RialtoBioEnergyProjectMilestones  |  rialto_bioenergy/rialto-bioenergy-image-hero.jpg  |  :button=\"false\"",
  '#e9ecef', TXM);
y += 26;
const p4MsBody = wrap("Atlas furnished and installed apx. 4800' of new 12 fiber OM3 multimode cable in new and existing ducts and hand holes for SCADA network per Drawings. We terminated and tested all fibers in 12 locations in 24 new patch panels in new SCADA cabinet(s). Furnished and Installed Innerduct where required and where cable tray is exposed. Additionally, Atlas was brought in to certify entire administration building communications systems Providing Certification Testing for both cabling systems.", 88);
y += contentLeft('p4_ms', 'rialto_bioenergy/rialto-bioenergy-image-hero.jpg', 'Project Milestones', p4MsBody, null, null, y);

// ContentRightSection — Innovative Bioenergy Technology
y += 16;
sectionBar('p4_ib_bar', 0, y, W,
  'CONTENT RIGHT SECTION  — #RialtoBioEnergyProjectInnovations  |  rialto_bioenergy/rialto-bioenergy-image-hero.jpg  |  :button="false"',
  '#e9ecef', TXM);
y += 26;
const p4IbBody = wrap("The Rialto Bio Energy Facility project represents a pioneering leap in bioenergy technology, spearheaded by Atlas Integrated Systems, Inc. This facility utilizes advanced anaerobic digestion technology to convert organic waste into renewable energy and soil amendments, showcasing a commitment to innovation and sustainable resource management. The project not only diverts waste from landfills but also generates clean, green energy.", 88);
y += contentRight('p4_ib', 'rialto_bioenergy/rialto-bioenergy-image-hero.jpg', 'Innovative Bioenergy Technology', p4IbBody, null, null, y);

// ContentLeftSection — Environmental and Economic Benefits
y += 16;
sectionBar('p4_eb_bar', 0, y, W,
  'CONTENT LEFT SECTION  — #RialtoBioEnergyProjectImpact  |  rialto_bioenergy/rialto-bioenergy-image-hero.jpg  |  :button="false"',
  '#e9ecef', TXM);
y += 26;
const p4EbBody = wrap("The Rialto Bio Energy Facility brings profound environmental and economic benefits. Environmentally, it contributes to a significant reduction in greenhouse gas emissions by diverting organic waste from landfills and converting it into clean energy and natural fertilizers. Economically, it provides a sustainable energy source and creates local jobs, enhancing the economic vitality of the region.", 88);
y += contentLeft('p4_eb', 'rialto_bioenergy/rialto-bioenergy-image-hero.jpg', 'Environmental and Economic Benefits', p4EbBody, null, null, y);

// ContentRightSection — Community Engagement
y += 16;
sectionBar('p4_ce_bar', 0, y, W,
  'CONTENT RIGHT SECTION  — #RialtoBioEnergyProjectCommunity  |  rialto_bioenergy/rialto-bioenergy-image-hero.jpg  |  :button="false"',
  '#e9ecef', TXM);
y += 26;
const p4CeBody = wrap("Atlas Integrated Systems, Inc. places a high priority on community engagement and education in the Rialto Bio Energy Facility project. The company is committed to transparent communication with the local population, offering educational tours and community meetings to explain the benefits of bioenergy. They also collaborate with local educational institutions to foster a better understanding of sustainable energy practices.", 88);
y += contentRight('p4_ce', 'rialto_bioenergy/rialto-bioenergy-image-hero.jpg', 'Community Engagement and Education', p4CeBody, null, null, y);

// ══════════════════════════════════════════════════════════════════════════════
// PROJECT 5 — Camp Pendleton Data Center
// ══════════════════════════════════════════════════════════════════════════════
y += 16;
rect('p5_divider', 0, y, W, 32, { bg: BG_DK, stroke: STKD, sw: 2 });
txt('p5_divider_t', 0, y + 8, W,
  'PROJECT 5 OF 5  —  CampPendletonDataCenterProject.vue', { size: 13, color: TXL, align: 'center' });
y += 32;

sectionBar('p5_hero_bar', 0, y, W,
  'PAGE HERO  — #CampPendletonDataCenterProject  |  camp_pendleton_datacenter/datacenter2.jpg  |  :button="false"',
  '#e9ecef', TXM);
y += 26;
const P5_HERO_H = 360;
imgPlaceholder('p5_hero_img', 0, y, W, P5_HERO_H, 'camp_pendleton_datacenter/datacenter2.jpg  (bg-fixed bg-center bg-cover  +  bg-black opacity-40)');
txt('p5_hero_h1', HALF - 500, y + 140, 1000,
  'Camp Pendleton Data Center', { size: 36, color: TXL, align: 'center' });
y += P5_HERO_H;

// ContentLeftSection — Project Milestones
y += 16;
sectionBar('p5_ms_bar', 0, y, W,
  'CONTENT LEFT SECTION  — #CampPendletonDataCenterProjectMilestones  |  camp_pendleton_datacenter/datacenter2.jpg  |  :button="false"',
  '#e9ecef', TXM);
y += 26;
const p5MsBody = wrap("Atlas was brought in to certify entire fiber optic communications systems for all the processing functions throughout the newly installed Data Center, Providing Certification Testing for both SIPER and NIPER Networks for external and base wide connections. We conducted OTDR (Optical Time Domain Reflectometer) Testing for over 5000 fiber connectors in 300 newly installed enclosed racks within the new Data Center on Camp Pendleton Marine Base. Work included all documentation and repair of any and all fiber connectors not meeting R+M manufacturers specifications.", 88);
y += contentLeft('p5_ms', 'camp_pendleton_datacenter/datacenter2.jpg', 'Project Milestones', p5MsBody, null, null, y);

// ContentRightSection — Innovative Data Center Design
y += 16;
sectionBar('p5_id_bar', 0, y, W,
  'CONTENT RIGHT SECTION  — #CampPendletonDataCenterProjectInnovations  |  camp_pendleton_datacenter/datacenter2.jpg  |  :button="false"',
  '#e9ecef', TXM);
y += 26;
const p5IdBody = wrap("The Camp Pendleton Data Center project, facilitated by Atlas Integrated Systems, Inc., marks a significant advancement in military data management and IT infrastructure. This project involves the creation of a state-of-the-art data center that utilizes innovative cooling and energy-efficient technologies to reduce its footprint and increase operational capacity.", 88);
y += contentRight('p5_id', 'camp_pendleton_datacenter/datacenter2.jpg', 'Innovative Data Center Design', p5IdBody, null, null, y);

// ContentLeftSection — Environmental and Economic Benefits
y += 16;
sectionBar('p5_eb_bar', 0, y, W,
  'CONTENT LEFT SECTION  — #CampPendletonDataCenterProjectImpact  |  camp_pendleton_datacenter/datacenter2.jpg  |  :button="false"',
  '#e9ecef', TXM);
y += 26;
const p5EbBody = wrap("Atlas Integrated Systems, Inc.'s work on the Camp Pendleton Data Center emphasizes environmental stewardship alongside economic efficiency. The data center is designed to minimize energy consumption and use renewable energy sources where possible, contributing to the Department of Defense's goals for sustainability.", 88);
y += contentLeft('p5_eb', 'camp_pendleton_datacenter/datacenter2.jpg', 'Environmental and Economic Benefits', p5EbBody, null, null, y);

// ContentRightSection — Community Engagement
y += 16;
sectionBar('p5_ce_bar', 0, y, W,
  'CONTENT RIGHT SECTION  — #CampPendletonDataCenterProjectCommunity  |  camp_pendleton_datacenter/datacenter2.jpg  |  :button="false"',
  '#e9ecef', TXM);
y += 26;
const p5CeBody = wrap("Community engagement and education are key components of the Camp Pendleton Data Center project. Atlas Integrated Systems, Inc. actively involves military and civilian stakeholders in the project, ensuring that the data center meets the dynamic needs of Camp Pendleton's operations. Through workshops, seminars, and collaborative discussions, the company fosters an environment of learning and adaptation.", 88);
y += contentRight('p5_ce', 'camp_pendleton_datacenter/datacenter2.jpg', 'Community Engagement and Education', p5CeBody, null, null, y);

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
output('projects.excalidraw');
