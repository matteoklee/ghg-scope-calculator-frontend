import { createVuetify } from 'vuetify'
//import * as components from 'vuetify/components'
//import * as directives from 'vuetify/directives'
//import 'vuetify/styles'
import { VDataTable } from 'vuetify/components'
import { VTable } from 'vuetify/components'
import { VBtn } from 'vuetify/components'
import { VSheet } from 'vuetify/components'
import '@mdi/font/css/materialdesignicons.css'
//import '../assets/main.css';


const vuetify = createVuetify({
  //components,
  //directives,
  components: {
    VDataTable,
    VTable,
    VSheet,
    VBtn
  },
  theme: {
    defaultTheme: 'customTheme',
    themes: {
      customTheme: {
        dark: false,
        colors: {
          primary: '#0A0B0D',
          //background: 'hsl(var(--background))',
          //surface: 'hsl(var(--card))',
          //primary: 'hsl(var(--primary))',
          //'on-primary': 'hsl(var(--primary-foreground))',
          //secondary: 'hsl(var(--secondary))',
          //'on-secondary': 'hsl(var(--secondary-foreground))',
          //success: 'hsl(var(--greensign-500))',
          //error: 'hsl(var(--destructive))',
          //'on-error': 'hsl(var(--destructive-foreground))',
        },
        variables: {
          'hover-opacity': 0,
          'focus-opacity': 0,
        }
      },
    },
  },
});

export default vuetify
