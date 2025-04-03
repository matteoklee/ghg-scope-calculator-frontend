import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import CookieConsentVue from '@/plugins/CookieConsentVue.js';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(CookieConsentVue, {
  //mode: 'opt-in',
  //autoShow: false,
  hideFooter: true,
  disablePageInteraction: true,
  categories: {
    necessary: {
      enabled: true, // this category is enabled by default
      readOnly: true, // this category cannot be disabled
    },
    analytics: {},
  },
  guiOptions: {
    consentModal: {
      layout: 'box inline', //cloud inline
      position: 'bottom right',
      flipButtons: false,
      equalWeightButtons: true,
    },
    preferencesModal: {
      layout: 'box', //bar wide
      // position: 'left right',
      flipButtons: true,
      equalWeightButtons: false,
    },
  },
  onFirstConsent: ({ cookie }) => {
    console.log('onFirstConsent');
    console.log(cookie);
  },
  onConsent: ({ cookie }) => {
    console.log('onConsent');
    console.log(cookie);
  },
  onChange: ({ cookie, changedCategories, changedServices }) => {
    console.log('onChange');
    console.log(cookie);
    console.log(changedCategories);
    console.log(changedServices);
  },
  language: {
    default: 'de',
    translations: {
      de: {
        consentModal: {
          title: 'Wir verwenden Cookies.',
          description: 'Cookie modal description',
          acceptAllBtn: 'Alle akzeptieren',
          acceptNecessaryBtn: 'Alle ablehnen',
          showPreferencesBtn: 'Individuelle Einstellungen',
        },
        preferencesModal: {
          title: 'Cookie-Einstellungen verwalten',
          acceptAllBtn: 'Alle akzeptieren',
          acceptNecessaryBtn: 'Alle ablehnen',
          savePreferencesBtn: 'Aktuelle Auswahl akzeptieren',
          closeIconLabel: 'Schließen',
          sections: [
            {
              title: 'Somebody said ... cookies?',
              description: 'I want one!',
            },
            {
              title: 'Strictly Necessary cookies',
              description:
                'These cookies are essential for the proper functioning of the website and cannot be disabled.',

              //this field will generate a toggle linked to the 'necessary' category
              linkedCategory: 'necessary',
            },
            {
              title: 'Performance and Analytics',
              description:
                'These cookies collect information about how you use our website. All of the data is anonymized and cannot be used to identify you.',
              linkedCategory: 'analytics',
            },
            {
              title: 'More information',
              description:
                'For any queries in relation to my policy on cookies and your choices, please <a href="#contact-page">contact us</a>',
            },
          ],
        },
      },
    },
  },
});

app.mount('#app');
