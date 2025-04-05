const createExpoWebpackConfigAsync = require('@expo/webpack-config');

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

  // Fix for deprecated constructor warning
  config.devServer = {
    ...config.devServer,
    open: true,
  };

  // Fix for filter type error
  if (config.module && config.module.rules) {
    config.module.rules.forEach(rule => {
      if (rule.oneOf) {
        rule.oneOf.forEach(oneOfRule => {
          if (oneOfRule.use && Array.isArray(oneOfRule.use)) {
            oneOfRule.use.forEach(loader => {
              if (loader.options && loader.options.presets) {
                // Ensure plugins array exists
                loader.options.plugins = loader.options.plugins || [];
              }
            });
          }
        });
      }
    });
  }

  return config;
};
