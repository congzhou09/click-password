module.exports = {
  root: true,
  extends: ['google', 'plugin:prettier/recommended'],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  parser: '@babel/eslint-parser',
  rules: {
    'require-jsdoc': 'off',
    'comma-dangle': 'off',
    'no-unused-vars': 'off'
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      extends: ['plugin:@typescript-eslint/recommended'],
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'off'
      }
    }
  ]
};
