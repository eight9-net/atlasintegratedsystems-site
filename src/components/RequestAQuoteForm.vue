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
    form.value.subject = 'Quote Request from ' + form.value.company + ' (' + form.value.name + ')';
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
    <input type="hidden" name="is_valid" v-model="form.is_valid"/>
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
            required
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

    <div class="flex gap-4">
      <fieldset class="fieldset flex-3">
        <textarea id="contact_message" class="w-full textarea" placeholder="Questions?" v-model="form.message" rows="5" required></textarea>
      </fieldset>
    </div>



    <div class="flex gap-4">
      <fieldset class="fieldset flex-3">
        <legend class="text-white fieldset-legend">Needs (click all that apply)</legend>
        <label class="text-white label">
          <input type="checkbox" class="checkbox checkbox-info" v-model="form.needs" value="SCADA" />
          SCADA
        </label>
        <label class="text-white label">
          <input type="checkbox" class="checkbox checkbox-info" v-model="form.needs" value="Communications" />
          Communications
        </label>
        <label class="text-white label">
          <input type="checkbox" class="checkbox checkbox-info" v-model="form.needs" value="Design / Engineering" />
          Design / Engineering
        </label>
        <label class="text-white label">
          <input type="checkbox" class="checkbox checkbox-info" v-model="form.needs" value="Integration" />
          Integration
        </label>
        <label class="text-white label">
          <input type="checkbox" class="checkbox checkbox-info" v-model="form.needs" value="Service" />
          Service
        </label>
      </fieldset>

      <fieldset class="fieldset flex-3">
        <legend class="text-white fieldset-legend">Type(s) of Communications (click all that apply)</legend>
        <label class="text-white label">
          <input type="checkbox" class="checkbox checkbox-info" v-model="form.communications" value="Radios" />
          Radios
        </label>
        <label class="text-white label">
          <input type="checkbox" class="checkbox checkbox-info" v-model="form.communications" value="Fiber Optics" />
          Fiber Optics
        </label>
        <label class="text-white label">
          <input type="checkbox" class="checkbox checkbox-info" v-model="form.communications" value="Cable Assemblies" />
          Cable Assemblies
        </label>
        <label class="text-white label">
          <input type="checkbox" class="checkbox checkbox-info" v-model="form.communications" value="Other" />
          Other
        </label>
        <label class="w-full input validator" v-if="form.communications.includes('Other')">
          <input
            type="text"
            name="other_communications"
            placeholder="Other Communications"
            minlength="1"
            maxlength="50"
            v-model="form.other_communications"
          />
        </label>
      </fieldset>

      <fieldset class="fieldset flex-3">
        <select name="timeframe" class="select" v-model="form.timeframe" placeholder="Timeframe">
          <option disabled selected value="">Timeframe</option>
          <option value="Immediate">Immediate</option>
          <option value="1-3 months">1-3 months</option>
          <option value="3-6 months">3-6 months</option>
          <option value="Within a year">Within a year</option>
          <option value="Over a one year + period">Over a one year + period</option>
        </select>
      </fieldset>
    </div>

    <button type="submit" class="my-4 btn btn-primary" :class="{disabled: isDisabledRef}" :disabled="isDisabledRef">Request Quote</button>
  </form>

  <div v-if="messageSentRef" class="p-4 my-4 text-green-800 bg-green-200 border border-green-400 rounded">
    <p>Thank you for contacting us! We have received your message and will get back to you shortly.</p>
  </div>
  <div v-if="messageErrorRef" class="p-4 my-4 text-red-800 bg-red-200 border border-red-400 rounded">
    <p>There was an error sending your message. Please try again or email us directly at <a :href="`mailto:${$contactEmail}?subject=Request%20A%20Quote`">{{ $contactEmail }}</a>.</p>
  </div>

</template>

<style scoped>
  .validator-hint {
    font-size: 0.75rem;
  }
</style>