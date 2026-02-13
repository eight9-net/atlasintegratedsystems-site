<script setup>
  import { ref, computed, onMounted, onUnmounted } from 'vue';
  import { useGetImageUrl } from '../composables/utils';

  const heroImagesRef = [
    'hero-bg-1.webp',
    'hero-bg-2.webp',
    'hero-bg-3.webp',
  ];

  let intervalId = ref(null);
  const currentHeroImageIdxRef = ref(0);
  const currentHeroImageComputed = computed(() => {
    return heroImagesRef[currentHeroImageIdxRef.value];
  });

  // On mounted, set up image rotation
  onMounted(() => {
    startImageRotation();
  });

  onUnmounted(() => {
    if (intervalId.value) clearInterval(intervalId.value);
  });

  function startImageRotation() {
    // Rotate hero image every 10 seconds
    intervalId = setInterval(() => {
      currentHeroImageIdxRef.value = (currentHeroImageIdxRef.value + 1) % heroImagesRef.length;
    }, 5000);
  }
</script>
<template>
  <section class="hero">
    <div
      class="relative w-full h-screen min-h-screen overflow-hidden hero"
      
    >
      <Transition name="fade"
        enter-active-class="transition-opacity duration-500 ease-in"
        leave-active-class="transition-opacity duration-500 ease-out"
        enter-from-class="opacity-0"
        leave-to-class="opacity-0"
      >
        <div
          :key="currentHeroImageComputed"
          class="absolute inset-0 bg-center bg-cover hero-overlay"
          :style="`background-image: url(${useGetImageUrl(currentHeroImageComputed)});`"
        ></div>
      </Transition>
      <div class="absolute inset-0 bg-black opacity-40"></div>

      <div class="text-center hero-content text-neutral-content">
        <div class="w-full max-w-4xl mx-auto">
          <h1 class="mb-5 text-3xl font-normal uppercase headline md:text-5xl">Streamlined Integration Solutions for Industrial Automation</h1>
          <div class="my-6 mb-5 text-2xl font-light headline">
            Control Systems Integration Services | Irvine
          </div>
          <ContactButton classes="btn btn-soft btn-primary btn-lg my-4 border border-2 border-primary" />
        </div>
      </div>
    </div>
  </section>
</template>