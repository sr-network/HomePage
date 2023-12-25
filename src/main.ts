import { ViteSSG } from "vite-ssg/single-page";
import "./style.scss";
import App from "./app.vue";
import vuetify from "./vuetify";

export const createApp = ViteSSG(App, ({ app }) => {
  app.use(vuetify);
});
