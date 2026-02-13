<script setup>

  import { ref, shallowRef } from 'vue';
  import { vElementHover } from '@vueuse/components';
  import { useRouter } from 'vue-router';
  const router = useRouter();

  const props = defineProps({
    title : {
      type: String,
      required: true
    },
    link: {
      type: Object,
      required: false
    },
    links : {
      type: Array,
      required: true
    },
    hover: {
      type: Boolean,
      default: true
    },
    border: {
      type: Boolean,
      default: true
    },
    isHorizontal: {
      type: Boolean,
      default: false
    },
  });

  const borderClass = ref(props.border ? 'border border-gray-300' : '');

  const isHovered = shallowRef(false);

  function onHover(state) {
    if (!props.hover) return;
    isHovered.value = state;
  }

  const emit = defineEmits(['emitCloseMenu']);
  function handleCloseMenu() {
    isHovered.value = false;
    emit('emitCloseMenu');
  }

  function goto(link, sectionMenu = false) {
    if (sectionMenu && props.isHorizontal) {
      router.push(link);
    } else if (!sectionMenu) {
      router.push(link);
      handleCloseMenu();
    }
  }

</script>

<template>
  <li>
    <details v-element-hover="[onHover, { delayEnter: 300 }]" :open="isHovered">
      <summary>
        <a v-if="link" @click="goto(link, true)">{{ title }}</a>
        <span v-else>{{ title }}</span>
      </summary>
      <ul :class="`bg-base-100 rounded-t-none ${borderClass} p-2 w-52 subnav z-50`">
        <li v-for="(item, index) in links" :key="index">
          <a href="javascript://" @click="goto({ name: item.name, hash: item.hash })">{{ item.title }}</a>
        </li>
      </ul>
    </details>
  </li>
</template>

<style scoped>
  .navbar .subnav {
    margin-block-start: 0px;
  }
</style>