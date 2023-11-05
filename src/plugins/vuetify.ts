import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@/assets/scss/style.scss";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    theme: {
      themes: {
        light: {
          colors: {
            background: "#FAFAFA",
            surface: "#FFFFFF",
            primary: "#2196F3",
            secondary: "#03A9F4",
            blockquote: "#EEEEEE",
            blockquoteBorder: "#E0E0E0",
            profileCard: "#E3F2FD",
          },
        },
        dark: {
          colors: {
            background: "#000000",
            surface: "#212121",
            primary: "#2196F3",
            secondary: "#03A9F4",
            blockquote: "#616161",
            blockquoteBorder: "#424242",
            profileCard: "#546E7A",
          },
        },
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
