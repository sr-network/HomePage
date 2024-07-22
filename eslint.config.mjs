// @ts-nocheck
import withNuxt from "./.nuxt/eslint.config.mjs";
import unocss from "@unocss/eslint-config/flat";

export default withNuxt(unocss, {
  rules: {
    "vue/multi-word-component-names": "off",
    "vue/first-attribute-linebreak": "off",
  },
});
