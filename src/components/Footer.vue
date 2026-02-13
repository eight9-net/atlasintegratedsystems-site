<script setup>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { computed } from 'vue';
  import { useGetImageUrl, useFormatPhone } from '../composables/utils';

  const currentYear = computed(() => new Date().getFullYear());
</script>

<template>
  <footer class="footer-section">
    <div class="flex items-center justify-center w-full m-0 bg-blue-400">
      <h2 class="p-2 text-white text-1xl">Control Systems Integration</h2>
    </div>

    <div class="container w-full md:mx-auto">
      <div class="flex flex-col items-center justify-between space-y-8 md:flex-row md:items-start md:space-y-0 md:space-x-8">

        <div class="w-full m-0 text-center md:w-1/3">
            <img class="max-w-[300px] lg:max-w-[350px] mx-auto" :src="useGetImageUrl('scada-solutions-logo.png')" />
          <p class="my-10 text-xs copyright">&copy; {{ currentYear}} All Rights Reserved | {{ $companyName }}</p>
        </div>
        <div class="w-full m-0 text-center md:w-1/3">
          <h3 class="mx-3 my-5 font-bold">Registered California DIR Public Works Contractor<br />#{{ $companyLicense }}</h3>
          <div class="my-10 text-4xl text-blue-600">
            <a href="https://linkedin.com/company/scada-solutions-llc?trk=public_profile_topcard-current-company" alt="Visit us on LinkedIn"><FontAwesomeIcon :icon="['fab', 'linkedin']" /></a>
          </div>
        </div>
        <div class="w-full mx-0 text-center md:w-1/3">
          <h2 class="m-5 text-3xl font-normal headline">Contact Information</h2>
          <ul>
            <li class="my-5">
              <FontAwesomeIcon :icon="['fa', 'phone']" />
              <a :href="`tel:${$contactPhone}`" class="ms-1">{{ useFormatPhone($contactPhone) }}</a>
            </li>
            <li class="my-5">
              <FontAwesomeIcon :icon="['fa', 'envelope']" />
              <a :href="`mailto:${$contactEmail}`" class="ms-1">{{ $contactEmail }}</a>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </footer>
</template>
