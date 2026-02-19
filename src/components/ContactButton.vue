<script setup>
  const props = defineProps({
    buttonText: {
      type: String,
      required: false,
      default: 'Contact Us',
    },
    classes: {
      type: String,
      required: false,
      default: 'btn btn-primary',
    },
    buttonRoute: {
      type: Object,
      required: false,
      default: { name: 'home', hash: '#ContactUs' },
    },
  });
</script>
<template>
  <router-link :to="props.buttonRoute" :class="props.classes">{{ props.buttonText }}</router-link>
</template>