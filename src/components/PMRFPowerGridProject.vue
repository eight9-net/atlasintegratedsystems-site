<script setup>
  import PageHero from '../components/PageHero.vue';
  import ContentFullSection from './ContentFullSection.vue';
  import ContentRightSection from './ContentRightSection.vue';
  import ContentLeftSection from './ContentLeftSection.vue';
  import ListItem from './ListItem.vue';

</script>
<template>
  <PageHero
    id="PMRFPowerGridProject"
    title="FY16 MCON Project P-416 Energy PMRF Power Grid Consolidation"
    :button="false"
    image="pmrf_grid/power-grid-diagram.png"
    imageBgClasses="bg-center bg-cover"
  />

  <ContentLeftSection
    id="PMRFPowerGridProjectMilestones"
    name="pmrf-power-grid-project-milestones"
    title="Project Activities & Solutions"
    image="pmrf_grid/power-pylons.jpg"
    :button="false"
  >
    <p class="mx-auto my-10">
      This project for the Navy's Pacific Missile Range Facility integrated the power generated from the AES-KIUC Solar site we had installed under an earlier contract (see Above Reference) It allowed the transfer of power to the entire Navy Base. Atlas produced pull plans and as built patching matrix’s, furnished and installed apx. 29,000' of new innerduct and 48 fiber single mode cable in new and existing ducts and hand holes for various SCADA, Power and security networks per Drawings and Rigid Military Specifications. Additionally, Atlas was brought in to certify entire administration building communications systems Providing Certification Testing for both new and existing cabling systems.
    </p>
  </ContentLeftSection>

  <ContentRightSection
    id="PMRFPowerGridProjectInnovations"
    name="pmrf-power-grid-project-innovations"
    title="Innovative Power Grid Consolidation Technology"
    image="pmrf_grid/power-substation.jpg"
    imageBgClasses="bg-center bg-cover"
    :button="false"
  >
    <p class="mx-auto my-10">
      The FY16 MCON Project P-416 at the Pacific Missile Range Facility (PMRF) showcases Atlas Integrated Systems, Inc.'s expertise in advanced energy solutions through the consolidation of the power grid. This project employs state-of-the-art technology to enhance the efficiency and reliability of the power distribution system, significantly improving energy management and resilience at PMRF. By integrating innovative grid technologies, Atlas Integrated Systems, Inc. is at the forefront of modernizing military infrastructure, ensuring secure and sustainable energy for critical operations.
    </p>
  </ContentRightSection>

  <ContentFullSection
    id="PMRFPowerGridProjectSolutionsGoals"
    name="pmrf-power-grid-project-solutions-goals"
    title=""
    image="pmrf_grid/power-pylon-clouds.jpg"
    :button="false"
  >
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
      <div>
        <h3 class="mb-4 text-xl font-semibold">Project Solutions</h3>
        <ListItem class="my-3">
          Connected the Administration/Range Operations (Admin/Range Ops) Area, Support Facilities/Housing Area, and Kokole Point Area grids
        </ListItem>
        <ListItem class="my-3">
          Utility interconnections allow load sharing and power distribution between the separate incoming feeders
        </ListItem>
        <ListItem class="my-3">
          Power transfers of excess renewable energy increase system efficiency, reduce costs and improve energy security
        </ListItem>
      </div>
      <div>
        <h3 class="mb-4 text-xl font-semibold">Project Goals</h3>
        <ListItem class="my-3">
          Consolidate the power grid into one continuous system
        </ListItem>
        <ListItem class="my-3">
          Facilitate power transfer between feeders
        </ListItem>
        <ListItem class="my-3">
          Maximize energy efficiency at the lowest lifecycle cost
        </ListItem>
      </div>
    </div>
  </ContentFullSection>

  <ContentLeftSection
    id="PMRFPowerGridProjectImpact"
    name="pmrf-power-grid-project-impact"
    title="Environmental and Economic Benefits"
    image="pmrf_grid/power-pylon-upshot.jpg"
    imageBgClasses="bg-center bg-cover"
    :button="false"
  >
    <p class="mx-auto my-10">
      The consolidation of the PMRF power grid under Project P-416 represents a significant leap forward in environmental and economic efficiency. This initiative reduces the carbon footprint by optimizing energy distribution and usage, contributing to the Department of Defense's sustainability goals. Economically, the project promises enhanced energy efficiency, leading to considerable cost savings and improved operational reliability. Atlas Integrated Systems, Inc.'s role in this project underscores their commitment to delivering solutions that benefit the environment and the economy while enhancing national security.
    </p>
  </ContentLeftSection>

  <ContentRightSection
    id="PMRFPowerGridProjectCommunity"
    name="pmrf-power-grid-project-community"
    title="Community Engagement and Education"
    image="pmrf_grid/power-pylon-sunset.jpg"
    :button="false"
    bgClasses="bg-cover bg-center"
  >
    <p class="mx-auto my-10">
      While the FY16 MCON Project P-416 primarily focuses on military infrastructure, Atlas Integrated Systems, Inc. understands the importance of community engagement and education within the broader context of energy and environmental stewardship. The company takes initiatives to inform and involve the local community and military personnel about the benefits of energy efficiency and grid consolidation. Through informational sessions, workshops, and collaboration with local and military stakeholders, Atlas Integrated Systems, Inc. promotes awareness and fosters a culture of sustainability and resilience, emphasizing the critical role of energy efficiency in national security and environmental conservation.
    </p>
  </ContentRightSection>
</template>