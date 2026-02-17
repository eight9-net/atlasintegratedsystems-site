<script setup>
  import Carousel from '../components/Carousel.vue';

  const projectSlides = [
    {
      label: 'San Diego Pure Water Project',
      title: 'City of San Diego Pure Water Project',
      overlay: "<p>Atlas Integrated Systems, Inc. is actively involved in the City-wide Pure Water Project in San Diego, handling the installation of extensive Fiber Optic Communication Systems for public utilities and security networks. Their comprehensive services include design engineering, documentation, and providing detailed budgetary estimates for each phase, while ensuring compliance with safety and wage regulations. Atlas operates both as a direct contractor and subcontractor, coordinating closely with various companies to update infrastructure and support system redundancy.</p>",
      route: { name: 'projects', hash: '#SanDiegoPureWaterProject' },
    },
    {
      label: 'Lawaii Solar',
      title: 'AES-KIUC Lawaii Solar Project',
      overlay: "<p>Atlas Integrated Systems, Inc. played a crucial role in the Lāwa’i Solar Project, known as the world\'s largest solar storage peaker at the time, by installing cutting-edge SCADA communications and energy control networks beginning in 2018. They expertly handled the complex task of integrating new fiber optic and copper communications into the active plant, contributing to the project\'s success through 2019, with ongoing enhancements for new and reconfigured systems. Post-completion, AES recognized Atlas\'s expertise by entrusting them with the design of future PoE panels and setting standards for Operations and Maintenance buildings.</p>",
      route: { name: 'projects', hash: '#LawaiiSolarProject' },
    },
    {
      label: 'PMRF Power Grid',
      title: 'FY16 MCON Project P-416 Energy PMRF Power Grid Consolidation',
      overlay: "<p class=\"mx-auto my-5\">For the Pacific Missile Range Facility, Atlas Integrated Systems, Inc. was instrumental in integrating power from the AES-KIUC Solar site to support the Navy base's operations. They managed the installation of approximately 29,000 feet of new cabling infrastructure, meeting strict military specifications, and provided certification testing for the base's communication systems to ensure reliability and security.</p>",
      route: { name: 'projects', hash: '#FY16MCONProjectP416EnergyPMRFPowerGridConsolidation' },
    },
    {
      label: 'Rialto Bio Energy',
      title: 'Rialto Bio Energy Facility',
      overlay: "<p>Atlas Integrated Systems, Inc. successfully installed roughly 4,800 feet of new 12-fiber OM3 multimode cable for a SCADA network, terminating and testing connections across 12 locations with new patch panels and cabinets. The project also involved the installation of innerducts and the certification of the entire administration building's communication systems to ensure optimal performance and system integrity.</p>",
      route: { name: 'projects', hash: '#RialtoBioEnergyFacility' },
    },
    {
      label: 'Camp Pendleton Data Center',
      title: 'Camp Pendleton Data Center',
      overlay: "<p>Atlas Integrated Systems, Inc. was tasked with the crucial job of certifying the fiber optic communications systems for the processing functions at the new Data Center on Camp Pendleton Marine Base. They conducted comprehensive OTDR Testing on over 5,000 fiber connectors within 300 enclosed racks, ensuring that both SIPRNet and NIPRNet connections met rigorous standards. Their work included meticulous documentation and the repair of any components that did not meet the required specifications.</p>",
      route: { name: 'projects', hash: '#CampPendletonDataCenter' },
    },
  ];

</script>
<template>
  <ContentFullSection
    id="RecentProjects"
    name="recent-projects"
    title="Recent Projects"
    image="lawaii/pexels-photo-2800845-2880w.jpeg"
    backdropClasses="backdrop-brightness-25"
    bgClasses="bg-cover bg-center"
    :button="false"
  >
    <Carousel
      :slides="projectSlides"
      :autoplay="true"
      :interval="20000"
      height="h-[700px] md:h-[650px] lg:h-[500px]"
    />
  </ContentFullSection>
</template>