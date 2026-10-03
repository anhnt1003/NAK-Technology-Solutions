# NAK Technology Solutions – Website

Website doanh nghiệp song ngữ (VI/EN), xây bằng **Node.js + Express + EJS**, giao diện dark futuristic, không phụ thuộc framework frontend nặng.

## Chạy local

```bash
npm install
cp .env.example .env   # chỉnh thông tin công ty / SMTP
npm run dev            # http://localhost:3000
```

## Cấu trúc

```
server.js          Express app, routes, form liên hệ, sitemap/robots
src/config.js      Thông tin công ty (đọc từ biến môi trường)
src/i18n/          Nội dung tiếng Việt / tiếng Anh (sửa chữ ở đây)
src/icons.js       Bộ icon SVG
views/             Template EJS (partials + pages)
public/            CSS, JS, logo, favicon
```

## Việc cần làm trước khi go-live

- [ ] Điền email, số điện thoại, địa chỉ thật vào biến môi trường (`COMPANY_*`).
- [ ] Thay số liệu mẫu ở `home.stats` trong `src/i18n/vi.js` và `en.js` bằng số liệu thật (hoặc xoá).
- [ ] Thay logo `public/img/logo.svg` bằng logo chính thức nếu có.
- [ ] Đổi ảnh chia sẻ mạng xã hội `public/img/og.svg` sang PNG 1200×630 (Facebook/LinkedIn không hiển thị SVG) và sửa đường dẫn trong `views/partials/head.ejs`.
- [ ] Tạo hộp thư trên Hostinger và điền `SMTP_*` để form liên hệ gửi được email.

## Đẩy lên GitHub

```bash
git init
git add .
git commit -m "Initial commit: NAK Technology Solutions website"
git branch -M main
git remote add origin https://github.com/<tai-khoan>/<ten-repo>.git
git push -u origin main
```

## Deploy lên Hostinger (gói Business / Cloud có Node.js)

1. hPanel → **Websites → Add website → Node.js Apps**.
2. Chọn **Import Git Repository**, kết nối GitHub và chọn repo + nhánh `main`.
3. Cấu hình build:
   - Framework: **Express** (hoặc Other)
   - Node version: 18 trở lên
   - Install command: `npm install`
   - Start command: `npm start` (entry file: `server.js`)
4. Thêm **Environment variables** theo `.env.example` (đặt `NODE_ENV=production`, `SITE_URL=https://ten-mien-cua-ban`). Không cần đặt `PORT`, Hostinger tự cấp.
5. Bấm **Deploy**. Các lần sau chỉ cần `git push`, Hostinger sẽ tự triển khai lại.
6. Trỏ tên miền và bật SSL (Let's Encrypt) trong hPanel.

## Bảo mật & hiệu năng đã có sẵn

Helmet (CSP, security headers), rate-limit cho form (5 lần/15 phút/IP), honeypot chống spam, nén gzip, cache tĩnh 7 ngày, `sitemap.xml` + `robots.txt` + hreflang, tôn trọng `prefers-reduced-motion`.
