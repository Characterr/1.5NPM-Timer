module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-use-before-define': 0,
    'default-case': 1,
    // semi: 0,
    // "off" або 0 - вимкнути правило
    // "warn"або 1-  попередження (не впливає на код виходу)
    // "error"або 2- помилка (код виходу 1 при спрацьовуванні)
  },
  ignorePatterns: [
    // '/*.json',
    // '/*.lock',
    // '/*.md',
    'src',
    // 'public/assets/scripts/bundle.js',
  ],
};
