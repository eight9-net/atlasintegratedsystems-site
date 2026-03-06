<script setup>
  import PageHero from '../components/PageHero.vue';
import ContentLeftSection from './ContentLeftSection.vue';
import ContentRightSection from './ContentRightSection.vue';

</script>
<template>
  <PageHero
    id="RialtoBioEnergyProject"
    title="Rialto Bio Energy Facility"
    :button="false"
    image="rialto_bioenergy/rialto-bioenergy-image-hero.jpg"
  />

  <ContentLeftSection
    id="RialtoBioEnergyProjectMilestones"
    name="rialto-bio-energy-project-milestones"
    title="Project Milestones"
    image="rialto_bioenergy/rialto-bioenergy-image-hero.jpg"
    :button="false"
  >
    <p class="mx-auto my-10">
      Atlas furnished and installed apx. 4800' of new 12 fiber OM3 multimode cable in new and existing ducts and hand holes for SCADA network per Drawings.  We terminated and tested all fibers in 12 locations in 24 new patch panels in new SCADA cabinet(s) Furnished and Installed Innerduct where required and where cable tray is exposed. Additionally, Atlas was brought in to certify entire administration building communications systems Providing Certification Testing for both cabling systems.
    </p>
  </ContentLeftSection>

  <ContentRightSection
    id="RialtoBioEnergyProjectInnovations"
    name="rialto-bio-energy-project-innovations"
    title="Innovative Bioenergy Technology"
    image="rialto_bioenergy/biofuel-graph.jpg"
    bgClasses="bg-contain bg-no-repeat bg-center"
    :button="false"
  >
    <p class="mx-auto my-10">
      The Rialto Bio Energy Facility project represents a pioneering leap in bioenergy technology, spearheaded by Atlas Integrated Systems, Inc. This facility utilizes advanced anaerobic digestion technology to convert organic waste into renewable energy and soil amendments, showcasing a commitment to innovation and sustainable resource management. The project not only diverts waste from landfills but also generates clean, green energy, exemplifying Atlas Integrated Systems, Inc.'s drive to create renewable solutions that serve the community and the environment.
    </p>
  </ContentRightSection>

  <ContentLeftSection
    id="RialtoBioEnergyProjectImpact"
    name="rialto-bio-energy-project-impact"
    title="Environmental and Economic Benefits"
    image="rialto_bioenergy/rialto-bioenergy-image.png"
    :button="false"
  >
    <p class="mx-auto my-10">
      The Rialto Bio Energy Facility brings profound environmental and economic benefits. Environmentally, it contributes to a significant reduction in greenhouse gas emissions by diverting organic waste from landfills and converting it into clean energy and natural fertilizers. Economically, it provides a sustainable energy source and creates local jobs, enhancing the economic vitality of the region. Atlas Integrated Systems, Inc.'s involvement in this project underscores their dedication to eco-friendly business practices that also stimulate local economies.
    </p>
  </ContentLeftSection>

  <ContentRightSection
    id="RialtoBioEnergyProjectCommunity"
    name="rialto-bio-energy-project-community"
    title="Community Engagement and Education"
    image="rialto_bioenergy/clean-energy-education.jpg"
    :button="false"
  >
    <p class="mx-auto my-10">
      Atlas Integrated Systems, Inc. places a high priority on community engagement and education in the Rialto Bio Energy Facility project. The company is committed to transparent communication with the local population, offering educational tours and community meetings to explain the benefits of bioenergy. They also collaborate with local educational institutions to foster a better understanding of sustainable energy practices. Through these efforts, Atlas Integrated Systems, Inc. aims to solidify community support and inspire future generations to invest in sustainable energy.
    </p>
  </ContentRightSection>

</template>