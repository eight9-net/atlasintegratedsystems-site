<script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  import { useGetImageUrl } from '../composables/utils';

  const props = defineProps({
    slides: {
      type: Array,
      required: true,
      // Each slide: { image: 'path.jpg', label: 'Label Text', title: 'Alt text', overlay: 'Optional HTML content for overlay'}
    },
    autoplay: {
      type: Boolean,
      default: false,
    },
    interval: {
      type: Number,
      default: 10000,
    },
    imageClasses: {
      type: String,
      default: 'w-full h-full object-cover',
    },
    height: {
      type: String,
      default: 'h-[500px]',
    },
  });

  const activeIndex = ref(0);
  let timer = null;

  const goTo = (index) => {
    activeIndex.value = index;
    resetAutoplay();
  };

  const next = () => {
    activeIndex.value = (activeIndex.value + 1) % props.slides.length;
  };

  const prev = () => {
    activeIndex.value = (activeIndex.value - 1 + props.slides.length) % props.slides.length;
  };

  const resetAutoplay = () => {
    if (!props.autoplay) return;
    clearInterval(timer);
    timer = setInterval(next, props.interval);
  };

  onMounted(() => {
    if (props.autoplay) {
      resetAutoplay();
    }
  });

  onUnmounted(() => {
    clearInterval(timer);
  });
</script>

<template>
  <div class="relative w-full" :class="props.height">
    <!-- Slides -->
    <div class="relative w-full h-full rounded-lg">
      <transition-group name="carousel-fade">
        <div
          v-for="(slide, index) in props.slides"
          :key="index"
          v-show="activeIndex === index"
          class="absolute inset-0"
        >
          <img
            :src="useGetImageUrl(slide.image)"
            :alt="slide.title || slide.label"
            :class="props.imageClasses"
            v-if="slide.image"
          />
          <!-- Optional overlay text on the slide -->
          <div v-if="slide.overlay" class="absolute inset-0 bg-black/40">
            <div class="mt-10">
              <h2 class="text-white text-2xl md:text-4xl font-semibold text-center px-4 headline mb-10">{{ slide.title }}</h2>
              <div class="text-white text-normal font-semibold text-center px-4 headline" v-html="slide.overlay">
              </div>
            </div>
          </div>
        </div>
      </transition-group>
    </div>

    <!-- Prev / Next arrows -->
    <button
      @click="prev"
      class="absolute left-3 bottom-10 btn btn-circle btn-xl bg-black/40 border-none text-white hover:bg-black/60"
    >
      &#10094;
    </button>
    <button
      @click="next"
      class="absolute right-3 bottom-10 btn btn-circle btn-xl bg-black/40 border-none text-white hover:bg-black/60"
    >
      &#10095;
    </button>

    <!-- Text label indicator buttons -->
    <div class="relative bottom-40 md:bottom-30 xl:bottom-20 flex flex-wrap justify-center items-center content-center gap-2 mx-15">
      <button
        v-for="(slide, index) in props.slides"
        :key="index"
        @click="goTo(index)"
        class="btn btn-sm text-xs transition-all duration-200"
        :class="activeIndex === index
          ? 'btn-primary'
          : 'bg-black/50 border-none text-white hover:bg-black/70'"
      >
        {{ slide.label }}
      </button>
    </div>
  </div>
</template>

<style scoped>
  .carousel-fade-enter-active,
  .carousel-fade-leave-active {
    transition: opacity 0.5s ease;
  }
  .carousel-fade-enter-from,
  .carousel-fade-leave-to {
    opacity: 0;
  }
</style>
