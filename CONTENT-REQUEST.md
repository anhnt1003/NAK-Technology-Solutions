# Thông tin cần từ NAK để hoàn thiện website

Các mục dưới đây chỉ hiển thị trên website khi có dữ liệu thật. Không có gì được bịa ra. Điền vào `src/content/extras.js` hoặc gửi cho người phát triển.

## 1. Chi tiết dự án (3 dự án: Terumo, Atlas+, SCSC)
Mỗi dự án cần:
- Bối cảnh / thách thức của khách hàng (2 đến 4 câu)
- Giải pháp NAK đã triển khai (thiết bị, công nghệ, phạm vi)
- Kết quả đạt được (số liệu cụ thể nếu có: số điểm mạng, số thiết bị, thời gian, mức cải thiện)
- Thời gian triển khai, hãng công nghệ đã dùng
- Xác nhận khách hàng đồng ý công bố tên và logo (đã xác nhận chung, cần xác nhận riêng nếu muốn nêu chi tiết)
- 2 đến 3 ảnh hiện trường nếu có (đã được phép chụp, không lộ thông tin nhạy cảm)

## 2. Lời chứng thực khách hàng
- Họ tên, chức danh, công ty người nói
- Nội dung trích dẫn (1 đến 3 câu), có văn bản đồng ý của người đó

## 3. Đội ngũ lãnh đạo
- Họ tên, chức danh (tiếng Việt và tiếng Anh), ảnh chân dung (nếu muốn công khai)

## 4. Cam kết dịch vụ (SLA)
- Thời gian phản hồi sự cố theo mức độ (khẩn, cao, thường)
- Giờ hỗ trợ (giờ hành chính, 24/7?)
- Phạm vi bảo trì, kênh tiếp nhận (hotline, email)

## 5. Chứng nhận / cấp độ đối tác (tùy chọn)
- Ví dụ cấp độ đối tác của Dell, HPE, Cisco, Fortinet, Microsoft, AWS; chứng chỉ ISO nếu có
- Kèm bằng chứng hoặc tài liệu xác nhận để đưa lên trang

## 6. Rà soát nội dung do người phát triển soạn
- Mô tả chi tiết 8 nhóm giải pháp (`src/content/solutions.js`): kiểm tra tính chính xác kỹ thuật
- 3 bài blog (`src/content/posts.js`): duyệt trước khi quảng bá
- FAQ (`src/content/faq.js`)
- Chính sách bảo mật (`src/privacy.js`): nhờ pháp chế rà soát rồi đặt `privacyDraft: false`
