/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://volimfit.ru',
  generateRobotsTxt: true, // опционально, можно отключить
  // ...другие опции
}