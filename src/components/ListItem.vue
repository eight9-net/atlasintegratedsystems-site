<script setup>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  const props = defineProps({
    itemClasses: {
      type: String,
      required: false,
      default: '',
    },
  });

</script>

<template>
  <div :class="props.itemClasses">
    <FontAwesomeIcon :icon="['fa-solid', 'fa-chevron-right']" class="mx-1 text-blue-400" />
    <slot></slot>
  </div>
</template>