import { globalIgnores } from 'eslint/config'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import vue from 'eslint-plugin-vue'
import pluginOxlint from 'eslint-plugin-oxlint'

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup


export default [
  {
    plugins: {
      vue,
    },
    rules: {
      'vue/multi-word-component-names': ['error', {
        ignores: ['Menu'] // [!code ++]
      }]
    }
  }
];

