<script setup>
  const props = defineProps({
    classes: {
      type: String,
      default: 'menu menu-horizontal px-1 text-lg mx-auto justify-center'
    },
    hover: {
      type: Boolean,
      default: true
    },
    border: {
      type: Boolean,
      default: true
    },
  });
  import { shallowRef } from 'vue';
  import DropdownMenu from './DropdownMenu.vue';


  const links = shallowRef({
    home: [
    ],
    projects: [
      { name: 'projects', hash: '#SanDiegoPureWaterProject', title: 'City of San Diego Pure Water Project' },
      { name: 'projects', hash: '#LawaiiSolarProject', title: 'AES-KIUC Lawaii Solar Project' },
      { name: 'projects', hash: '#PMRFPowerGridProject', title: 'FY16 MCON Project P-416 Energy PMRF Power Grid Consolidation' },
      { name: 'projects', hash: '#RialtoBioEnergyProject', title: 'Rialto Bio Energy Facility' },
      { name: 'projects', hash: '#CampPendletonDataCenterProject', title: 'Camp Pendleton Data Center' },
    ],
    services: [
      { name: 'services', hash: '#CommunicationSystemsDesign', title: 'Communication Systems Design' },
      { name: 'services', hash: '#ServiceAndSupport', title: 'Service and Support' },
      { name: 'services', hash: '#Integration', title: 'Integration' },
      { name: 'services', hash: '#Installation', title: 'Installation' },
      { name: 'services', hash: '#SolarServices', title: 'Solar Services' },
      { name: 'services', hash: '#WindServices', title: 'Wind Services' },
    ],
    contact: [
    ],
  });

  const isHorizontal = shallowRef(props.classes.includes('menu-horizontal'));

  const emit = defineEmits(['emitCloseMenu']);
  const handleCloseMenu = () => {
    emit('emitCloseMenu');
  };
</script>

<template>
  <ul :class="props.classes">
    <router-link :to="{ name: 'home' }" class="py-1.5 px-3 rounded-md font-medium text-lg hover:text-sky-400 active:text-sky-400 transition-colors">Home</router-link>
    <DropdownMenu title="Projects" :links="links.projects" :hover="props.hover" :border="props.border" :link="{name: 'projects'}" :isHorizontal="isHorizontal" @emitCloseMenu="handleCloseMenu" />
    <DropdownMenu title="Services" :links="links.services" :hover="props.hover" :border="props.border" :link="{name: 'services'}" :isHorizontal="isHorizontal" @emitCloseMenu="handleCloseMenu" />
    <router-link :to="{ name: 'contact' }" class="py-1.5 px-3 rounded-md font-medium text-lg hover:text-sky-400 active:text-sky-400 transition-colors">Contact</router-link>
  </ul>
</template>


<style scoped>
  .navbar .subnav {
    margin-block-start: 0px;
  }
</style>