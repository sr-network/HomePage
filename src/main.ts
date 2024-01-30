import { ViteSSG } from 'vite-ssg/single-page'
import "./css/style.scss";
import App from "./App.vue";
import "virtual:uno.css";

export const createApp = ViteSSG(App)
