/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/docs',
        destination: '/',
        permanent: true,
      },
    ]
  },
  reactStrictMode: false,
}

module.exports = nextConfig
