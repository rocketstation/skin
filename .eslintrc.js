module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['standard', 'prettier', 'prettier/standard', 'plugin:jest/recommended'],
  parser: 'babel-eslint',
  plugins: ['prettier'],
  rules: {
    'curly': ['error', 'multi-line'],
    'prettier/prettier': 'error',
    'sort-keys': ['error', 'asc', { 'caseSensitive': false, 'natural': true}]
  },
}
