module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    //强制不使用分号结尾
    semi: ['error', 'always', { 'omitLastInOneLineBlock': true }],
    "space-before-function-paren": ["error", "never"]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
