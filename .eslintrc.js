const baseRules = {  
  'linebreak-style': 0,
  'no-undef': 'warn',
  'no-console': 'warn'
};

const reactRules = {
  "react/require-default-props": "off",
  "react/jsx-filename-extension": ["error", {
    extensions: [".js", ".jsx"]
  }]
};

const globals = {
  "window": true,
  "console": true,
  "document": true
};

module.exports = {
  "root": true,
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "plugins": [
    "react"
  ],
  "globals": globals,
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "modules": true,
      "jsx": true
    }
  },
  "rules": Object.assign({},
    baseRules,
    reactRules
  )
};
