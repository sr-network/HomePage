import { defineConfig, presetUno, transformerDirectives } from 'unocss';

export default defineConfig({
	presets: [presetUno()],
	theme: {
		colors: {
			link: "#3273dc"
		}
	},
	transformers: [
		transformerDirectives({
			applyVariable: '--apply'
		})
	]
});
