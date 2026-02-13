<template>
  <div>
    <!-- Page Header -->
    <section class="bg-navy pt-32 pb-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <div class="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6">
            <i class="fa-solid fa-headset text-sm"></i>
            <span class="text-sm font-medium">Get in Touch</span>
          </div>
          <h1 class="text-4xl sm:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p class="text-gray-400 max-w-2xl mx-auto text-lg">
            Have a question or ready to start your project? Reach out to our team today.
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Content -->
    <section class="bg-navy-light py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-5 gap-12">
          <!-- Contact Info -->
          <div class="lg:col-span-2">
            <h2 class="text-2xl font-bold text-white mb-6">Get in Touch</h2>
            <p class="text-gray-400 mb-8 leading-relaxed">
              Whether you need a new communication system designed, equipment installed,
              or ongoing maintenance support, we're here to help.
            </p>

            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i class="fa-solid fa-location-dot text-accent"></i>
                </div>
                <div>
                  <h3 class="text-white font-semibold mb-1">Office Address</h3>
                  <p class="text-gray-400 text-sm">85 Highland View<br>Irvine, CA 92603</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i class="fa-solid fa-phone text-accent"></i>
                </div>
                <div>
                  <h3 class="text-white font-semibold mb-1">Phone</h3>
                  <a href="tel:6194540929" class="text-gray-400 text-sm hover:text-accent transition-colors">(619) 454-0929</a>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i class="fa-solid fa-envelope text-accent"></i>
                </div>
                <div>
                  <h3 class="text-white font-semibold mb-1">Email</h3>
                  <a href="mailto:info@atlasintegratedsystems.com" class="text-gray-400 text-sm hover:text-accent transition-colors">info@atlasintegratedsystems.com</a>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i class="fa-solid fa-clock text-accent"></i>
                </div>
                <div>
                  <h3 class="text-white font-semibold mb-1">Business Hours</h3>
                  <p class="text-gray-400 text-sm">Monday - Friday: 8:00 AM - 5:00 PM<br>Saturday & Sunday: Closed</p>
                </div>
              </div>
            </div>

            <!-- Service Area -->
            <div class="mt-10 p-6 bg-navy rounded-xl border border-white/10">
              <h3 class="text-white font-semibold mb-3 flex items-center space-x-2">
                <i class="fa-solid fa-map text-accent"></i>
                <span>Service Area</span>
              </h3>
              <p class="text-gray-400 text-sm leading-relaxed">
                We serve clients throughout Southern California, including San Diego,
                Orange County, Los Angeles, and the Inland Empire.
              </p>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="lg:col-span-3">
            <div class="bg-navy rounded-xl border border-white/10 p-8">
              <h2 class="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
              <form @submit.prevent="handleSubmit" class="space-y-5">
                <div class="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label class="block text-sm font-medium text-gray-300 mb-2">First Name *</label>
                    <input
                      v-model="form.firstName"
                      type="text"
                      required
                      class="w-full bg-navy-light border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                      placeholder="John"
                    >
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-300 mb-2">Last Name *</label>
                    <input
                      v-model="form.lastName"
                      type="text"
                      required
                      class="w-full bg-navy-light border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                      placeholder="Doe"
                    >
                  </div>
                </div>

                <div class="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label class="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                    <input
                      v-model="form.email"
                      type="email"
                      required
                      class="w-full bg-navy-light border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                      placeholder="john@example.com"
                    >
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                    <input
                      v-model="form.phone"
                      type="tel"
                      class="w-full bg-navy-light border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                      placeholder="(619) 000-0000"
                    >
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-300 mb-2">Service Interested In</label>
                  <select
                    v-model="form.service"
                    class="w-full bg-navy-light border border-white/10 rounded-lg px-4 py-3 text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                  >
                    <option value="" class="bg-navy-light">Select a service...</option>
                    <option value="comm-design" class="bg-navy-light">Communication Systems Design</option>
                    <option value="fiber" class="bg-navy-light">Fiber Optic Installation</option>
                    <option value="access" class="bg-navy-light">Access Control Systems</option>
                    <option value="network" class="bg-navy-light">Network Infrastructure</option>
                    <option value="maintenance" class="bg-navy-light">Maintenance & Support</option>
                    <option value="security" class="bg-navy-light">Security Systems</option>
                    <option value="other" class="bg-navy-light">Other</option>
                  </select>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-300 mb-2">Message *</label>
                  <textarea
                    v-model="form.message"
                    required
                    rows="5"
                    class="w-full bg-navy-light border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  class="w-full bg-accent hover:bg-accent-light text-white py-3.5 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <i class="fa-solid fa-paper-plane text-sm"></i>
                </button>
              </form>

              <!-- Success message -->
              <div v-if="submitted" class="mt-6 bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-center">
                <i class="fa-solid fa-circle-check text-green-400 text-xl mb-2"></i>
                <p class="text-green-400 font-medium">Thank you! Your message has been sent.</p>
                <p class="text-green-400/70 text-sm">We'll get back to you within 24 hours.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const submitted = ref(false)

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  service: '',
  message: '',
})

function handleSubmit() {
  submitted.value = true
  // Reset form
  Object.assign(form, {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
}
</script>
