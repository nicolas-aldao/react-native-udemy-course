module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
  //plugins: ["react-native-reanimated/plugin"], unused config
};

// TODO: Alternative config
// module.exports = function (api) {
//   api.cache(true);
//   return {
//     presets: ['module:metro-react-native-babel-preset'],
//     plugins: ['react-native-reanimated/plugin'],
//   };
// };
