<script setup>
  import { ref } from 'vue';
  import Accordion from './Accordion.vue';
  import ContentFullSection from './ContentFullSection.vue';
  import { useFormatPhone } from '../composables/utils';
  const companyNameRef = ref();
  const contactPhoneRef = ref();
  const phoneFormattedRef = ref();
  const contactEmailRef = ref();
  const mounted = () => {
    companyNameRef.value = this.$companyName;
    contactEmailRef.value = this.$contactEmail;
    contactPhoneRef.value = this.$contactPhone;
    phoneFormattedRef.value = useFormatPhone(contactPhoneRef.value);
  };
  const faqRef = ref([
    {
      title: `Why is ${companyNameRef.value} so popular?`,
      content: `
        <p class="mb-4">At ${companyNameRef.value}, our popularity is attributed to our unwavering commitment to delivering seamless SCADA solutions for uninterrupted operations, with a particular focus on control system integration.</p>
        <p class="mb-4">Our extensive capabilities in system design engineering, coupled with our experienced and professional installation knowledge, make us stand out in the industry. We excel in communication, automation, and integration, serving all brands of turbines, both old and new. What truly distinguishes us is our tailored design and engineering solutions provided by a team of skilled engineers and designers, specializing in control systems integration. We prioritize unmatched support and service, offering aggressive warranties and immediate responses to system-impacting issues, reinforcing our dedication to control system integration.</p>
        <p class="mb-4">Our expertise in SCADA solution integration and expert installation ensures the successful implementation of network solutions with minimal disruption, emphasizing our proficiency in control systems integration. For those in the solar and windpower industries, we empower projects with comprehensive services, including communication systems, SCADA design, and development, all underscored by our commitment to control system integration. </p>
        <p class="mb-4">Choose ${companyNameRef.value} for reliable, efficient, and industry-leading solutions in control systems integration.</p>
      `,
    },
    {
      title: 'What is Wind Energy?',
      content: `
        <p class="mb-4">In reality, wind energy is a converted form of solar energy. The sun's radiation heats different parts of the earth at different rates-most notably during the day and night, but also when different surfaces (for example, water and land) absorb or reflect at different rates. This in turn causes portions of the atmosphere to warm differently. Hot air rises, reducing the atmospheric pressure at the earth's surface, and cooler air is drawn in to replace it. The result is wind.</p>
        <p class="mb-4">Air has mass, and when it is in motion, it contains the energy of that motion("kinetic energy"). Some portion of that energy can converted into other forms mechanical force or electricity that we can use to perform work.</p>
      `,
    },
    {
      title: 'What is a Wind Turbine and how does it work?',
      content: `
        <p class="mb-4">A wind energy system transforms the kinetic energy of the wind into mechanical or electrical energy that can be harnessed for practical use. Mechanical energy is most commonly used for pumping water in rural or remote locations- the "farm windmill" still seen in many rural areas of the U.S. is a mechanical wind pumper - but it can also be used for many other purposes (grinding grain, sawing, pushing a sailboat, etc.). Wind electric turbines generate electricity for homes and businesses and for sale to utilities.</p>
        <p class="mb-4">There are two basic designs of wind electric turbines: vertical-axis, or "egg-beater" style, and horizontal-axis (propeller-style) machines. Horizontal-axis wind turbines are most common today, constituting nearly all of the "utility-scale" (100 kilowatts, kW, capacity and larger) turbines in the global market.</p>
      `,
    },
    {
      title: 'How many Turbines does it take to make one Megawatt (MW)?',
      content: `
        <p class="mb-4">Most manufacturers of utility-scale turbines offer machines in the 700-kW to 2.5-MW range. Ten 700-kW units would make a 7-MW wind plant, while 10 2.5-MW machines would make a 25-MW facility. In the future, machines of larger size will be available, although they will probably be installed offshore, where larger transportation and construction equipment can be used. Units up to 5 MW in capacity are now under development.</p>
      `,
    },
    {
      title: 'How do I contact you?',
      content: `
        <p class="mb-4">You can call us at <a href="tel:${contactPhoneRef.value}">${phoneFormattedRef.value}</a> or email us at <a href="mailto:${contactEmailRef.value}">${contactEmailRef.value}</a>. You can also use the form on our <a href="/#ContactUs">Contact Us</a> page.</p>
      `,
    },
  ]);
</script>

<template>
  <ContentFullSection
    name="faq"
    id="FAQs"
    image="solar-blur-bg.webp"
    title="Frequently Asked Questions"
    :button="false"
  >
    <Accordion :items="faqRef" name="faq-accordion" />
  </ContentFullSection>

</template>