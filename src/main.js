import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './style.scss';
import App from './App.vue';
import router from './router';

/* Font Awesome */
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faBars,
  faPhone,
  faEnvelope,
  faTimes,
  faCircle,
  faChevronRight,
  faMapLocationDot,
} from '@fortawesome/free-solid-svg-icons';
library.add(
  faBars,
  faPhone,
  faEnvelope,
  faTimes,
  faCircle,
  faChevronRight,
  faMapLocationDot,
);
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
library.add(
  faLinkedin
);

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);


// Global Variables
app.config.globalProperties.$companyName = 'Atlas Integrated Systems, Inc.';
app.config.globalProperties.$contactEmail = 'info@atlasintegratedsystems.com';
app.config.globalProperties.$contactPhone = '+19495099605';
app.config.globalProperties.$companyAddress = '6789 Quail Hill Parkway, Suite #405, Irvine, CA 92603';
app.config.globalProperties.$companyLicense = '777306';
app.config.globalProperties.$companyACO = '6678';


// Global Components
import ContentLeftSection from './components/ContentLeftSection.vue';
import ContentRightSection from './components/ContentRightSection.vue';
import ContentFullSection from './components/ContentFullSection.vue';
import ContactButton from './components/ContactButton.vue';
app.component('ContentLeftSection', ContentLeftSection);
app.component('ContentRightSection', ContentRightSection);
app.component('ContentFullSection', ContentFullSection);
app.component('ContactButton', ContactButton);

app.use(router);
app.component('FontAwesomeIcon', FontAwesomeIcon);
app.mount('#app');
