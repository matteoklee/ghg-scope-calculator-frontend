import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

/*
import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/lib/components/VDataTable/VDataTable.css'
import 'vuetify/lib/components/VTable/VTable.css'
import 'vuetify/lib/components/VBtn/VBtn.css'
import 'vuetify/lib/components/VRating/VRating.css'
import 'vuetify/lib/components/VSheet/VSheet.css'
import { VDataTable } from 'vuetify/components'
import { VBtn } from 'vuetify/components'
import { VRating } from 'vuetify/components'
import { VTable } from 'vuetify/components'
import { VSheet } from 'vuetify/components'

const vuetify = createVuetify({
  components: {
    VDataTable,
    VBtn,
    VRating,
    VTable,
    VSheet
  },
})
 */

import App from './App.vue';
import router from './router';

import vuetify from '@/plugins/vuetify.js'
//import './assets/vuetify-overrides.css';

//import { createVuetify } from 'vuetify'
//import * as components from 'vuetify/components'
//import * as directives from 'vuetify/directives'
//import 'vuetify/styles'
//import '@mdi/font/css/materialdesignicons.css'

//const vuetify = createVuetify({
  //components,
  //directives,
//});

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.use(vuetify);

app.mount('#app');
