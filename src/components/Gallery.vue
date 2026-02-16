<script setup>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { ref } from 'vue';
  import { useGetImageUrl } from '../composables/utils';
  import { useRouter } from 'vue-router';
  const router = useRouter();

  const props = defineProps({
    images: {
      type: Array,
      required: true,
    },
    cols: {
      type: String,
      default: '2',
    },
    labels: {
      type: Boolean,
      default: false,
    },
    labelClasses: {
      type: String,
      default: 'block text-center text-black',
    },
    imageClasses: {
      type: String,
      default: 'w-full h-full object-cover',
    },
  });

  const isModalOpen = ref(false);
  const currentFullSrc = ref('');
  const currentAlt = ref('');

  const handleClick = (img) => {
    const url = img.url ? img.url : null;
    const route = img.route ? img.route : null;
    if (url) {
      window.open(url, '_blank');
      return;
    }
    if (route) {
      router.push(route);
      return;
    }
    currentFullSrc.value = img.src;
    currentAlt.value = img.alt;
    isModalOpen.value = true;
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    isModalOpen.value = false;
    currentFullSrc.value = '';
    currentAlt.value = '';
    document.body.style.overflow = 'auto';
  };
</script>

<template>
  <div>
    <div :class="`grid grid-cols-1 md:grid-cols-${props.cols} gap-4`">
      <div
        v-for="(image, index) in props.images"
        :key="index"
        @click="handleClick(image)"
        class="flex-1 m-1 overflow-hidden transition duration-300 rounded-lg shadow-lg cursor-pointer hover:opacity-75"
        style="vertical-align: center;"
      >
        <div>
          <img
            :src="useGetImageUrl(image.src)"
            :alt="image.alt"
            :class="props.imageClasses"
          />
        </div>
        <label v-if="image.alt && props.labels" :class="props.labelClasses">
          {{ image.alt }}
        </label>
      </div>
    </div>

    <div
      v-if="isModalOpen"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75"
      @click.self="closeModal"
    >
      <div class="relative max-w-3xl max-h-full overflow-auto">
        <button
          @click="closeModal"
          class="absolute p-2 text-3xl font-bold text-white bg-gray-800 border border-white rounded-full cursor-pointer top-4 right-4 hover:bg-gray-700"
        >
          <FontAwesomeIcon :icon="['fa', 'times']" />
        </button>
        <img
          :src="useGetImageUrl(currentFullSrc)"
          class="max-w-full max-h-screen min-w-[600px] object-contain"
        />
      </div>
    </div>
  </div>
</template>
