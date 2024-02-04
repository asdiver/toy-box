const commonRule = require("./common-rule.cjs")

module.exports = {
  "env": {
    "node":true,
    "es6": true
  },
  "extends": ["@fastcoder/eslint-config-ts"],

  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [],
  "rules": Object.assign({
    "@typescript-eslint/no-var-requires": "off"
  },commonRule)
}