module.exports = {
  root: true,
  extends: [
    require.resolve("../index.js"),
    "airbnb/hooks",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
  ],
  ignorePatterns: ["node_modules/", "build/", "coverage/"],
  parserOptions: {
    ecmaVersion: 6,
  },
  rules: {
    "react/function-component-definition": [
      2,
      { namedComponents: "arrow-function" },
    ],
    "react/jsx-props-no-spreading": "off",
    "jsx-a11y/control-has-associated-label": "off",
    "react/prop-types": "off",
    "react/require-default-props": "off",
    "react-hooks/exhaustive-deps": "error",
    "react/button-has-type": "error",
    "react/jsx-filename-extension": "off",
    "react/jsx-no-constructed-context-values": "error",
    "react/jsx-uses-vars": "error",
    "react/react-in-jsx-scope": "off",
    "jsx-a11y/heading-has-content": "off",
    "react/no-unstable-nested-components": ["error", { allowAsProps: true }],
    "@typescript-eslint/strict-boolean-expressions": "off",
    curly: "off",
  },
  settings: {
    react: {
      createClass: "createReactClass",
      // Regex for Component Factory to use,
      // default to 'createReactClass'
      pragma: "React",
      // Pragma to use, default to 'React'
      version: "detect",
      // React version. 'detect' automatically picks the version you have installed.
      // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
      // default to latest and warns if missing
      // It will default to 'detect' in the future
    },
    propWrapperFunctions: [
      // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
      "forbidExtraProps",
      {
        property: "freeze",
        object: "Object",
      },
      {
        property: "myFavoriteWrapper",
      },
    ],
    linkComponents: [
      // components used as alternatives to <a> for linking, eg. <Link to={ url } />
      "Hyperlink",
      {
        name: "Link",
        linkAttribute: "to",
      },
    ],
  },
};
