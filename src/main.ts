import { ViteSSG } from "vite-ssg/single-page";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

export const createApp = ViteSSG(App, ({ app }) => {
  app.use(pinia);
});
