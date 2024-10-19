export default defineNuxtPlugin((nuxtApp) => {
	const userLanguage = navigator.language || navigator.languages[0];
	nuxtApp.provide('userLanguage', userLanguage);
});
