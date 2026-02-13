<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm border-b border-white/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <router-link to="/" class="flex items-center space-x-3">
          <div class="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
            <span class="text-white font-bold text-xl">A</span>
          </div>
          <div class="hidden sm:block">
            <span class="text-white font-bold text-lg tracking-wide">ATLAS</span>
            <span class="text-accent text-sm block -mt-1 tracking-widest">INTEGRATED SYSTEMS</span>
          </div>
        </router-link>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <router-link
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="text-gray-300 hover:text-accent transition-colors duration-200 text-sm font-medium uppercase tracking-wider"
            active-class="!text-accent"
          >
            {{ link.label }}
          </router-link>
          <router-link
            to="/contact"
            class="bg-accent hover:bg-accent-light text-white px-5 py-2.5 rounded-md text-sm font-semibold transition-colors duration-200 uppercase tracking-wider"
          >
            Get a Quote
          </router-link>
        </div>

        <!-- Mobile menu button -->
        <button @click="mobileOpen = !mobileOpen" class="md:hidden text-gray-300 hover:text-white p-2">
          <i :class="mobileOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'" class="text-xl"></i>
        </button>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="mobileOpen" class="md:hidden bg-navy-light border-t border-white/10">
        <div class="px-4 py-4 space-y-2">
          <router-link
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="block text-gray-300 hover:text-accent py-2 text-sm font-medium uppercase tracking-wider"
            active-class="!text-accent"
            @click="mobileOpen = false"
          >
            {{ link.label }}
          </router-link>
          <router-link
            to="/contact"
            class="block bg-accent hover:bg-accent-light text-white px-4 py-2.5 rounded-md text-sm font-semibold text-center mt-3 uppercase tracking-wider"
            @click="mobileOpen = false"
          >
            Get a Quote
          </router-link>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const mobileOpen = ref(false)

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
]
</script>
