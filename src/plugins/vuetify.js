// ./plugins/vuetify.js
import { createVuetify } from 'vuetify';
import { mdi } from 'vuetify/iconsets/mdi';
import { en, ko } from 'vuetify/locale';

import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

import 'vuetify/styles'; // Import Vuetify styles
import '@mdi/font/css/materialdesignicons.min.css';
import '@mdi/font/css/materialdesignicons.css';

const vuetify = createVuetify({
  components,
  directives,
  locale: {
    messages: { en, ko },
  },
  icons: {
    defaultSet: 'mdi',
    aliases: {
      cancel: 'mdi-cancel',
      menu: 'mdi-menu',
      sets: {
        mdi,
      },
    },
  },
});

export default vuetify;
