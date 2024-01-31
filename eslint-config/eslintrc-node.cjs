const commonRule = require("./common-rule.cjs")

module.exports = {
  "env": {
    "node":true,
    "es6": true
  },
  "extends": ["@fastcoder/eslint-config-base"],

  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [],
  "rules": Object.assign({
    
  },commonRule)
}