const path = require('path');

module.exports = {
  webpack: (config, { isServer }) => {
    // Ensuring that manifest.json is included in the build
    config.module.rules.push({
      test: /manifest\.json$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        publicPath: '/_next/static/',
        outputPath: `${isServer ? "../" : ""}static/`,
      },
    });

    return config;
  },
  async headers() {
    return [
      {
        source: '/manifest.json',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/json',
          },
        ],
      },
    ];
  },
  // Other existing configurations (do not change)
};
