module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      // modules: true,
      // experimentalObjectRestSpread: true,
    },
  },
  plugins: ['react', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    'prettier',
  ],
  rules: {
    // semi: 1,
    // quotes: [2, "single"],
    'react/prop-types': 1,
    // // "react/react-in-jsx-scope": 0,
    'react/forbid-prop-types': 0,
    'react/require-default-props': 0,
    'object-curly-newline': 0,
    'linebreak-style': 0,
    'react/jsx-filename-extension': 0,
    'import/prefer-default-export': 0,
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};