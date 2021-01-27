module.exports = {
  root: true,
  env: {
    node: true,
  },
  // Our test will have cleaner code than our source code...but only for now!
  ignorePatterns: ['src/gilded_rose.js'],
  extends: [
    'eslint-config-airbnb-base',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
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
  ],
};
