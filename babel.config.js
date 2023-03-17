module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            screens: './screens',
            setup: './setup',
            theme: './theme',
            components: './components',
            contexts: './contexts',
            api: './api',
          },
        },
      ],
    ],
  };
};
