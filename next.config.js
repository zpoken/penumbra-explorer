const nextTranslate = require('next-translate');

module.exports = nextTranslate({
  basePath: '/cosmoshub-staging',
  poweredByHeader: false,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
});
