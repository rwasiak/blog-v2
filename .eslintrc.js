const path = require('path');

module.exports = {
  extends: [
    'airbnb',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
    'plugin:@typescript-eslint/recommended',
  ],
  env: {
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'graphql', 'jest'],
  rules: {
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    'react/prop-types': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'jest/lowercase-name': [
      'error',
      {
        ignore: ['describe', 'test'],
      },
    ],
    'jest/consistent-test-it': ['error'],
    'graphql/template-strings': [
      'error',
      {
        env: 'relay',
        schemaJsonFilepath: path.resolve(
          __dirname,
          './gen/graphql-schema.json',
        ),
        tagName: 'graphql',
      },
    ],
    'react/jsx-props-no-spreading': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.d.ts', '.tsx'],
      },
    },
  },
};
