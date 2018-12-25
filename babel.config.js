// {
//   "presets": ["env", "module:metro-react-native-babel-preset"],
//   "plugins": [
//     ["@babel/plugin-proposal-decorators", { "legacy": true }],
//     "@babel/plugin-syntax-export-namespace-from",
//     "transform-export-extensions"
//   ]
// }
'use strict'

module.exports = {
  presets: ["env", "@babel/preset-env", "module:metro-react-native-babel-preset"],
  plugins: [
    "@babel/plugin-transform-modules-commonjs",
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    "@babel/plugin-syntax-export-namespace-from",
    "transform-export-extensions"
  ],
};
