module.exports = function (api) {
  api.cache(true);

  return {
    presets: [
      'babel-preset-expo',
      '@babel/preset-react'
    ],
    plugins: [
      '@babel/plugin-syntax-jsx',
      '@babel/plugin-transform-runtime',
      ['react-native-reanimated/plugin', {
        relativeSourceLocation: true,
      }]
    ]
  };
};
