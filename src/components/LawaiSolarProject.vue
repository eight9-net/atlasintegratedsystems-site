<script setup>
  import PageHero from '../components/PageHero.vue';
  import ContentFullSection from './ContentFullSection.vue';
  import ContentRightSection from './ContentRightSection.vue';
  import ContentLeftSection from './ContentLeftSection.vue';
  import ListItem from './ListItem.vue';

</script>
<template>
  <PageHero
    id="LawaiSolarProject"
    title="AES-KIUC Lāwaʻi Solar Project"
    :button="false"
    image="lawai/lawai-solar.jpg"
  />

  <ContentLeftSection
    id="LawaiSolarProjectMilestones"
    name="lawai-solar-project-milestones"
    title="Project Activities & Solutions"
    image="lawai/lawai-solar.jpg"
    :button="false"
  >
    <p class="mx-auto my-10">
      The Lāwa’i Solar Project was World's Largest Solar Storage Peaker project at the time. Atlas began installing the multimode SCADA communications systems, Energy Control Network and Single mode Telco system in 2018. We furnished and installed all new fiber optic cable terminations and copper communications, certifying and installing new panels switches and PoE media converters throughout the existing site, to over 30 locations, all while the plant operations were running. The majority of the work was completed in 2019 however, we were mobilized as new locations were added and reconfigurations of the PoE Panels and SCADA systems were required to complete a design and installation for the Operations and Maintenance building. After the project, AES asked Atlas to design the PoE panels for the next projects and to develop a standard for the O&M building as well.
    </p>
  </ContentLeftSection>

  <ContentRightSection
    id="LawaiSolarProjectInnovations"
    name="lawai-solar-project-innovations"
    title="Innovative Solar Energy Technology"
    image="lawai/lawai-storage.webp"
    :button="false"
  >
    <p class="mx-auto my-10">
      The AES-KIUC Lāwa’i Solar Project stands as a testament to {{ siteProperties.companyName }}'s commitment to renewable energy innovation. This project harnesses cutting-edge solar technology to generate clean, sustainable energy, reducing reliance on fossil fuels and lowering carbon emissions. By incorporating advanced solar panels and energy storage systems, the project ensures a consistent power supply, even during non-daylight hours. This initiative not only showcases {{ siteProperties.companyName }}'s expertise in renewable energy solutions but also marks a significant step towards a greener future.
    </p>
  </ContentRightSection>

  <ContentFullSection
    id="LawaiSolarProjectPrevious"
    name="lawai-solar-project-previous"
    title="Other Significant Past work for this Owner and similar projects"
    image="lawai/solar-sunset.jpg"
    :button="false"
  >
    <ListItem>
      AES Distributed Energy/KIUC Kekaha Solar Project, Kauai
    </ListItem>
    <ListItem>
      AES Distributed Energy/MOSS West Oahu Solar Project, Kapolei ,Oahu
    </ListItem>
    <ListItem>
      AES Na Pua Makani Wind Farm, Oahu
    </ListItem>
    <ListItem>
      Lalamilo DWS Wind Farm, Hawaii County, Hawaii.
    </ListItem>
    <ListItem>
      Innergex Hale Kuawehi Solar Project, Hawaii County, Hawaii.
    </ListItem>
  </ContentFullSection>

  <ContentLeftSection
    id="LawaiSolarProjectBenefits"
    name="lawai-solar-project-benefits"
    title="Environmental and Economic Benefits"
    image="lawai/solar-aerial.jpg"
    :button="false"
    bgClasses="bg-cover bg-bottom"
  >
    <p class="mx-auto my-10">
      The AES-KIUC Lāwa’i Solar Project embodies a significant stride toward environmental and economic sustainability. By tapping into solar energy, the project substantially cuts greenhouse gas emissions, contributing to the fight against climate change. Economically, it provides the local community with a reliable source of clean energy, potentially stabilizing energy prices and fostering economic growth. {{ siteProperties.companyName }}'s involvement in this project highlights their dedication to delivering eco-friendly energy solutions that benefit the planet and the people.
    </p>
  </ContentLeftSection>

  <ContentRightSection
    id="LawaiSolarProjectCommunity"
    name="lawai-solar-project-community"
    title="Community Engagement and Education"
    image="lawai/solar-photographer.jpg"
    :button="false"
    bgClasses="bg-cover bg-top"
  >
    <p class="mx-auto my-10">
      Through the AES-KIUC Lāwa’i Solar Project, {{ siteProperties.companyName }} champions community engagement and educational outreach. The company works closely with local communities, schools, and organizations to spread awareness about the benefits of solar energy and the importance of transitioning to renewable resources. By offering tours, educational materials, and community workshops, {{ siteProperties.companyName }} plays a pivotal role in fostering a culture of sustainability and encouraging public participation in renewable energy initiatives. This engagement not only bolsters community support for the project but also reinforces the company's reputation as a leader in sustainable development and community partnership.
    </p>
  </ContentRightSection>

</template>