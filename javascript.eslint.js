module.exports = {
  parser: "@babel/eslint-parser",
  extends: ["airbnb", "prettier"],
  plugins: ["simple-import-sort"],
  rules: {
    curly: "error",
    "id-length": [
      2,
      { exceptions: ["i", "j", "_", "t", "a", "b"], properties: "never" },
    ],
    "jsx-a11y/alt-text": "error",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "error",
    "no-console": "off",
    "no-param-reassign": [
      "error",
      {
        props: true,
        ignorePropertyModificationsFor: ["state"],
      },
    ],
    "no-unused-vars": "error",
    "prefer-destructuring": "off",
    "prefer-promise-reject-errors": "error",
    "import/order": "off",
    "import/prefer-default-export": "off",
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          // Packages `react` related packages come first.
          ["^react", "^@?\\w"],
          // Internal packages.
          ["^(@|components)(/.*|$)"],
          // Side effect imports.
          ["^\\u0000"],
          // Parent imports. Put `..` last.
          ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
          // Other relative imports. Put same-folder imports and `.` last.
          ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
          // Style imports.
          ["^.+\\.?(scss|css)$"],
        ],
      },
    ],
    "simple-import-sort/exports": "error",
  },
};
