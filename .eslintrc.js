module.exports = {
  env: {
    browser: false, // Since this is not a frontend project, browser environment is not needed
    es2021: true,
    node: true,
    "jest/globals": true, // This will allow ESLint to recognize Jest globals
  },
  extends: [
    "eslint:recommended", // Uses the recommended rules from ESLint
  ],
  parserOptions: {
    ecmaVersion: 12, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of ES6+ import/export syntax
  },
  plugins: [
    "jest", // Uses ESLint Jest plugin for linting test files
  ],
  rules: {
    // Define any specific rules, such as disabling `console` or customizing other rules
  },
  overrides: [
    {
      files: [
        "**/*.test.js", // Or '**/*.test.jsx' if you have JSX in your tests
      ],
      env: {
        jest: true, // Apply Jest environment for test files
      },
    },
  ],
};
