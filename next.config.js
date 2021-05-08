const withImages = require('next-images')

module.exports = {
  async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'http://localhost:8094/:path*',
          destinationOld: 'https://test.bynintu.com/:path*',
        },
      ]
    },
    ...withImages({
      webpack(config, options) {
        return config
      }
    })
};