<script setup>
  const props = defineProps({
    name: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
  });
</script>

<template>
  <div class="collapse collapse-arrow bg-base-100 border border-base-300 text-black text-left" v-for="(item, idx) in props.items" :key="idx">
    <input type="radio" :name="props.name" />
    <div class="collapse-title font-semibold">{{ item.title }}</div>
    <div class="collapse-content text-sm" v-html="item.content"></div>
  </div>
</template>