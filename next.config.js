const withPWA = require('next-pwa')({
  dest: 'public'
})

module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: [
      "help.twitter.com",
      "lh3.googleusercontent.com",
    ]
  },
  swcMinify: true,
})