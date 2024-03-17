import { ViteSSG } from "vite-ssg/single-page";
import "./css/style.scss";
import App from "./App.vue";
import "virtual:uno.css";
import { createHead } from "@unhead/vue";

const head = createHead();

export const createApp = ViteSSG(App, ({ app }) => {
    app.use(head)
});
