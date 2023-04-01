const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en', 'ru', 'uz' , 'kr'] ,
    defaultLocale: 'ru'
  },
  output: "standalone"
}

module.exports = nextConfig