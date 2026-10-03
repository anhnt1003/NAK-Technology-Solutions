require('dotenv').config();

module.exports = {
  name: 'NAK Technology Solutions Co., LTD',
  short: 'NAK Technology',
  siteUrl: (process.env.SITE_URL || 'http://localhost:3000').replace(/\/$/, ''),
  email: process.env.COMPANY_EMAIL || 'info@your-domain.com',
  phone: process.env.COMPANY_PHONE || '+84 000 000 000',
  address: {
    vi: process.env.COMPANY_ADDRESS_VI || 'Địa chỉ công ty, Thành phố, Việt Nam',
    en: process.env.COMPANY_ADDRESS_EN || 'Company address, City, Vietnam',
  },
  langs: ['vi', 'en'],
  defaultLang: 'vi',
  pages: ['', 'services', 'about', 'contact'],
};
