<template>
  <div>
    <!-- Page Header -->
    <section class="bg-navy pt-32 pb-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <div class="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6">
            <i class="fa-solid fa-building text-sm"></i>
            <span class="text-sm font-medium">Our Story</span>
          </div>
          <h1 class="text-4xl sm:text-5xl font-bold text-white mb-4">About Atlas Integrated Systems</h1>
          <p class="text-gray-400 max-w-2xl mx-auto text-lg">
            Over 22 years of experience delivering reliable communication infrastructure
            solutions across Southern California.
          </p>
        </div>
      </div>
    </section>

    <!-- Company Overview -->
    <section class="bg-navy-light py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 class="text-3xl font-bold text-white mb-6">Who We Are</h2>
            <p class="text-gray-400 text-lg leading-relaxed mb-6">
              Atlas Integrated Systems, Inc. is a leading provider of communication systems
              design and solutions based in Irvine, California. We specialize in the design,
              installation, and maintenance of reliable communication infrastructures for a
              wide range of clients.
            </p>
            <p class="text-gray-400 leading-relaxed mb-6">
              Our team of experts averages over 15 years of experience in the IT industry
              and attends ongoing workshops and training sessions to stay current on the
              latest technologies and best practices. This commitment to continuous learning
              ensures our clients always receive cutting-edge solutions.
            </p>
            <p class="text-gray-400 leading-relaxed">
              We serve industrial, municipal, government, and military clients throughout
              Southern California, providing everything from initial system design to
              installation, troubleshooting, configuration, and enhanced access security.
            </p>
          </div>
          <div class="flex justify-center">
            <div class="grid grid-cols-2 gap-4 max-w-md w-full">
              <div class="bg-navy rounded-xl border border-white/10 p-6 text-center">
                <i class="fa-solid fa-calendar-check text-accent text-3xl mb-3"></i>
                <p class="text-2xl font-bold text-white">22+</p>
                <p class="text-gray-400 text-sm">Years in Business</p>
              </div>
              <div class="bg-navy rounded-xl border border-white/10 p-6 text-center">
                <i class="fa-solid fa-user-tie text-accent text-3xl mb-3"></i>
                <p class="text-2xl font-bold text-white">15+</p>
                <p class="text-gray-400 text-sm">Avg. Years per Expert</p>
              </div>
              <div class="bg-navy rounded-xl border border-white/10 p-6 text-center">
                <i class="fa-solid fa-map-location-dot text-accent text-3xl mb-3"></i>
                <p class="text-2xl font-bold text-white">SoCal</p>
                <p class="text-gray-400 text-sm">Service Area</p>
              </div>
              <div class="bg-navy rounded-xl border border-white/10 p-6 text-center">
                <i class="fa-solid fa-award text-accent text-3xl mb-3"></i>
                <p class="text-2xl font-bold text-white">IBEW</p>
                <p class="text-gray-400 text-sm">Union Affiliated</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Values -->
    <section class="bg-navy py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">Our Mission & Values</h2>
          <p class="text-gray-400 max-w-2xl mx-auto text-lg">
            Guided by a commitment to excellence, reliability, and client satisfaction.
          </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="value in values" :key="value.title" class="bg-navy-light border border-white/10 rounded-xl p-8">
            <div class="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-5">
              <i :class="value.icon" class="text-accent text-2xl"></i>
            </div>
            <h3 class="text-white font-semibold text-xl mb-3">{{ value.title }}</h3>
            <p class="text-gray-400 leading-relaxed">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Industries Served -->
    <section class="bg-navy-light py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">Industries We Serve</h2>
          <p class="text-gray-400 max-w-2xl mx-auto text-lg">
            From government agencies to private industry, we deliver communication solutions
            to a diverse range of sectors.
          </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="industry in industries" :key="industry.name" class="text-center group">
            <div class="w-20 h-20 bg-navy rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/10 group-hover:border-accent/50 transition-colors">
              <i :class="industry.icon" class="text-accent text-3xl"></i>
            </div>
            <h3 class="text-white font-semibold text-lg mb-2">{{ industry.name }}</h3>
            <p class="text-gray-400 text-sm">{{ industry.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Certifications & Training -->
    <section class="bg-navy py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-navy-light rounded-2xl border border-white/10 p-10 lg:p-16">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 class="text-3xl font-bold text-white mb-6">Continuous Training & Development</h2>
              <p class="text-gray-400 leading-relaxed mb-6">
                Our team members attend ongoing workshops and training sessions to stay
                current on new technologies and industry best practices. This commitment
                ensures we always provide the most effective and up-to-date solutions.
              </p>
              <ul class="space-y-3">
                <li v-for="item in certItems" :key="item" class="flex items-center space-x-3">
                  <i class="fa-solid fa-circle-check text-accent"></i>
                  <span class="text-gray-300">{{ item }}</span>
                </li>
              </ul>
            </div>
            <div class="flex justify-center">
              <div class="bg-navy rounded-xl border border-white/10 p-8 w-full max-w-sm text-center">
                <i class="fa-solid fa-graduation-cap text-accent text-5xl mb-4"></i>
                <h3 class="text-white text-xl font-semibold mb-2">Expert Knowledge</h3>
                <p class="text-gray-400 mb-4">Our professionals stay ahead of the curve</p>
                <div class="bg-accent/10 rounded-lg p-4">
                  <p class="text-accent text-sm font-medium">Ongoing workshops, certifications, and hands-on training</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="bg-gradient-to-r from-accent to-blue py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold text-white mb-4">Work With Us</h2>
        <p class="text-white/80 text-lg mb-8">
          Experience the Atlas difference. Let our team bring decades of expertise to your next project.
        </p>
        <router-link
          to="/contact"
          class="bg-white text-navy px-8 py-3.5 rounded-md font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
        >
          <span>Contact Our Team</span>
          <i class="fa-solid fa-arrow-right text-sm"></i>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
const values = [
  {
    icon: 'fa-solid fa-bullseye',
    title: 'Excellence',
    description: 'We strive for the highest quality in every project, from initial design through final installation and beyond.',
  },
  {
    icon: 'fa-solid fa-handshake',
    title: 'Reliability',
    description: 'Our clients depend on us to deliver on time, on budget, and with the quality they expect.',
  },
  {
    icon: 'fa-solid fa-lightbulb',
    title: 'Innovation',
    description: 'We stay current with the latest technologies to provide cutting-edge solutions for our clients.',
  },
  {
    icon: 'fa-solid fa-shield-halved',
    title: 'Integrity',
    description: 'Honest, transparent communication is at the core of every client relationship we build.',
  },
  {
    icon: 'fa-solid fa-users',
    title: 'Teamwork',
    description: 'Our collaborative approach brings together diverse expertise for comprehensive solutions.',
  },
  {
    icon: 'fa-solid fa-leaf',
    title: 'Sustainability',
    description: 'We design systems with long-term sustainability and energy efficiency in mind.',
  },
]

const industries = [
  {
    icon: 'fa-solid fa-building-columns',
    name: 'Government',
    description: 'Federal, state, and local government facilities and infrastructure.',
  },
  {
    icon: 'fa-solid fa-shield',
    name: 'Military',
    description: 'Defense installations and military communication networks.',
  },
  {
    icon: 'fa-solid fa-city',
    name: 'Municipal',
    description: 'City services, public utilities, and municipal infrastructure.',
  },
  {
    icon: 'fa-solid fa-industry',
    name: 'Industrial',
    description: 'Manufacturing, processing, and industrial facility systems.',
  },
]

const certItems = [
  'Manufacturer-certified technicians',
  'BICSI and industry standard compliance',
  'Regular technology update workshops',
  'IBEW Local 569 affiliated',
  'Safety and quality certifications',
]
</script>
