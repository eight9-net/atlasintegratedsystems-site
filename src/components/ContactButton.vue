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
  });
</script>
<template>
  <router-link :to="{ name: 'home', hash: '#ContactUs' }" :class="props.classes">{{ props.buttonText }}</router-link>
</template>