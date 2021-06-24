module.exports = {
  root: true,
  env: {
    node: true,
  },
  // Our test will have cleaner code than our source code...but only for now!
  ignorePatterns: ['src/inventory/gilded_rose.js'],
  extends: [
    'eslint-config-airbnb-base',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': 0,
  },
  overrides: [
    {
      files: [
        '**/src/**/*.spec.js',
      ],
      env: {
        jest: true,
      },
    },
    {
      files: [
        '**/src/js/homepage_items.js',
      ],
      env: {
        browser: true,
        node: true,
      },
    },
  ],
};
