module.exports = {
    "env": {
      "browser": true,
      "commonjs": true,
      "es6": true,
      "node": true,
      "jquery":true,
      "mocha":true
    },
    "extends": ["eslint:recommended"],
    "parserOptions": {
       "ecmaFeatures": {
         "experimentalObjectRestSpread": true,
         "jsx": true
       },
       "sourceType": "module"
     },
    "rules": {
      "indent": [2, "tab"],
        "linebreak-style": [ "error", "windows" ],
        "quotes": [ "error", "single" ],
        "no-console": "off",
        "semi": [ "error", "always" ]
    }
};
