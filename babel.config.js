'use strict';

module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    "@babel/plugin-transform-modules-commonjs",
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    "@babel/plugin-syntax-export-namespace-from",
    "transform-export-extensions"
  ],
};
