module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['eslint:recommended', 'airbnb', 'airbnb/hooks', 'plugin:react/recommended', 'plugin:jsx-a11y/recommended', 'plugin:prettier/recommended', 'plugin:storybook/recommended'],
  plugins: ['simple-import-sort', 'prettier'],
  rules: {
    'prettier/prettier': ['error', {}, {
      usePrettierrc: true
    }],
    'jsx-a11y/accessible-emoji': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/extensions': 'off',
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/anchor-is-valid': ['error', {
      components: ['Link'],
      specialLink: ['hrefLeft', 'hrefRight'],
      aspects: ['invalidHref', 'preferButton']
    }]
  }
};