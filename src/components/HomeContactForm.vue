<script setup>
  import { ref } from 'vue';
  import { useContactStore } from '../stores/contact';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

  const isDisabledRef = ref(false);
  const messageSentRef = ref(false);
  const messageErrorRef = ref(false);
  const contactStore = useContactStore();
  const form = ref(contactStore.form);

  function sendContactForm(data) {
    if (isDisabledRef.value) {
      console.error('Form is disabled...');
      // return;
    }
    messageErrorRef.value = false;
    isDisabledRef.value = true;
    form.value.subject = form.value.subject + ' ' + form.value.company + ' (' + form.value.name + ')';
    contactStore.doSendContactForm(form.value).then((success) => {
      messageSentRef.value = success;
    }).catch(() => {
      isDisabledRef.value = false;
      messageErrorRef.value = true;
    });
  }
</script>

<template>
  <form @submit.prevent="sendContactForm" class="p-4 fieldset rounded-box text-base-content" novalidate>
    <input type="text" name="honeypot" class="hidden" v-model="form.honeypot" />
    <div class="flex gap-4">
      <fieldset class="fieldset flex-3">
        <label class="w-full input validator">
          <input
            type="text"
            required
            name="name"
            placeholder="Contact Name"
            minlength="1"
            maxlength="50"
            v-model="form.name"
          />
        </label>
      </fieldset>

      <fieldset class="fieldset flex-3">
        <label class="w-full input validator">
          <input
            type="text"
            name="title"
            placeholder="Title"
            minlength="1"
            maxlength="50"
            v-model="form.title"
          />
        </label>
      </fieldset>
    </div>

    <div class="flex gap-4">
      <fieldset class="fieldset flex-3">
        <label class="w-full input validator">
          <FontAwesomeIcon :icon="['fas', 'phone']" class="icon" />
          <input
            type="tel"
            class="tabular-nums"
            required
            placeholder="Phone"
            minlength="10"
            maxlength="15"
            v-model="form.phone"
          />
        </label>
        <p class="hidden validator-hint">Must be at least 10 digits</p>
      </fieldset>

      <fieldset class="fieldset flex-3">
        <label class="w-full input validator">
          <FontAwesomeIcon :icon="['fas', 'envelope']" class="icon" />
          <input type="email" placeholder="Email" required v-model="form.email" />
        </label>
        <div class="hidden validator-hint">Enter valid email address</div>
      </fieldset>
    </div>

    <div class="flex gap-4">
      <fieldset class="fieldset flex-3">
        <label class="w-full input validator">
          <input
            type="text"
            required
            name="subject"
            placeholder="Subject"
            minlength="1"
            maxlength="150"
            v-model="form.subject"
          />
        </label>
        <div class="hidden validator-hint">Subject is required</div>
      </fieldset>
    </div>

    <div class="flex gap-4">
      <fieldset class="fieldset flex-3">
        <label class="w-full input validator">
          <input
            type="text"
            required
            name="property_type"
            placeholder="Property Type"
            minlength="1"
            maxlength="100"
            v-model="form.property_type"
          />
        </label>
        <div class="hidden validator-hint">Property Type is required</div>
      </fieldset>
      <fieldset class="fieldset flex-3">
        <label class="w-full input validator">
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            minlength="1"
            maxlength="150"
            v-model="form.company"
          />
        </label>
      </fieldset>
    </div>

    <div class="hidden"><input type="text" name="is_valid" v-model="form.is_valid"/></div>


    <div class="flex gap-4">
      <fieldset class="fieldset flex-3">
        <textarea id="contact_message" class="w-full textarea" placeholder="Message" v-model="form.message" rows="5" required></textarea>
        <div class="hidden validator-hint">Message is required</div>
      </fieldset>
    </div>

    <button type="submit" class="my-4 btn btn-primary" :class="{disabled: isDisabledRef}" :disabled="isDisabledRef">Send Message</button>
  </form>

  <div v-if="messageSentRef" class="p-4 my-4 text-green-800 bg-green-200 border border-green-400 rounded">
    <p>Thank you for contacting us! We have received your message and will get back to you shortly.</p>
  </div>
  <div v-if="messageErrorRef" class="p-4 my-4 text-red-800 bg-red-200 border border-red-400 rounded">
    <p>There was an error sending your message. Please try again or email us directly.</p>
  </div>

</template>

<style scoped>
  .validator-hint {
    font-size: 0.75rem;
  }
</style>