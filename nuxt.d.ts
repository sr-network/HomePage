import { NuxtApp } from '#app'

declare module '#app' {
  interface NuxtApp {
    $userLanguage: string;
  }
}