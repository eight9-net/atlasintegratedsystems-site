<script setup>
  import { computed } from 'vue';
  import { useGetImageUrl } from '../composables/utils';
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
    contentBgColor: {
      type: String,
      required: false,
      default: '',
    },
    bgClasses: {
      type: String,
      required: false,
      default: 'bg-cover bg-top',
    },
  });

  const bgStyleComputed = computed(() => {
    return props.image ? `background-image: url(${useGetImageUrl(props.image)});` : '';
  });

  const bgClassesComputed = computed(() => {
    return props.image ? `${props.bgClasses}` : '';
  });

</script>
<template>
  <section :class="`${props.name}-section my-10 pt-10`">

    <div class="scroll-target" :id="props.id">&nbsp;</div>

    <div :class="`${props.name}-container`">
      <div class="w-full h-full m-0">
        <div class="w-auto">
          <div class="container mx-auto">
            <div class="flex">

              <div class="flex-1 px-10 py-15" :class="props.contentBgColor">
                <h2 class="mb-2 text-xl headline uppercase tracking-wide text-primary" v-if="props.preTitle">{{ props.preTitle }}</h2>
                <h2 class="mb-10 text-3xl font-normal text-left headline">{{ props.title }}</h2>

                <slot />

                <div class="mx-auto my-5 mb-10" v-if="props.button">
                  <ContactButton :buttonText="props.buttonText" :buttonRoute="props.buttonRoute" />
                </div>
              </div>

              <div
                class="flex-1"
                :class="bgClassesComputed"
                :style="bgStyleComputed"
              >
                &nbsp;
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>