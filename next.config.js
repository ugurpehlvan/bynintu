const withImages = require('next-images')

module.exports = {
  async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'https://test.bynintu.com/:path*',
        },
      ]
    },
    ...withImages({
      webpack(config, options) {
        return config
      }
    })
};