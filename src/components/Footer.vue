<script setup>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { computed } from 'vue';
  import { useGetImageUrl, useFormatPhone } from '../composables/utils';

  const currentYear = computed(() => new Date().getFullYear());
</script>

<template>
  <footer class="footer-section bg-header-color text-white">

    <div class="container w-full md:mx-auto">
      <div class="flex flex-col items-center justify-between space-y-8 md:flex-row md:items-start md:space-y-0 md:space-x-8">

        <div class="w-full m-0 text-center md:w-1/3 p-5">
          <div class="p-5">
            <FontAwesomeIcon :icon="['fa', 'phone']" size="2xl" />
          </div>
          <a :href="`tel:${$contactPhone}`" class="ms-1">{{ useFormatPhone($contactPhone) }}</a>
        </div>
        <div class="w-full m-0 text-center md:w-1/3 p-5">
          <div class="p-5">
            <FontAwesomeIcon :icon="['fa', 'map-location-dot']" size="2xl" />
          </div>
          <a
            :href="`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent($companyAddress)}`"
            class="ms-1"
            target="_blank"
          >
            {{ $companyAddress }}
          </a>
        </div>
        <div class="w-full mx-0 text-center md:w-1/3 p-5">
          <div class="p-5">
            <FontAwesomeIcon :icon="['fa', 'envelope']" size="2xl" />
          </div>
          <a :href="`mailto:${$contactEmail}`" class="ms-1">{{ $contactEmail }}</a>
        </div>
      </div>

      <div class="w-full m-0 text-center my-3">
        <img class="max-w-[400px] lg:max-w-[750px] mx-auto" :src="useGetImageUrl('atlas-logo.svg')" :alt="$companyName" />
        <p class="mx-3 my-5 text-lg font-bold">CA Lic. #{{ $companyLicense }}&nbsp;&nbsp;&nbsp;ACO {{ $companyACO }}</p>
        <p class="my-10 text-xs copyright">&copy; {{ currentYear}} All Rights Reserved | {{ $companyName }}</p>
      </div>

      <div class="flex items-center justify-center w-full pb-5 text-lg headline">
        <h2 class="p-2 text-white text-1xl">Communications Systems Design</h2>
      </div>
    </div>
  </footer>
</template>
