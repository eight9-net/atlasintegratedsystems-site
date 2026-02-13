<script setup>
  import { useGetImageUrl, useFormatPhone } from '../composables/utils';
  import HomeContactForm from './HomeContactForm.vue';

</script>

<template>

  <section class="pt-10 my-10 contact-us-section">
    <div class="scroll-target" id="ContactUs">&nbsp;</div>
    <div
      class="bg-center bg-cover contact-us-container"
      :style="`background-image: url(${useGetImageUrl('turbines-blue-bg.webp')});`"
    >
      <div class="w-full h-full m-0 text-white backdrop-brightness-50">
        <div class="w-auto">
          <div class="container mx-auto text-center lg:px-40 faq-container py-25">
            <h2 class="mb-10 text-3xl font-normal text-center text-white headline">Contact Us</h2>
            <div class="px-5 mx-auto my-4 md:px-40">
              <p>Call Us</p>
              <p>
                <FontAwesomeIcon :icon="['fa', 'phone']" />
                <a :href="`tel:${$contactPhone}`" class="ms-1">{{ useFormatPhone($contactPhone) }}</a>
              </p>
            </div>
            <div class="px-5 mx-auto my-4 md:px-40">
              <p>Email Us</p>
              <p>
                <FontAwesomeIcon :icon="['fa', 'envelope']" />
                <a :href="`mailto:${$contactEmail}`" class="ms-1">{{ $contactEmail }}</a>
              </p>
            </div>
            <p class="px-5 mx-auto my-4 md:px-40">
              Enter your information below along with a brief message and your contact details. A member of our team will be in touch with you as soon as possible to schedule a consultation.
            </p>
            <HomeContactForm />
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .validator-hint {
    font-size: 0.75rem;
  }
</style>