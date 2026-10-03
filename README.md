# NAK Technology Solutions – Website

Website doanh nghiệp song ngữ (VI/EN) của NAK Technology Solutions Co., LTD, xây bằng **Node.js + Express + EJS**.
Nội dung lấy từ hồ sơ năng lực NAK Profile 2026.

## Chạy local

```bash
npm install
cp .env.example .env   # chỉnh email / SMTP
npm run dev            # http://localhost:3000
```

## Cấu trúc

```
server.js          Express app, routes, form liên hệ, sitemap/robots
src/config.js      Thông tin công ty (địa chỉ, email, domain)
src/i18n/          Nội dung tiếng Việt / tiếng Anh (sửa chữ ở đây)
src/data.js        Danh sách logo khách hàng, hãng, ảnh dự án
views/             Template EJS
public/img/        Logo NAK, photos/, partners/ (logo khách hàng & hãng)
```

Trang: `/vi` `/en` (Trang chủ), `/solutions`, `/projects`, `/about`, `/contact`.

## Cần xác nhận / bổ sung

- Hotline và Zalo: 0937 212 288, MST 0312981943 (cấu hình ở `src/config.js`).
- Mô tả chi tiết 8 nhóm giải pháp (`solutions[].items`) do biên soạn từ tên nhóm trong profile, cần NAK rà soát.
- Gắn logo khách hàng với 3 dự án tiêu biểu (`src/data.js` → `projectMedia`) là suy đoán, cần xác nhận.
- Số liệu "Bối cảnh thị trường" đã có nguồn trích dẫn (xem `market` trong `src/i18n`); kiểm tra lại link nguồn Gartner trước khi công bố.
- **Chính sách bảo mật là BẢN NHÁP** (`src/privacy.js`): nhờ pháp chế rà soát (đặc biệt thời gian lưu trữ 24 tháng, chuyển dữ liệu ra nước ngoài), sau đó đặt `privacyDraft: false` trong `src/config.js` để tắt banner nháp.
- Quyền sử dụng logo khách hàng và hãng trên website.

## Đẩy lên GitHub

```bash
git remote add origin https://github.com/<tai-khoan>/<ten-repo>.git
git push -u origin main
```

## Deploy lên Hostinger (gói Business / Cloud có Node.js)

1. hPanel → **Websites → Add website → Node.js Apps**.
2. Chọn **Import Git Repository**, kết nối GitHub, chọn repo và nhánh `main`.
3. Install command `npm install`, start command `npm start` (entry `server.js`), Node 18 trở lên.
4. Thêm **Environment variables** theo `.env.example` (`NODE_ENV=production`, `SITE_URL=https://www.nak.com.vn`, `SMTP_*`). Không cần đặt `PORT`.
5. Deploy. Các lần sau chỉ cần `git push`.
6. Trỏ tên miền `www.nak.com.vn` và bật SSL trong hPanel.

## Bảo mật & hiệu năng

Helmet (CSP), rate-limit form (5 lần/15 phút/IP), honeypot chống spam, gzip, cache tĩnh 7 ngày, `sitemap.xml`, `robots.txt`, hreflang, tôn trọng `prefers-reduced-motion`.
