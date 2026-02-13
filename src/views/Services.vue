<template>
  <div>
    <!-- Page Header -->
    <section class="bg-navy pt-32 pb-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <div class="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6">
            <i class="fa-solid fa-gear text-sm"></i>
            <span class="text-sm font-medium">Our Expertise</span>
          </div>
          <h1 class="text-4xl sm:text-5xl font-bold text-white mb-4">Our Services</h1>
          <p class="text-gray-400 max-w-2xl mx-auto text-lg">
            Comprehensive communication system solutions from initial design through
            installation, configuration, and ongoing maintenance.
          </p>
        </div>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="bg-navy-light py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-8">
          <div
            v-for="service in services"
            :key="service.title"
            class="bg-navy border border-white/10 rounded-xl p-8 hover:border-accent/40 transition-all duration-300"
          >
            <div class="flex items-start space-x-5">
              <div class="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <i :class="service.icon" class="text-accent text-2xl"></i>
              </div>
              <div>
                <h3 class="text-white font-semibold text-xl mb-3">{{ service.title }}</h3>
                <p class="text-gray-400 leading-relaxed mb-4">{{ service.description }}</p>
                <ul class="space-y-2">
                  <li v-for="feature in service.features" :key="feature" class="flex items-center space-x-2">
                    <i class="fa-solid fa-check text-accent text-xs"></i>
                    <span class="text-gray-300 text-sm">{{ feature }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="bg-navy py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">Our Process</h2>
          <p class="text-gray-400 max-w-2xl mx-auto text-lg">
            A proven approach to delivering communication infrastructure projects on time and within budget.
          </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(step, idx) in process" :key="step.title" class="text-center relative">
            <div class="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4 relative">
              <span class="text-accent text-xl font-bold">{{ idx + 1 }}</span>
            </div>
            <h3 class="text-white font-semibold text-lg mb-2">{{ step.title }}</h3>
            <p class="text-gray-400 text-sm leading-relaxed">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Brands / Partners -->
    <section class="bg-navy-light py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-2xl font-bold text-white mb-3">Quality Products from Trusted Brands</h2>
          <p class="text-gray-400">
            We supply and install products from the industry's most reliable manufacturers.
          </p>
        </div>
        <div class="flex flex-wrap items-center justify-center gap-10 text-gray-500">
          <div v-for="brand in brands" :key="brand.name" class="flex flex-col items-center space-y-2">
            <i :class="brand.icon" class="text-3xl"></i>
            <span class="text-xs font-medium uppercase tracking-wider">{{ brand.name }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="bg-gradient-to-r from-accent to-blue py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold text-white mb-4">Need a Custom Solution?</h2>
        <p class="text-white/80 text-lg mb-8">
          Our experts will design a communication system tailored to your specific requirements.
        </p>
        <router-link
          to="/contact"
          class="bg-white text-navy px-8 py-3.5 rounded-md font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
        >
          <span>Request a Consultation</span>
          <i class="fa-solid fa-arrow-right text-sm"></i>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
const services = [
  {
    icon: 'fa-solid fa-drafting-compass',
    title: 'Communication Systems Design',
    description: 'Our team of experts, with an average of 15 years of IT industry experience, designs comprehensive communication systems tailored to your unique needs.',
    features: [
      'Detailed site surveys and needs assessments',
      'Custom system architecture and planning',
      'Technology selection and specification',
      'Compliance with industry standards',
    ],
  },
  {
    icon: 'fa-solid fa-cable-car',
    title: 'Fiber Optic Installation',
    description: 'Professional installation of fiber optic communication systems for enterprise, utility, and government applications.',
    features: [
      'Single-mode and multi-mode fiber',
      'Fusion splicing and termination',
      'OTDR testing and certification',
      'Aerial and underground installations',
    ],
  },
  {
    icon: 'fa-solid fa-lock',
    title: 'Access Control Systems',
    description: 'Advanced access control solutions that block or allow entry to buildings, spaces, and locations with precision and reliability.',
    features: [
      'Card reader and biometric systems',
      'Video intercom integration',
      'Visitor management solutions',
      'Remote monitoring and management',
    ],
  },
  {
    icon: 'fa-solid fa-network-wired',
    title: 'Network Infrastructure',
    description: 'Complete network infrastructure solutions including structured cabling, switching, routing, and wireless connectivity.',
    features: [
      'Cat6/Cat6A structured cabling',
      'Enterprise switching and routing',
      'Wireless network deployment',
      'Network security appliances',
    ],
  },
  {
    icon: 'fa-solid fa-screwdriver-wrench',
    title: 'Troubleshooting & Maintenance',
    description: 'Keep your communication systems running at peak performance with our expert troubleshooting and maintenance services.',
    features: [
      'Preventive maintenance programs',
      'Emergency repair services',
      'System performance optimization',
      'Configuration and upgrades',
    ],
  },
  {
    icon: 'fa-solid fa-shield-halved',
    title: 'Security Systems',
    description: 'Comprehensive security solutions integrating surveillance, access control, and alarm systems for complete facility protection.',
    features: [
      'IP camera and CCTV systems',
      'Intrusion detection and alarms',
      'Integrated security platforms',
      'Remote monitoring solutions',
    ],
  },
]

const process = [
  {
    title: 'Consultation',
    description: 'We assess your needs and site requirements through in-depth consultation.',
  },
  {
    title: 'Design',
    description: 'Our engineers create a tailored system design that meets your specifications.',
  },
  {
    title: 'Installation',
    description: 'Expert installation by certified technicians following industry best practices.',
  },
  {
    title: 'Support',
    description: 'Ongoing maintenance and support to ensure long-term system reliability.',
  },
]

const brands = [
  { name: 'Networking', icon: 'fa-solid fa-server' },
  { name: 'Security', icon: 'fa-solid fa-shield-halved' },
  { name: 'Fiber Optics', icon: 'fa-solid fa-wave-square' },
  { name: 'Access Control', icon: 'fa-solid fa-fingerprint' },
  { name: 'Wireless', icon: 'fa-solid fa-wifi' },
]
</script>
