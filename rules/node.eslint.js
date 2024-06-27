module.exports = {
  root: true,
  extends: [require.resolve("../index.js")],
  ignorePatterns: ["node_modules/", "build/", "coverage/"],
  parserOptions: {
    sourceType: "module",
  },
  rules: {
    "max-classes-per-file": "off",
    "no-continue": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "no-plusplus": "off",
    "import/extensions": "off",
    "no-await-in-loop": "off",
  },
};
