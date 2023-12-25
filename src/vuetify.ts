import "vuetify/styles";
import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi-svg";

const vuetify = createVuetify({
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
  display: {
    mobileBreakpoint: 'sm',
    thresholds: {
      xs: 0,
      sm: 340,
      md: 540,
      lg: 800,
      xl: 1280,
    },
  },
  theme: {
    themes: {
      light: {
        colors: {
          background: "#ECEFF1",
          surface: "#FFFFFF",
          primary: "#2196F3",
          secondary: "#03A9F4",
          blockquote: "#ECEFF1",
          blockquoteBorder: "#039BE5",
        },
      },
      dark: {
        colors: {
          background: "#212121",
          surface: "#263238",
          primary: "#2196F3",
          secondary: "#03A9F4",
          blockquote: "#455A64",
          blockquoteBorder: "#0277BD",
        },
      },
    },
  },
});

export default vuetify;
