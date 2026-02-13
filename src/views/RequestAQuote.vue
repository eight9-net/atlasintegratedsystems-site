<script setup>
  import { useGetImageUrl } from '../composables/utils';
  import PageHero from '../components/PageHero.vue';
  import RequestAQuoteForm from '../components/RequestAQuoteForm.vue';
</script>

<template>

  <PageHero
    title="Request a Quote"
    :button="false"
  />

  <section class="pt-10 my-10 contact-us-section">
    <div class="scroll-target" id="ContactUs">&nbsp;</div>
    <div
      class="bg-blue-400 bg-center bg-cover contact-us-container"

    >
      <div class="w-full h-full m-0 text-white backdrop-brightness-50">
        <div class="w-auto">
          <div class="container mx-auto text-center lg:px-40 faq-container py-25">
            <h2 class="mb-10 text-3xl font-normal text-center text-white headline">Fill Out Our Form to Request a Quote</h2>
            <RequestAQuoteForm />
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
