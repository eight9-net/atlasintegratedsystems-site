<script setup>
  import { ref, inject, onMounted } from 'vue';
  import Accordion from './Accordion.vue';
  import ContentFullSection from './ContentFullSection.vue';

  const siteProperties = inject('siteProperties');
  const faqRef = ref([]);
  onMounted(() => {
    if (siteProperties) {
      faqRef.value = [
        {
          title: `Why hire ${siteProperties.companyName}?`,
          content: `
            <p class="mb-4">Let's face it, effective communication systems design is essential for every organization to succeed. However, it's simpler said than done. ${siteProperties.companyNameShort} will support you in achieving the best communication system to support business.</p>
            <p class="mb-4">Our communication systems design offerings are comprehensive. We are now able to provide all of your needs for business communication system solutions. You will get access to our knowledgeable Atlas support team in addition to assistance with configuration and installation.</p>
            <p class="mb-4">For every communication systems design and  product, we provide technical assistance. This includes swapping out necessary hardware and updating software. Additionally, we offer 24/7 quick, individual customer service. Call us at <a href="tel:${siteProperties.contactPhone}">${siteProperties.contactPhoneFormatted}</a> today for a free consultation and be on your way to more effective communication!</p>
          `,
        },
        {
          title: `Does ${siteProperties.companyName} carry a valid contracting license?`,
          content: `
            <p class="mb-4">One of the US licensing authorities with the best reputation is the CSLB. Candidates must pass a written board test and demonstrate that they have at least four years of relevant professional experience. Additionally, the CSLB offers you a number of important consumer protections and mandates that all license holders maintain at least $2,500 in operational capital.</p>
            <p class="mb-4">In California, a contractor must be in good standing with the California Contractor State License Board for any remodeling or building job that costs more than $500 (labor and materials) (CSLB).</p>
            <p class="mb-4">${siteProperties.companyName} holds license ${siteProperties.companyLicense} (Low Voltage Systems).</p>
          `,
        },
        {
          title: 'Can you troubleshoot and existing communication system?',
          content: `
            <p class="mb-4">Yes, our team is qualified to analyze your existing communication system to pinpoint any problems. We can then give you an estimate of the cost needed to repair or replace the system.</p>
          `,
        },
        {
          title: 'Where is your main office?',
          content: `
            <p class="mb-4">Our main office is located at <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteProperties.companyAddress)}" target="_blank" rel="noopener noreferrer">${siteProperties.companyAddress}</a>.</p>
          `,
        },
        {
          title: 'How do I contact you?',
          content: `
            <p class="mb-4">You can call us at <a href="tel:${siteProperties.contactPhone}">${siteProperties.contactPhoneFormatted}</a> or email us at <a href="mailto:${siteProperties.contactEmail}">${siteProperties.contactEmail}</a>. You can also use the form on our <a href="/#/contact">Contact</a> page.</p>
          `,
        },
      ];
    }
  });


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