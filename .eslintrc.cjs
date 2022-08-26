module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'plugin:react/jsx-runtime', 'standard'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'prettier/prettier': 'off',
    semi: [2, 'always'],
    'comma-dangle': 'always',
    'no-unused-vars': 'warning',
    'space-before-function-parentheses': 'always',
    'prefer-arrow-callback': 'on',
  },
};
