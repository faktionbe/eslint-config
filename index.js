module.exports = {
  env: {
    browser: true, // Browser global variables like `window` etc.
    commonjs: true, // CommonJS global variables and CommonJS scoping.Allows require, exports and module.
    es6: true, // Enable all ECMAScript 6 features except for mod
  },
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false,
    ecmaVersion: "es2024",
    sourceType: "module",
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  overrides: [
    {
      files: ["*.js", "*.jsx"],
      excludedFiles: [".eslintrc.cjs", ".eslintrc.js", ".stylelintrc.js"],
      extends: ["./javascript.eslint.js"],
    },
    {
      files: ["*.ts", "*.tsx"],
      extends: ["./typescript.eslint.js"],
    },
  ],
};
