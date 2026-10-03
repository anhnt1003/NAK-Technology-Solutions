require('dotenv').config();

module.exports = {
  name: 'NAK Technology Solutions Co., LTD',
  short: 'NAK Technology',
  siteUrl: (process.env.SITE_URL || 'http://localhost:3000').replace(/\/$/, ''),
  domain: 'www.nak.com.vn',
  email: process.env.COMPANY_EMAIL || 'support@nak.com.vn',
  // Leave empty to hide the phone number everywhere until a real number is provided.
  phone: process.env.COMPANY_PHONE || '',
  founded: 2014,
  address: {
    vi: 'L17-11, Vincom Center, 72 Lê Thánh Tôn, P. Sài Gòn, TP. Hồ Chí Minh',
    en: 'L17-11, Vincom Center, 72 Le Thanh Ton St, Saigon Ward, Ho Chi Minh City',
  },
  langs: ['vi', 'en'],
  defaultLang: 'vi',
  pages: ['', 'solutions', 'projects', 'about', 'contact'],
};
