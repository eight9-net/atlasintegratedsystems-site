<script setup>
  import PageHero from '../components/PageHero.vue';
import ContentFullSection from './ContentFullSection.vue';
import ContentRightSection from './ContentRightSection.vue';

</script>
<template>
  <PageHero
    id="SanDiegoPureWaterProject"
    title="City of San Diego Pure Water Project"
    :button="false"
    image="sd_water/pexels-photo-247770-2880w.jpeg"
  />

  <ContentFullSection
    id="SanDiegoPureWaterProjectMilestones"
    name="san-diego-pure-water-project-milestones"
    title="Project Milestones"
    :button="false"
    image=""
    bgClasses="bg-header-color"
  >
    <p class="mx-auto my-10">
      Atlas is currently engaged in multiple projects and under contracts; both contracted Directly and Subcontracting contracts through the Pure Water Program by prequalified General Contractors. This work encompasses the entire City-wide Pure Water Project for all the Processing Facilities and pipelines and DCS processes SCADA Support. The work involves installing miles of new Fiber Optic Communication Systems for City Of San Diego, PUD and various interdepartmental and security Network(s). Scheduling work with various Contracting Companies producing updated fiber optic matrix's of as-built conditions in the field and related locations, including all design engineering, documentation, cable(s), patch panels and component issues to assist in system redundancy in conjunction with other projects. We also provide budgetary estimates for all necessary phases of work for approval and RFQ processes. Atlas provides all labor and safety equipment for proposed work where required, while maintaining Prevailing DIR wages and reporting guidelines.
    </p>
  </ContentFullSection>

  <ContentRightSection
    id="SanDiegoPureWaterProjectInnovativeTechnology"
    name="san-diego-pure-water-project-innovative-technology"
    title="Innovative Water Purification Technology"
    image="sd_water/pexels-photo-247770-2880w.jpeg"
    contentBgColor="bg-white/80"
    buttonText="Learn More"
    :buttonRoute="{ name: 'projects' }"
  >
    <p class="mx-auto my-10">
      
    </p>
  </ContentRightSection>
</template>