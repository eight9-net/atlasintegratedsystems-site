<script setup>
  import PageHero from '../components/PageHero.vue';
  import ContentRightSection from '../components/ContentRightSection.vue';
  import ContentLeftSection from '../components/ContentLeftSection.vue';
  import ListItem from '../components/ListItem.vue';
</script>
<template>

  <PageHero
    id="Services"
    title="Our Services"
    :button="false"
    image="fiber-optic-bg.jpg"
  />

  <ContentRightSection
    id="CommunicationsSystemDesign"
    name="communications-system-design"
    title="Communications System Design"
    image="blueprint.jpg"
    contentBgColor="bg-white/80"
    buttonText="Get Started"
    :buttonRoute="{ name: 'quote' }"
  >
    <p class="mx-auto my-10">
      Our crew at Atlas Integrated Systems, Inc. is made up of experts in communication systems design with an average age of 15 years of experience in the IT industry. Their basic training and licensure are a good starting point, but to stay current on new technologies, their functions, and how to properly integrate them into your network infrastructure, our communication system design specialists attend ongoing workshops, webinars, and training sessions. This helps to promote a communication system that is fit for the future.
    </p>
  </ContentRightSection>

  <ContentLeftSection
    id="Troubleshooting"
    name="troubleshooting"
    title="Communications Systems Troubleshooting"
    image="fiber-tester.jpg"
    contentBgColor="bg-white/80"
    buttonText="Get An Estimate"
    :buttonRoute="{ name: 'quote' }"
  >
    <p class="mx-auto mt-10 mb-2">
      Quality control is one of the main goals for many communication design specialists. We strive to minimize potential product mistakes as a result of technological advancements. An estimated 50% of all network failures have been attributed to improper  installation procedures. This may be caused by a number of different point-of-failures, including:
    </p>
    <ListItem>Incorrect installation procedures</ListItem>
    <ListItem>Installed cable is longer than what BICSI advises</ListItem>
    <ListItem>Overly tense situation in the cables</ListItem>
    <ListItem>Kinks or twists in the cables</ListItem>
    <ListItem>Bend radiuses outside of what the manufacturer specifies</ListItem>
    <ListItem>Failure at terminals</ListItem>
    <p class="mx-auto my-10">
      Atlas can assess your existing system and make repairs as necessary. We can also pinpoint a weakness at the design point and implement changes to avoid system failures.
    </p>
  </ContentLeftSection>

  <ContentRightSection
    id="BackboneInfrastructure"
    name="backbone-infrastructure"
    title="Configuration & Installation of Backbone Infrastructure"
    image="backbone-cable.jpg"
    contentBgColor="bg-white/80"
    buttonText="Get A Quote"
    :buttonRoute="{ name: 'quote' }"
  >
    <p class="mx-auto my-10">
      One of the top three most important parts of a communications system design is a well-designed and deployed infrastructure backbone. An optimized and correctly placed communications backbone will give your business the dependable copper/fiber infrastructure it needs to handle the applications of today and tomorrow in the quickly developing field of technology. An organized network architecture that can endure the task is necessary for your daily operations.
    </p>
  </ContentRightSection>

  <ContentLeftSection
    id="EnhancedAccessSecurity"
    name="enhanced-access-security"
    title="Enhanced Access Security"
    image="sg1.jpg"
    contentBgColor="bg-white/80"
    buttonText="Get Started"
    :buttonRoute="{ name: 'quote' }"
  >
    <p class="mx-auto mt-10 mb-2">
      A tailored access control system will block or allow entry to a certain building, space, or location, playing a crucial part in protecting your investment's interest. Your implementation of access control will give you:
    </p>
    <ListItem>Enhanced security</ListItem>
    <ListItem>Restricted access for approved personnel</ListItem>
    <ListItem>Improved Image</ListItem>
    <ListItem>Convenience</ListItem>
    <ListItem>Enhance user experience with access control solutions, such as:</ListItem>
    <div class="ml-5">
      <ListItem>With the stroke of a button, access control systems today cost a fraction of what they once did.</ListItem>
      <ListItem>Historical activity logs that are exact</ListItem>
      <ListItem>Detail-oriented activity logs that will give your security staff the pertinent data required for internal audits or law enforcement agencies</ListItem>
    </div>
    <p class="mx-auto my-10">
      Technology is here to stay and is always evolving. Our specialists work with producers and suppliers to develop a "future-proof" design that will offer an access control system for both the present and the future.
    </p>
  </ContentLeftSection>
</template>