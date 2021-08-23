const withImages = require('next-images');

module.exports = {
  async rewrites() {
    console.log('node env', process.env.NODE_ENV);

    if (process.env.NODE_ENV === 'production') {
      return [
        {
          source: '/api/:path*',
          // destination: 'http://localhost:8094/:path*',
          destination: 'http://localhost:8072/:path*',
          // destination: 'https://test.bynintu.com/:path*',
        },
      ];
    } else {
      return [
        {
          source: '/api/:path*',
          // destination: 'http://localhost:8094/:path*',
          // destination: 'http://localhost:8072/:path*',
          destination: 'https://test.bynintu.com/:path*',
        },
      ];
    }
  },
  ...withImages({
    webpack(config, options) {
      return config;
    },
  }),
};
