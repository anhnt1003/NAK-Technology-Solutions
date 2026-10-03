# Thông tin còn cần từ NAK để hoàn thiện website

Các mục chỉ hiển thị trên website khi có dữ liệu thật. Điền vào `src/content/extras.js` hoặc gửi cho người phát triển.

## 1. Dự án: đã có bản nháp, cần bạn rà soát
Ba trang dự án (Terumo BCT, Atlas, SCSC) đã được viết từ mô tả ngắn của NAK. Nội dung chỉ gồm thông tin chung, **không có số liệu hay tên sản phẩm**. Những câu sau là suy luận theo thông lệ triển khai, cần NAK xác nhận hoặc sửa:
- Các giai đoạn (khảo sát, thiết kế, triển khai, bàn giao) và danh sách phạm vi công việc từng dự án
- Phần "Thách thức" (viết theo bối cảnh chung của nhà máy, văn phòng mới, hệ thống vận hành trọng yếu)
- Phần "Kết quả": ví dụ "tài liệu thiết kế và vận hành được bàn giao", "kiểm thử và nghiệm thu trước khi đưa vào vận hành"

Để trang dự án thuyết phục hơn, bổ sung nếu có thể (mỗi dự án):
- Thời gian triển khai
- Quy mô (số điểm mạng, số thiết bị, diện tích, số người dùng) và hãng công nghệ đã dùng
- Kết quả đo được (thời gian gián đoạn, hiệu năng, mức cải thiện)
- 2 đến 3 ảnh hiện trường được phép công bố
- SCSC: hệ thống vận hành trọng yếu cụ thể là hệ thống gì (nếu được phép nêu)

## 2. Lời chứng thực khách hàng
- Họ tên, chức danh, công ty, nội dung trích dẫn (1 đến 3 câu), có văn bản đồng ý của người đó

## 3. Đội ngũ lãnh đạo
- Họ tên, chức danh (tiếng Việt và tiếng Anh), ảnh chân dung nếu muốn công khai

## 4. Cam kết dịch vụ (SLA)
- Thời gian phản hồi theo mức độ sự cố, giờ hỗ trợ, phạm vi bảo trì, kênh tiếp nhận

## 5. Chứng nhận / cấp độ đối tác (tùy chọn)
- Cấp độ đối tác của Dell, HPE, Cisco, Fortinet, Microsoft, AWS; chứng chỉ ISO nếu có, kèm bằng chứng

## 6. Rà soát nội dung do người phát triển soạn
- Mô tả 8 nhóm giải pháp (`src/content/solutions.js`)
- 3 bài blog (`src/content/posts.js`)
- FAQ (`src/content/faq.js`)
- Chính sách bảo mật (`src/privacy.js`): nhờ pháp chế rà soát rồi đặt `privacyDraft: false`
