import { defineStore } from 'pinia';
import https from '../https.js';

export const useContactStore = defineStore('contact', {
  state: () => ({
    loading: false,
    form: {
      honeypot: '',
      name: '',
      phone: '',
      email: '',
      message: '',
      subject: '',
      property_type: '',
      company: '',
      is_valid: '',
      timeframe: '',
      needs: [],
      communications: [],
      other_communications: '',
    },
  }),

  actions: {
    async doSendContactForm(request) {
      this.loading = true;

      try {
        const response = await https.sendContactForm(request);
        if (response.status >= 200 && response.status < 300 && response.data?.MessageId) {
          return true;
        } else {
          return false;
        }
      } catch (err) {
        this.error = err.message || 'An error occurred';
        throw err;
      } finally {
        this.loading = false;
      }
    },

    resetState() {
      this.loading = false;
    },
  },
});
