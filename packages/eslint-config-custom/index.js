module.exports = {
  plugins: ['@typescript-eslint'],
  extends: [
    'next',
    'turbo',
    'prettier',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'react/jsx-key': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
  },
};
