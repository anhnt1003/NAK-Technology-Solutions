require('dotenv').config();

module.exports = {
  name: 'NAK Technology Solutions Co., LTD',
  short: 'NAK Technology',
  siteUrl: (process.env.SITE_URL || 'http://localhost:3000').replace(/\/$/, ''),
  domain: 'www.nak.com.vn',
  email: process.env.COMPANY_EMAIL || 'support@nak.com.vn',
  // Hotline (leave empty to hide everywhere).
  phone: process.env.COMPANY_PHONE || '0937 212 288',
  zalo: '0937212288',
  // Show the 'draft' banner on the privacy page until legal review is complete.
  privacyDraft: true,
  taxCode: '0312981943',
  legal: {
    vi: 'Công Ty TNHH Giải Pháp Công Nghệ NAK',
    en: 'NAK Technology Solution Co., LTD',
  },
  founded: 2014,
  address: {
    vi: 'L17-11, Vincom Center, 72 Lê Thánh Tôn, P. Sài Gòn, TP. Hồ Chí Minh',
    en: 'L17-11, Vincom Center, 72 Le Thanh Ton St, Saigon Ward, Ho Chi Minh City',
  },
  langs: ['vi', 'en'],
  defaultLang: 'vi',
  pages: ['', 'solutions', 'projects', 'about', 'contact', 'privacy', 'resources', 'insights'],
};
