<script setup>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import PageHero from '../components/PageHero.vue';
  import ContentFullSection from './ContentFullSection.vue';
  import ContentRightSection from './ContentRightSection.vue';
import ContentLeftSection from './ContentLeftSection.vue';

</script>
<template>
  <PageHero
    id="SanDiegoPureWaterProject"
    title="City of San Diego Pure Water Project"
    :button="false"
    image="sd_water/splash.jpg"
  />

  <ContentFullSection
    id="SanDiegoPureWaterProjectMilestones"
    name="san-diego-pure-water-project-milestones"
    title="Project Milestones"
    :button="false"
    image=""
    bgClasses="bg-primary"
    backdropClasses=""
  >
    <p class="mx-auto my-10">
      Atlas is currently engaged in multiple projects and under contracts; both contracted Directly and Subcontracting contracts through the Pure Water Program by prequalified General Contractors. This work encompasses the entire City-wide Pure Water Project for all the Processing Facilities and pipelines and DCS processes SCADA Support. The work involves installing miles of new Fiber Optic Communication Systems for City Of San Diego, PUD and various interdepartmental and security Network(s). Scheduling work with various Contracting Companies producing updated fiber optic matrix's of as-built conditions in the field and related locations, including all design engineering, documentation, cable(s), patch panels and component issues to assist in system redundancy in conjunction with other projects. We also provide budgetary estimates for all necessary phases of work for approval and RFQ processes. Atlas provides all labor and safety equipment for proposed work where required, while maintaining Prevailing DIR wages and reporting guidelines.
    </p>
  </ContentFullSection>

  <ContentRightSection
    id="SanDiegoPureWaterProjectInnovativeTechnology"
    name="san-diego-pure-water-project-innovative-technology"
    title="Innovative Water Purification Technology"
    image="sd_water/glass-bottle.jpg"
    contentBgColor="bg-white/80"
    bgClasses="bg-cover bg-center"
    :button="false"
  >
    <p class="mx-auto my-10">
      {{ siteProperties.companyName }} leverages cutting-edge water purification technology in the City of San Diego's Pure Water Project, setting a new standard in sustainable water management. This advanced system employs a multi-barrier approach, incorporating processes such as microfiltration, reverse osmosis, and advanced ultraviolet light with hydrogen peroxide, to ensure the produced water is of the highest quality and meets all state and federal drinking water standards. By transforming recycled water into safe, potable water, this technology plays a crucial role in securing San Diego's water future. The implementation of such innovative solutions demonstrates Atlas Integrated Systems, Inc.'s commitment to pioneering sustainable, reliable water sources for communities.
    </p>
  </ContentRightSection>

  <ContentFullSection
    id="SanDiegoPureWaterProjectProjectSites"
    name="san-diego-pure-water-project-project-sites"
    title="Additional Project Sites"
    :button="false"
    image="sd_water/water-bg.jpg"
    bgClasses="bg-primary"
  >
    <div class="mx-auto my-2">
      North City Pure Water Facility <FontAwesomeIcon :icon="['fa-solid', 'fa-chevron-right']" class="mx-1 text-blue-400" /> Current Contract.
    </div>
    <div class="mx-auto my-2">
      Morena Conveyance South & Middle <FontAwesomeIcon :icon="['fa-solid', 'fa-chevron-right']" class="mx-1 text-blue-400" /> Current Contract
    </div>
    <div class="mx-auto my-2">
      Morena Conveyance North <FontAwesomeIcon :icon="['fa-solid', 'fa-chevron-right']" class="mx-1 text-blue-400" /> Current Contract.
    </div>
    <div class="mx-auto my-2">
      North City Pure Water Pipeline <FontAwesomeIcon :icon="['fa-solid', 'fa-chevron-right']" class="mx-1 text-blue-400" /> Current Contract.
    </div>
  </ContentFullSection>

  <ContentLeftSection
    id="SanDiegoPureWaterProjectBenefits"
    name="san-diego-pure-water-project-benefits"
    title="Environmental and Economic Benefits"
    image="sd_water/water-pitcher.jpg"
    bgClasses="bg-cover bg-center"
    :button="false"
  >
    <p class="mx-auto my-10">
      The City of San Diego's Pure Water Project, driven by {{ siteProperties.companyName }}, delivers significant environmental and economic advantages. By reducing the city's reliance on imported water, the project minimizes the environmental impact associated with long-distance water transportation and contributes to the region's resilience against drought. Economically, this initiative is a game-changer, offering a cost-effective solution for water supply that promises long-term savings for both the city and its residents. The Pure Water Project exemplifies {{ siteProperties.companyName }}'s dedication to fostering sustainable practices that benefit the environment and the economy alike.
    </p>
  </ContentLeftSection>

  <ContentRightSection
    id="SanDiegoPureWaterProjectCommunityImpact"
    name="san-diego-pure-water-project-community-impact"
    title="Community Engagement and Education"
    image="sd_water/water-hands.jpg"
    contentBgColor="bg-white/80"
    bgClasses="bg-cover bg-center"
    :button="false"
  >
    <p class="mx-auto my-10">
      {{ siteProperties.companyName }} is at the forefront of community engagement and education through its involvement in the City of San Diego's Pure Water Project. The company actively collaborates with local stakeholders, educational institutions, and community groups to raise awareness about water sustainability and the importance of the Pure Water Project. Through workshops, tours, and educational programs, {{ siteProperties.companyName }} empowers residents with knowledge about water conservation and the role of advanced purification technology in ensuring a sustainable water future. This commitment to community involvement not only fosters greater public support for the project but also underscores the company's role as a community partner in environmental stewardship.
    </p>
  </ContentRightSection>
</template>