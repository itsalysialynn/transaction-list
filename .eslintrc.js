module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "plugins": [
      "react",
      "jsx-a11y",
      "import"
  ],
  "rules": {
    "max-len": ["error", 120],
    "react/jsx-closing-bracket-location": [1, {selfClosing: 'after-props', nonEmpty: 'after-props'}],
    "react/destructuring-assignment": 0,
    "object-curly-newline": 0,
    "react/sort-comp": [1, { order: [
      'static-methods',
      'lifecycle',
      'render',
      'everything-else',
    ]}],
  },
};
