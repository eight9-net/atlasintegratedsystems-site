<script setup>
  import { ref } from 'vue';
  import { useGetImageUrl } from '../composables/utils';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import NavigationMenu from './NavigationMenu.vue';
  const isOpen = ref(false);
  const toggleMobileNav = () => {
    isOpen.value = !isOpen.value;
  };
  const handleCloseMenu = () => {
    isOpen.value = false;
    mobileMenuElement.value.removeAttribute('open');
  };
  const mobileMenuElement = ref(null);
</script>

<template>
  <header class="sticky top-0 z-50 header">
    <div class="shadow-sm navbar bg-base-100">
      <div class="navbar-start flex-2">
        <details ref="mobileMenuElement" class="dropdown">
          <summary class="btn btn-lg btn-ghost lg:hidden" @click="toggleMobileNav">
            <font-awesome-icon :icon="['fa', 'bars']" size="lg" v-if="!isOpen" />
            <font-awesome-icon :icon="['fa', 'times']" size="lg" v-if="isOpen" />
          </summary>
          <navigation-menu
            classes="menu menu-compact text-lg dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-100"
            :hover="false"
            :border="false"
            @emitCloseMenu="handleCloseMenu"
          />
        </details>
        <router-link :to="{ name: 'home' }">
          <img class="max-w-[275px] sm:max-w-[400px]" :src="useGetImageUrl('scada-solutions-logo.png')" alt="SCADA Solutions" />
        </router-link>
      </div>

      <div class="flex-auto hidden navbar-center lg:flex">
        <navigation-menu />
      </div>

      <div class="flex-1 ml-5 navbar-end">
        <ContactButton />
      </div>
    </div>
  </header>
</template>

<style scoped>

</style>

