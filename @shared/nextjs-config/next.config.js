/**
 * @param {import('next').NextConfig} config NextJS config
 * @return {import('next').NextConfig}
 */

const extendNextConfig = (config = {}) => {
  return {
    // Only enable strict mode on production
    reactStrictMode: process.env.NODE_ENV === 'production',
    swcMinify: true,

    experimental: {
      externalDir: true,
    },

    i18n: {
      locales: ['en', 'vi'],
      defaultLocale: 'vi',
    },

    ...config,
  }
}

module.exports = extendNextConfig
