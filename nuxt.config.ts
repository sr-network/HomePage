// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	future: {
		compatibilityVersion: 4
	},
	experimental: {
		componentIslands: true
	},
	css: ['~/assets/css/reset.css'],
	modules: [
		'@nuxt/image',
		'nuxt-payload-analyzer',
		'@nuxt/eslint',
		'@nuxtjs/color-mode',
		'@unocss/nuxt',
		'nuxt-umami',
		'@nuxtjs/robots'
	],
	colorMode: {
		preference: 'system',
		fallback: 'light',
		classPrefix: '',
		classSuffix: '',
		storageKey: 'nuxt-color-mode'
	},
	umami: {
		host: 'https://umami.slirv.vip/',
		id: 'fbe8ac0c-641d-4d0a-a03e-1e98844c9c52',
		autoTrack: true,
		ignoreLocalhost: true,
		domains: ['www.gxres.net']
	}
});
