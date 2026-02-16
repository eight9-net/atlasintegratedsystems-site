<script setup>
  import HomeHero from '../components/HomeHero.vue';
  import HomeContactSection from '../components/HomeContactSection.vue';
  import HomeFaq from '../components/HomeFaq.vue';
  import ContentFullSection from '../components/ContentFullSection.vue';
  import ContentLeftSection from '../components/ContentLeftSection.vue';
  import ContentRightSection from '../components/ContentRightSection.vue';
  import Gallery from '../components/Gallery.vue';


</script>

<template>
  <div class="home">

    <HomeHero />


    <ContentFullSection
      id="ServicesGallery"
      name="services-gallery"
      image="fiberoptic-bg.jpg"
      title="All the services you need, in one place"
      buttonText="View Service Details"
      :buttonRoute="{ name: 'services' }"
      containerClasses="container mx-auto px-5 md:px-10 py-5"
      backdropClasses=""
    >
      <Gallery
        :images="[
          { src: 'blueprint2.jpg', alt: 'Communications Systems Design', route: { name: 'services', hash: '#CommunicationsSystemsDesign' } },
          { src: 'field-engineer.jpg', alt: 'Communications Systems Troubleshooting', route: { name: 'services', hash: '#CommunicationsSystemsTroubleshooting' } },
          { src: 'fiber-switch.jpg', alt: 'Configuration & Installation of Backbone Infrastructure', route: { name: 'services', hash: '#BackboneInfrastructure' } },
          { src: 'id-badges.jpg', alt: 'Enhanced Access Security', route: { name: 'services', hash: '#EnhancedAccessSecurity' } },
        ]"
        cols="4"
        :labels="true"
        labelClasses="block text-white text-center p-2 bg-gray-400/80"
      />
    </ContentFullSection>


    <ContentFullSection
      id="FocusCommunicationSolutions"
      name="focus-communication-solutions"
      preTitle="Our Focus"
      title="Delivering Sound Solutions for Communications Infrastructure"
      image="datacenter.jpg"
      buttonText="Get In Touch"
      contentClasses="bg-white/80 text-black p-10"
    >
      <p class="mx-auto my-10 text-lg font-normal headline">
        “We can find a solution for any communication system”. That’s a bold statement… but we are confident that we can implement a system that encompasses multiple disciplines to achieve our clients' needs and in some cases exceeds expectations.
      </p>
    </ContentFullSection>

    <ContentRightSection
      id="TroubleShootingSignalLoss"
      name="troubleshooting-signal-loss"
      preTitle="Troubleshooting"
      title="Signal Loss"
      image="construction-site.jpg"
      buttonText="Learn More"
    >
      <p class="mx-auto my-10 text-lg font-normal headline">
        Project Description: Troubleshoot South Bay Water Treatment Facility to Metropolitan Bio-Solids Complex Communication Infrastructure
      </p>
      <p class="mx-auto my-10">
        The City of San Diego’s pipeline and communications network infrastructure was finally linked together. However, the signal loss was too great from its South Bay facilities to its Operations Center over 22 miles away.  Segments had been patched together and installed over a period of more than 10 years in some areas.
      </p>
      <p class="mx-auto my-10">
        Atlas was able to isolate the problem areas, and fix all the problems without disturbing the citywide plant, lowering the signal loss substantially and establishing the communications link the City required.
      </p>
    </ContentRightSection>

    <ContentFullSection
      id="CostEfficientNetworkUpgrades"
      name="cost-efficient-network-upgrades"
      title="Cost Efficient Network Upgrades"
      image="solar-plant.jpg"
      contentBgColor="bg-header-color text-white"
      buttonText="Get Started"
    >
      <p class="mx-auto my-10 text-lg font-normal headline">
        Project Description: New fiber optic network for FPL's Kramer Junction Solar Site
      </p>
      <p class="mx-auto my-10">
        Our client, Florida Power & Light, needed to upgrade its fiber optic network and give it room to grow. They required underground and aerial cost estimates to evaluate which would be the most viable solution. We designed the most cost-effective system and installed over 2 miles of network infrastructure both incorporating both aerial and underground designs while not disturbing plant operations at the peak of their season.
      </p>
    </ContentFullSection>

    <ContentLeftSection
      id="InnovativeSolutions"
      name="innovative-solutions"
      title="Innovative Solutions, High-Tech Methods"
      image="turbines-clouds.webp"
      contentBgColor="bg-header-color text-white"
      buttonText="Contact Us"
    >
      <p class="mx-auto my-10 text-lg font-normal headline">
        Project Description: Hybrid Communications For FPL's Cabazon Wind Energy Site
      </p>
      <p class="mx-auto my-10">
        Once again our client Florida Power & Light needed a solution that was both cost-effective and functional. The SCADA system at their Cabazon Wind location needed updates.
      </p>
      <p class="mx-auto my-10">
        After assessing the plant's needs, and its number of turbines, we incorporated a Hybrid communication system. We used “mesh radio” RF technologies and a backbone fiber optic trunk that would increase reporting speeds without the expense of trenching new fiber optic cable to every wind turbine location.
      </p>
    </ContentLeftSection>

    <HomeFaq />

    <HomeContactSection />

  </div>
</template>

<style scoped>

</style>
