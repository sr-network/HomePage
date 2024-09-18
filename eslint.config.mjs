import withNuxt from "./.nuxt/eslint.config.mjs"
import unocss from "@unocss/eslint-config/flat"
import prettierConfig from "eslint-plugin-prettier/recommended"

export default withNuxt(unocss, prettierConfig, {
	rules: {
		"vue/require-default-prop": "off",
		"vue/no-multiple-template-root": "off",
		"vue/multi-word-component-names": "off"
	}
})
