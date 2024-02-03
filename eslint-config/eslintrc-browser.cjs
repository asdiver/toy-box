const commonRule = require("./common-rule.cjs")
module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "ignorePatterns": ["**.cjs"],
  "extends": ["@fastcoder/eslint-config-base","plugin:vue/vue3-recommended"],

  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "vue"
  ],
  "rules": Object.assign({
    // 统一 kebabcase
    'vue/multi-word-component-names': ['error', {
      ignores: ['index'],
    }],
    // 静止静态行内css
    'vue/no-static-inline-styles': ['error', {
      allowBinding: false,
    }]
  },commonRule)
}