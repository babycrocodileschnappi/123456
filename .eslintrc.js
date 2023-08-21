module.exports = {
  env: {
    browser: true,
    es2021: true,
    es6: true,
    node: true
  },
  extends: ['airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    Babel: true,
    React: true
  },
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
      }
    }
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    'no-console': ['off'],
    'react/prop-types': ['off'],

    'comma-dangle': 0,
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] }
    ],
    'no-use-before-define': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'react/function-component-definition': 'off',
    'react/no-array-index-key': 'off',
    'react/no-deprecated': 'off'
  }
};
