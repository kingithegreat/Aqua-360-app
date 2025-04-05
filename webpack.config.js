const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const path = require('path');

module.exports = async function(env, argv) {
  const config = await createExpoWebpackConfigAsync(
    {
      ...env,
      babel: {
        dangerouslyAddModulePathsToTranspile: [
          'react-native-reanimated',
        ],
      },
    },
    argv
  );

  // Simplified fix for deprecated constructor warning
  if (config.devServer) {
    config.devServer = {
      ...config.devServer,
      open: true,
    };
  }

  // DO NOT MODIFY config.module.rules to avoid filter type errors
  
  return config;
};
