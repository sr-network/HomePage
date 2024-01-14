import { ViteSSG } from 'vite-ssg/single-page'
import './style.css'
import App from './App.vue'
import 'mdui'

export const createApp = ViteSSG(App)
