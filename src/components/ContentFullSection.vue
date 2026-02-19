<script setup>
  import { computed } from 'vue';
  import { useGetImageUrl } from '../composables/utils';
  import { useRouter } from 'vue-router';
  const router = useRouter();
  const props = defineProps({
    name: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    preTitle: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: true,
    },
    button: {
      type: Boolean,
      default: true,
    },
    buttonText: {
      type: String,
      required: false,
    },
    buttonRoute: {
      type: Object,
      required: false,
    },
    contentClasses: {
      type: String,
      required: false,
      default: 'text-center text-white',
    },
    backdropClasses: {
      type: String,
      required: false,
      default: 'backdrop-brightness-60',
    },
    containerClasses: {
      type: String,
      required: false,
      default: 'container mx-auto px-5 md:px-40 py-25',
    },
    bgClasses: {
      type: String,
      required: false,
      default: 'fixed-bg',
    },
    sectionClasses: {
      type: String,
      required: false,
      default: 'my-10 pt-10',
    },
    titleClasses: {
      type: String,
      required: false,
      default: 'mb-10 text-3xl font-normal headline',
    },
  });

  const bgStyleComputed = computed(() => {
    return props.image ? `background-image: url(${useGetImageUrl(props.image)});` : '';
  });

  const bgClassesComputed = computed(() => {
    return props.bgClasses ? `${props.bgClasses}` : '';
  });

</script>
<template>
  <section :class="`${props.name}-section ${props.sectionClasses}`">
    <div class="scroll-target" :id="props.id">&nbsp;</div>
    <div
      :class="bgClassesComputed"
      :style="bgStyleComputed"
    >
      <div class="flex-1 w-full h-full m-0">
        <div class="w-auto" :class="props.backdropClasses">
          <div :class="`${props.containerClasses} ${props.name}-container`">
            <div :class="props.contentClasses">
              <h2 class="mb-2 text-xl tracking-wide uppercase headline text-primary" v-if="props.preTitle">{{ props.preTitle }}</h2>
              <h2 :class="props.titleClasses" v-if="props.title">{{ props.title }}</h2>

              <slot />

              <div class="mx-auto my-5" v-if="props.button">
                <ContactButton :buttonText="props.buttonText" :buttonRoute="props.buttonRoute" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>