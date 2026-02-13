<template>
  <div>
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center bg-navy overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy"></div>
        <div class="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <div class="absolute top-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          <div class="absolute bottom-20 right-40 w-72 h-72 bg-blue rounded-full blur-3xl"></div>
        </div>
        <!-- Grid pattern overlay -->
        <div class="absolute inset-0 opacity-5" style="background-image: linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px); background-size: 60px 60px;"></div>
      </div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6">
              <i class="fa-solid fa-signal text-sm"></i>
              <span class="text-sm font-medium">22+ Years of Excellence</span>
            </div>
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Communications<br>
              <span class="text-accent">Systems Design</span>
            </h1>
            <p class="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg">
              Expert design, installation, and maintenance of reliable communication
              infrastructures for industrial, municipal, government, and military clients
              throughout Southern California.
            </p>
            <div class="flex flex-wrap gap-4">
              <router-link
                to="/services"
                class="bg-accent hover:bg-accent-light text-white px-8 py-3.5 rounded-md font-semibold transition-colors inline-flex items-center space-x-2"
              >
                <span>Our Services</span>
                <i class="fa-solid fa-arrow-right text-sm"></i>
              </router-link>
              <router-link
                to="/contact"
                class="border border-white/20 hover:border-accent text-white hover:text-accent px-8 py-3.5 rounded-md font-semibold transition-colors"
              >
                Contact Us
              </router-link>
            </div>
          </div>

          <!-- Hero Visual -->
          <div class="hidden lg:flex justify-center">
            <div class="relative">
              <div class="w-80 h-80 bg-gradient-to-br from-accent/20 to-blue/20 rounded-3xl rotate-6 flex items-center justify-center">
                <div class="w-72 h-72 bg-navy-light rounded-2xl -rotate-6 flex items-center justify-center border border-white/10">
                  <div class="text-center">
                    <i class="fa-solid fa-tower-cell text-accent text-6xl mb-4"></i>
                    <p class="text-white font-semibold text-lg">Integrated Solutions</p>
                    <p class="text-gray-400 text-sm">Design &bull; Install &bull; Maintain</p>
                  </div>
                </div>
              </div>
              <!-- Floating badges -->
              <div class="absolute -top-4 -left-4 bg-navy-light border border-white/10 rounded-xl px-4 py-3 shadow-xl">
                <div class="flex items-center space-x-2">
                  <i class="fa-solid fa-shield-halved text-accent"></i>
                  <span class="text-white text-sm font-medium">Secure Systems</span>
                </div>
              </div>
              <div class="absolute -bottom-4 -right-4 bg-navy-light border border-white/10 rounded-xl px-4 py-3 shadow-xl">
                <div class="flex items-center space-x-2">
                  <i class="fa-solid fa-network-wired text-accent"></i>
                  <span class="text-white text-sm font-medium">Fiber Optic</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Trusted By Bar -->
    <section class="bg-navy-light border-y border-white/10 py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-wrap items-center justify-center gap-8 md:gap-16 text-gray-500">
          <span class="text-xs uppercase tracking-widest">Trusted by</span>
          <div class="flex items-center space-x-2">
            <i class="fa-solid fa-building-columns text-lg"></i>
            <span class="text-sm font-medium">Government</span>
          </div>
          <div class="flex items-center space-x-2">
            <i class="fa-solid fa-shield text-lg"></i>
            <span class="text-sm font-medium">Military</span>
          </div>
          <div class="flex items-center space-x-2">
            <i class="fa-solid fa-city text-lg"></i>
            <span class="text-sm font-medium">Municipal</span>
          </div>
          <div class="flex items-center space-x-2">
            <i class="fa-solid fa-industry text-lg"></i>
            <span class="text-sm font-medium">Industrial</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Overview -->
    <section class="bg-navy py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">What We Do</h2>
          <p class="text-gray-400 max-w-2xl mx-auto text-lg">
            We deliver comprehensive communication system solutions from design through
            installation and ongoing maintenance.
          </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="service in services"
            :key="service.title"
            class="group bg-navy-light border border-white/10 rounded-xl p-8 hover:border-accent/50 transition-all duration-300"
          >
            <div class="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
              <i :class="service.icon" class="text-accent text-2xl"></i>
            </div>
            <h3 class="text-white font-semibold text-xl mb-3">{{ service.title }}</h3>
            <p class="text-gray-400 leading-relaxed">{{ service.description }}</p>
          </div>
        </div>

        <div class="text-center mt-12">
          <router-link
            to="/services"
            class="inline-flex items-center space-x-2 text-accent hover:text-accent-light font-semibold transition-colors"
          >
            <span>View All Services</span>
            <i class="fa-solid fa-arrow-right text-sm"></i>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Featured Project -->
    <section class="bg-navy-light py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="inline-flex items-center space-x-2 bg-gold/10 text-gold px-4 py-2 rounded-full mb-6">
              <i class="fa-solid fa-star text-sm"></i>
              <span class="text-sm font-medium">Featured Project</span>
            </div>
            <h2 class="text-3xl sm:text-4xl font-bold text-white mb-6">
              San Diego Pure Water Project
            </h2>
            <p class="text-gray-400 text-lg leading-relaxed mb-6">
              Atlas Integrated Systems is actively involved in the City-wide Pure Water
              Project in San Diego, handling the installation of extensive Fiber Optic
              Communication Systems for public utilities and security networks.
            </p>
            <ul class="space-y-3 mb-8">
              <li v-for="item in projectHighlights" :key="item" class="flex items-center space-x-3">
                <i class="fa-solid fa-circle-check text-accent"></i>
                <span class="text-gray-300">{{ item }}</span>
              </li>
            </ul>
            <router-link
              to="/contact"
              class="bg-accent hover:bg-accent-light text-white px-8 py-3.5 rounded-md font-semibold transition-colors inline-flex items-center space-x-2"
            >
              <span>Discuss Your Project</span>
              <i class="fa-solid fa-arrow-right text-sm"></i>
            </router-link>
          </div>
          <div class="flex justify-center">
            <div class="bg-navy rounded-2xl border border-white/10 p-10 w-full max-w-md">
              <div class="text-center">
                <i class="fa-solid fa-water text-accent text-5xl mb-6"></i>
                <h3 class="text-white text-xl font-semibold mb-2">City of San Diego</h3>
                <p class="text-gray-400 mb-6">Pure Water Program</p>
                <div class="grid grid-cols-2 gap-4">
                  <div class="bg-navy-light rounded-lg p-4">
                    <p class="text-accent text-2xl font-bold">City-wide</p>
                    <p class="text-gray-400 text-sm">Coverage</p>
                  </div>
                  <div class="bg-navy-light rounded-lg p-4">
                    <p class="text-accent text-2xl font-bold">Fiber</p>
                    <p class="text-gray-400 text-sm">Optic Network</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="bg-navy py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">Why Choose Atlas</h2>
          <p class="text-gray-400 max-w-2xl mx-auto text-lg">
            With over two decades of experience, our team delivers the expertise and
            reliability your project demands.
          </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="text-center"
          >
            <div class="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <i :class="stat.icon" class="text-accent text-2xl"></i>
            </div>
            <p class="text-3xl font-bold text-white mb-1">{{ stat.value }}</p>
            <p class="text-gray-400">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-gradient-to-r from-accent to-blue py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">
          Ready to Start Your Project?
        </h2>
        <p class="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
          Contact our team to discuss your communication infrastructure needs. We serve
          industrial, municipal, government, and military clients throughout Southern California.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <router-link
            to="/contact"
            class="bg-white text-navy px-8 py-3.5 rounded-md font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
          >
            <span>Get a Free Quote</span>
            <i class="fa-solid fa-arrow-right text-sm"></i>
          </router-link>
          <a
            href="tel:6194540929"
            class="border border-white/30 text-white hover:bg-white/10 px-8 py-3.5 rounded-md font-semibold transition-colors inline-flex items-center space-x-2"
          >
            <i class="fa-solid fa-phone"></i>
            <span>(619) 454-0929</span>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const services = [
  {
    icon: 'fa-solid fa-tower-cell',
    title: 'Communication Systems Design',
    description: 'Expert design of comprehensive communication systems with professionals averaging 15+ years of IT industry experience.',
  },
  {
    icon: 'fa-solid fa-cable-car',
    title: 'Fiber Optic Installation',
    description: 'Installation of high-performance fiber optic communication systems for utilities, security networks, and enterprise clients.',
  },
  {
    icon: 'fa-solid fa-lock',
    title: 'Access Control Systems',
    description: 'Advanced access control solutions to manage and secure entry to buildings, restricted spaces, and critical locations.',
  },
  {
    icon: 'fa-solid fa-network-wired',
    title: 'Network Infrastructure',
    description: 'End-to-end network infrastructure solutions including structured cabling, switches, routers, and wireless systems.',
  },
  {
    icon: 'fa-solid fa-screwdriver-wrench',
    title: 'System Maintenance',
    description: 'Ongoing maintenance, troubleshooting, and configuration services to keep your communication systems operating at peak performance.',
  },
  {
    icon: 'fa-solid fa-boxes-stacked',
    title: 'Product Supply',
    description: 'Direct supply of quality communication system products from well-known, trusted brands in the industry.',
  },
]

const projectHighlights = [
  'Fiber optic communication systems',
  'Public utility network integration',
  'Security network infrastructure',
  'City-wide deployment scope',
]

const stats = [
  { icon: 'fa-solid fa-calendar-check', value: '22+', label: 'Years Experience' },
  { icon: 'fa-solid fa-users', value: '15+', label: 'Avg. Yrs per Expert' },
  { icon: 'fa-solid fa-building', value: '500+', label: 'Projects Completed' },
  { icon: 'fa-solid fa-handshake', value: '100%', label: 'Client Commitment' },
]
</script>
