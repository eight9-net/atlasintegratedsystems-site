<script setup>
  import Gallery from './Gallery.vue';
</script>

<template>
  <section class="pt-10 my-10 product-overview-section">
    <div class="scroll-target" id="ProductOverview">&nbsp;</div>
    <div
      class="product-overview-container"
    >
      <div class="w-full h-full m-0">
        <div class="w-auto">
          <div class="container mx-auto">

            <div class="flex flex-col gap-4 text-center lg:flex-row lg:text-left">

              <div class="w-full p-4 lg:w-1/2">
                <h2 class="mb-10 text-3xl font-normal headline">Seamless SCADA Solutions for Uninterrupted Operations</h2>
                <p class="mx-auto">{{ $companyName }} capabilities in system design engineering of complete SCADA solutions, coupled with our experienced and professional installation knowledge, allow for seamless delivery and implementation with minimal operational interruption. Our superior communication, automation, and integration capabilities and ability to serve all brands of turbines, both old and new, set us apart from other third-party SCADA providers.</p>
                <div class="mx-auto mt-5">
                  <ContactButton buttonText="Get in Touch" />
                </div>
              </div>

              <div class="w-full p-4 lg:w-1/2">
                <Gallery
                  cols="2"
                  :images="[
                    { src: 'windcapture-01-1920w.webp', alt: 'SCADA Product Overview 1' },
                    { src: 'windcapture-02-1920w.webp', alt: 'SCADA Product Overview 2' },
                    { src: 'windcapture-03-1920w.webp', alt: 'SCADA Product Overview 3' },
                    { src: 'windcapture-04-1920w.webp', alt: 'SCADA Product Overview 4' },
                  ]"
                />

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>