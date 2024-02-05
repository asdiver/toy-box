const antfu = require('@antfu/eslint-config').default

module.exports = antfu({
  vue: false,
  ignores: ['./render/*'],
})
