<script setup>
  import HomeHero from '../components/HomeHero.vue';
  import HomeRecentProjects from '../components/HomeRecentProjects.vue';
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
      id="HomeCards"
      name="home-cards"
      title=""
      image=""
      buttonText="Learn More"
      containerClasses="px-0 py-0"
      backdropClasses=""
      sectionClasses="my-0 pt-20"
    >
      <div class="grid grid-cols-1 gap-5 text-center md:grid-cols-2">
        <div>
          <ContentFullSection
            id="TrainedProfessionals"
            name="trained-professionals"
            title="Trained Professionals"
            image="engineer-tower.jpg"
            contentClasses="text-black p-5 min-h-[400px] max-h-[400px] max-w-[650px]"
            containerClasses="container mx-auto p-0"
            backdropClasses="mr-[50%] bg-white/40 backdrop-brightness-80"
            bgClasses="bg-cover bg-bottom h-full min-h-[400px] max-h-[400px] max-w-[650px]"
            :button="false"
            sectionClasses="my-0 pt-0 flex justify-end"
            titleClasses="mb-10 text-2xl lg:text-3xl font-normal headline"
          >
            <p class="text-normal lg:text-lg">
              Our engineers have completed the necessary professional certifications and participate in ongoing training to keep up with communication industry standards.
            </p>
          </ContentFullSection>
        </div>
        <div>
          <ContentFullSection
            id="ContinuousSupport"
            name="continuous-support"
            title="Continuous Support"
            image="monitor.jpg"
            contentClasses="text-white p-5 min-h-[400px] max-h-[400px] max-w-[650px]"
            containerClasses="container mx-auto p-0"
            backdropClasses="backdrop-brightness-30 mr-[50%]"
            bgClasses="bg-cover bg-bottom h-full min-h-[400px] max-h-[400px] max-w-[650px]"
            :button="false"
            sectionClasses="my-0 pt-0 flex justify-start"
            titleClasses="mb-10 text-2xl lg:text-3xl font-normal headline"
          >
            <p class="text-normal lg:text-lg">
              Get peace of mind with technology and 24/7 expert monitoring. Our customers rely on us to safeguard their businesses from outages.
            </p>
          </ContentFullSection>
        </div>
        <div>
          <ContentFullSection
            id="CustomDesignedSolutions"
            name="custom-designed-solutions"
            title="Custom Designed Solutions"
            image="blueprint.jpg"
            contentClasses="text-black p-5 min-h-[400px] max-h-[400px] max-w-[650px]"
            containerClasses="container mx-auto p-0"
            backdropClasses="md:ml-[50%] bg-white/50 md:backdrop-brightness-80"
            bgClasses="bg-cover bg-bottom h-full min-h-[400px] max-h-[400px] max-w-[650px]"
            :button="false"
            sectionClasses="my-0 pt-0 flex justify-end"
            titleClasses="mb-10 text-2xl lg:text-3xl font-normal headline"
          >
            <p class="text-normal lg:text-lg">
              We serve a variety of industries with varied needs. We offer systems and services for commercial, government, and military spaces.
            </p>
          </ContentFullSection>
        </div>
        <div>
          <ContentFullSection
            id="TrustedBrands"
            name="trusted-brands"
            title="Trusted Brands"
            image="server-gear.jpg"
            contentClasses="text-white p-5 min-h-[400px] max-h-[400px] max-w-[650px]"
            containerClasses="container mx-auto p-0"
            backdropClasses="backdrop-brightness-30 ml-[50%]"
            bgClasses="bg-cover bg-bottom min-h-[400px] max-h-[400px] max-w-[650px]"
            :button="false"
            sectionClasses="my-0 pt-0 flex justify-start"
            titleClasses="mb-10 text-2xl lg:text-3xl font-normal headline"
          >
            <p class="text-normal lg:text-lg">
              Atlas Integrated Systems in Irvine, CA is a direct supplier of quality communication system products from well-known brands from a wide range of suppliers.
            </p>
          </ContentFullSection>
        </div>
      </div>
    </ContentFullSection>

    <ContentFullSection
      id="Metrics"
      name="metrics"
      title="Our Metrics"
      image="fiber-optic-bg.jpg"
      backdropClasses="backdrop-brightness-25"
      buttonText="Contact Us"
      containerClasses="container mx-auto px-5 md:px-20 py-25"
    >
      <div class="grid grid-cols-1 gap-10 my-10 text-center text-white md:grid-cols-2 lg:grid-cols-4 headline">
        <div>
          <h3 class="text-4xl font-bold">22+</h3>
          <p class="text-lg font-normal">Years of Experience</p>
        </div>
        <div>
          <h3 class="text-4xl font-bold">100%</h3>
          <p class="text-lg font-normal">Customer Satisfaction</p>
        </div>
        <div>
          <h3 class="text-4xl font-bold">500+</h3>
          <p class="text-lg font-normal">Completed Projects</p>
        </div>
        <div>
          <h3 class="text-4xl font-bold">25+</h3>
          <p class="text-lg font-normal">Subcontractor Relationships</p>
        </div>
      </div>
    </ContentFullSection>

    <ContentRightSection
      id="RequestConsultation"
      name="request-consultation"
      title="Request a Consultation"
      image="solar-turbine-blueprint.jpg"
      buttonText="Contact Us"
    >
      <p class="mx-auto my-10">
        Our team will be happy to assist you with your upcoming communication system design.
      </p>
    </ContentRightSection>

    <ContentLeftSection
      id="WhoWeAre"
      name="who-we-are"
      preTitle="Who We Are"
      title="Building Integrity in Communications"
      image="engineers-solar.jpg"
      buttonText="Tell Us More"
    >
      <p class="mx-auto my-10">
        Our company is a leader in providing design, production and maintenance support of communications systems for industrial and municipal customers in Southern California. While our products and systems are primarily focused on the physical layer of networked applications, our Municipal Systems business also offers services and systems for Homeland Security, Government and commercial applications. We also provide a wide range of services and support to our customers through our network of subcontractors.
      </p>
    </ContentLeftSection>

    <HomeRecentProjects />

    <ContentLeftSection
      id="DesignProcess"
      name="design-process"
      title="Our Design Process"
      image="field-engineer2.jpg"
      buttonText="Submit Project Outline"
    >
      <p class="mx-auto my-10">
        Using the most relevant technologies allows Atlas the flexibility to retrofit as well as build out an entire new infrastructure. This provides the best ROI for our clients. Our technical expertise is unmatched in our ability to provide as-built drawings and matrices for sites that have little or no information on existing infrastructure. This is crucial for finding what may be utilized, saving thousands of dollars and downtime.
      </p>
    </ContentLeftSection>

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
        “We can find a solution for any communication system”. That's a bold statement… but we are confident that we can implement a system that encompasses multiple disciplines to achieve our clients' needs and in some cases exceeds expectations.
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
        The City of San Diego's pipeline and communications network infrastructure was finally linked together. However, the signal loss was too great from its South Bay facilities to its Operations Center over 22 miles away.  Segments had been patched together and installed over a period of more than 10 years in some areas.
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
      contentBgColor="bg-primary text-white"
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
      contentBgColor="bg-primary text-white"
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
