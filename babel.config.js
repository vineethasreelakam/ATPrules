module.exports = function(api) {
  presets: ['module:metro-react-native-babel-preset'],
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['@babel/plugin-proposal-export-namespace-from',
      'react-native-reanimated/plugin',
      
    ],
  };
};
