<script setup>
  import { useGetImageUrl } from '../composables/utils';
  const props = defineProps({
    image: {
      type: String,
      required: false,
      default: 'products-hero-bg.jpg',
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: false,
    },
    buttonText: {
      type: String,
      required: false,
      default: 'Contact Us',
    },
    button: {
      type: Boolean,
      default: true,
    },
  });
</script>
<template>
  <section class="hero">
    <div
      class="hero min-h-[640px] w-screen relative w-full overflow-hidden"
    >
      <div
        class="absolute inset-0 bg-fixed bg-center bg-cover hero-overlay"
        :style="`background-image: url(${useGetImageUrl(props.image)});`"
      ></div>
      <div class="absolute inset-0 bg-black opacity-40"></div>

      <div class="text-center hero-content text-neutral-content">
        <div class="w-full max-w-4xl mx-auto">
          <h1 class="mb-10 text-3xl font-normal uppercase headline md:text-5xl">
            {{ props.title }}
          </h1>
          <div class="my-6 mb-5 text-2xl font-light headline">
            {{ props.subtitle }}
          </div>
          <ContactButton v-if="props.button" classes="btn btn-soft btn-primary btn-lg my-4 border border-2 border-primary" />
        </div>
      </div>
    </div>
  </section>
</template>