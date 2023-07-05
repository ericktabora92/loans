module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['@typescript-eslint', 'react', 'jsx-a11y'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'next/core-web-vitals',
  ],
  rules: {
    // "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    // "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    semi: 'off',
    'n/prefer-global/buffer': 'off',
    '@typescript-eslint/semi': ['error', 'always'],
    '@typescript-eslint/quotes': ['error', 'single'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/brace-style': 'off',
    '@typescript-eslint/no-require-imports': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
  },
  // overrides: [
  //   {
  //     files: [
  //       "**/__tests__/*.{j,t}s?(x)",
  //       "**/tests/unit/**/*.spec.{j,t}s?(x)",
  //       "src/**/*.{ts,vue}",
  //     ],
  //     env: {
  //       jest: true,
  //     },
  //   },
  // ],
};
