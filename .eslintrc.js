module.exports = {
  "env": {
    "jest": true
  },
  "extends": "airbnb",
  "parser": "babel-eslint",
  "plugins": [
      "react",
      "jsx-a11y",
      "import"
  ],
  "rules": {
    "max-len": ["error", 120],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "semi": ["error", "never"],
    "react/destructuring-assignment": 0,
    "react/jsx-closing-bracket-location": [1, {selfClosing: 'after-props', nonEmpty: 'after-props'}],
    "react/forbid-prop-types": 0,
    "react/require-default-props": 0,
    "react/sort-comp": [1, { order: [
      'static-methods',
      'lifecycle',
      'render',
      'everything-else',
    ]}],
  },
  "root": true
};
