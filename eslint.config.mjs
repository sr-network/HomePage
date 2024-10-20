import withNuxt from './.nuxt/eslint.config.mjs';
import unocss from '@unocss/eslint-config/flat';
import prettierConfig from 'eslint-plugin-prettier/recommended';

export default withNuxt(unocss, prettierConfig, {
	rules: {
		'vue/multi-word-component-names': 'off',
		'no-undef': 'off'
	}
});
