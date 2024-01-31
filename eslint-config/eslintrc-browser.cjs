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
    
  },commonRule)
}