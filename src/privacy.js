// DRAFT privacy policy text (VI/EN). Must be reviewed by legal counsel before publishing.
// Items in the retention period and cross-border sections are assumptions to be confirmed by NAK.
const c = require('./config');

module.exports = {
  vi: {
    nav: 'Chính sách bảo mật',
    draftBanner: 'BẢN NHÁP: nội dung đang chờ rà soát pháp lý, chưa phải bản chính thức.',
    title: 'Chính sách bảo mật',
    updated: 'Cập nhật lần cuối: 03/10/2026',
    intro: `${c.legal.vi} (“NAK”, “chúng tôi”) tôn trọng và bảo vệ dữ liệu cá nhân của bạn. Chính sách này giải thích chúng tôi thu thập, sử dụng, lưu trữ và bảo vệ dữ liệu cá nhân như thế nào khi bạn truy cập website ${c.domain} và gửi yêu cầu cho chúng tôi, phù hợp với Luật Bảo vệ dữ liệu cá nhân số 91/2025/QH15.`,
    sections: [
      { h: '1. Đơn vị kiểm soát dữ liệu', ul: [`Tên đơn vị: ${c.legal.vi} (${c.name})`, `Mã số thuế: ${c.taxCode}`, `Địa chỉ: ${c.address.vi}`, `Email: ${c.email}`, `Hotline / Zalo: ${c.phone}`] },
      { h: '2. Dữ liệu chúng tôi thu thập', p: ['Khi bạn gửi biểu mẫu liên hệ, chúng tôi thu thập thông tin do chính bạn cung cấp:'], ul: ['Họ và tên, email (bắt buộc);', 'Số điện thoại, tên công ty (không bắt buộc);', 'Nhóm giải pháp quan tâm và nội dung bạn viết trong yêu cầu.'], after: ['Ngoài ra, máy chủ có thể ghi nhận tự động một số dữ liệu kỹ thuật như địa chỉ IP, loại trình duyệt, thời gian truy cập phục vụ vận hành và bảo mật. Website không sử dụng cookie theo dõi hay công cụ phân tích của bên thứ ba tại thời điểm ban hành chính sách này.'] },
      { h: '3. Mục đích sử dụng', ul: ['Tiếp nhận, phản hồi yêu cầu tư vấn và liên hệ lại với bạn;', 'Chuẩn bị đề xuất giải pháp, báo giá theo yêu cầu của bạn;', 'Bảo đảm an toàn, ngăn chặn lạm dụng và gửi thư rác cho website.'], after: ['Chúng tôi không bán dữ liệu cá nhân của bạn và không sử dụng dữ liệu ngoài các mục đích nêu trên khi chưa có sự đồng ý của bạn.'] },
      { h: '4. Cơ sở xử lý', p: ['Chúng tôi chỉ xử lý dữ liệu cá nhân thu thập qua biểu mẫu khi có sự đồng ý của bạn, thể hiện bằng việc tích chọn ô đồng ý trước khi gửi. Bạn có thể rút lại sự đồng ý bất cứ lúc nào bằng cách liên hệ với chúng tôi.'] },
      { h: '5. Thời gian lưu trữ', p: ['Chúng tôi lưu trữ dữ liệu trong thời gian cần thiết để xử lý yêu cầu của bạn và tối đa 24 tháng kể từ lần liên hệ cuối cùng, trừ khi pháp luật yêu cầu lưu lâu hơn hoặc bạn đã trở thành khách hàng của NAK. Hết thời hạn, dữ liệu sẽ được xóa hoặc ẩn danh.'] },
      { h: '6. Chia sẻ dữ liệu', p: ['Dữ liệu của bạn chỉ được truy cập bởi nhân sự NAK có nhiệm vụ liên quan. Chúng tôi có thể chia sẻ với các nhà cung cấp dịch vụ hỗ trợ vận hành website (dịch vụ lưu trữ web, dịch vụ email) theo hợp đồng bảo mật, hoặc với cơ quan nhà nước có thẩm quyền khi pháp luật yêu cầu.', 'Nếu hạ tầng của nhà cung cấp đặt ngoài lãnh thổ Việt Nam, việc chuyển dữ liệu ra nước ngoài sẽ được thực hiện theo quy định của pháp luật Việt Nam.'] },
      { h: '7. Quyền của bạn', p: ['Theo quy định của pháp luật, bạn có quyền:'], ul: ['Được biết về việc xử lý dữ liệu cá nhân của mình;', 'Đồng ý hoặc không đồng ý, và rút lại sự đồng ý;', 'Truy cập, xem, chỉnh sửa hoặc yêu cầu chỉnh sửa dữ liệu;', 'Yêu cầu cung cấp, xóa, hạn chế xử lý dữ liệu; phản đối xử lý dữ liệu;', 'Khiếu nại, tố cáo hoặc khởi kiện theo quy định pháp luật.'], after: [`Để thực hiện các quyền trên, vui lòng gửi yêu cầu tới ${c.email}. Chúng tôi sẽ xác minh danh tính và phản hồi trong thời hạn theo quy định.`] },
      { h: '8. Bảo mật dữ liệu', p: ['Chúng tôi áp dụng các biện pháp kỹ thuật và quản lý phù hợp như mã hóa kết nối (HTTPS), giới hạn truy cập theo vai trò, chống thư rác và giới hạn tần suất gửi biểu mẫu. Tuy nhiên, không có hệ thống nào an toàn tuyệt đối; nếu xảy ra sự cố ảnh hưởng đến dữ liệu của bạn, chúng tôi sẽ thông báo theo quy định pháp luật.'] },
      { h: '9. Cookie', p: ['Website hiện chỉ sử dụng các thành phần kỹ thuật cần thiết để hoạt động và không đặt cookie theo dõi hay quảng cáo. Nếu trong tương lai chúng tôi sử dụng công cụ phân tích, chúng tôi sẽ cập nhật chính sách và xin sự đồng ý của bạn.'] },
      { h: '10. Liên kết bên ngoài', p: ['Website có thể chứa liên kết đến Zalo, nguồn trích dẫn số liệu và website của bên thứ ba. Chúng tôi không chịu trách nhiệm về chính sách bảo mật của các website đó.'] },
      { h: '11. Thay đổi chính sách', p: ['Chúng tôi có thể cập nhật chính sách này khi cần thiết. Phiên bản mới có hiệu lực kể từ ngày đăng trên website.'] },
      { h: '12. Liên hệ', p: [`Mọi câu hỏi về chính sách này hoặc dữ liệu cá nhân, vui lòng liên hệ: ${c.email}, hotline ${c.phone}.`] },
    ],
  },
  en: {
    nav: 'Privacy Policy',
    draftBanner: 'DRAFT: this text is pending legal review and is not yet final.',
    title: 'Privacy Policy',
    updated: 'Last updated: 3 October 2026',
    intro: `${c.legal.en} (“NAK”, “we”, “us”) respects and protects your personal data. This policy explains how we collect, use, store and protect personal data when you visit ${c.domain} and send us a request, in line with Vietnam's Law on Personal Data Protection No. 91/2025/QH15.`,
    sections: [
      { h: '1. Data controller', ul: [`Entity: ${c.legal.en} (${c.name})`, `Tax code: ${c.taxCode}`, `Address: ${c.address.en}`, `Email: ${c.email}`, `Hotline / Zalo: ${c.phone}`] },
      { h: '2. Data we collect', p: ['When you submit the contact form, we collect the information you provide:'], ul: ['Full name and email (required);', 'Phone number and company name (optional);', 'Solution of interest and the message you write.'], after: ['The server may also automatically record technical data such as IP address, browser type and access time for operation and security. At the time of this policy, the website does not use tracking cookies or third-party analytics tools.'] },
      { h: '3. How we use data', ul: ['To receive and respond to your enquiry and contact you;', 'To prepare solution proposals and quotations you request;', 'To keep the website secure and prevent abuse and spam.'], after: ['We do not sell your personal data and will not use it for other purposes without your consent.'] },
      { h: '4. Legal basis', p: ['We process personal data collected through the form only with your consent, given by ticking the consent box before submitting. You may withdraw consent at any time by contacting us.'] },
      { h: '5. Retention', p: ['We keep data for as long as needed to handle your request and for up to 24 months after our last contact, unless the law requires longer retention or you become a NAK customer. After that, data is deleted or anonymized.'] },
      { h: '6. Sharing', p: ['Your data is accessible only to NAK staff with a relevant role. We may share it with service providers that support the website (web hosting, email) under confidentiality terms, or with competent authorities when required by law.', 'If a provider’s infrastructure is located outside Vietnam, cross-border transfers will be carried out in accordance with Vietnamese law.'] },
      { h: '7. Your rights', p: ['Under the law, you have the right to:'], ul: ['Be informed about the processing of your personal data;', 'Consent or refuse, and withdraw consent;', 'Access, view, correct or request correction of your data;', 'Request provision, deletion or restriction of processing, and object to processing;', 'Lodge complaints or take legal action as provided by law.'], after: [`To exercise these rights, email ${c.email}. We will verify your identity and respond within the legally required time.`] },
      { h: '8. Data security', p: ['We apply appropriate technical and organizational measures such as encrypted connections (HTTPS), role-based access, spam protection and form rate limiting. No system is completely secure; if an incident affects your data, we will notify as required by law.'] },
      { h: '9. Cookies', p: ['The website currently uses only the technical components needed to operate and sets no tracking or advertising cookies. If we introduce analytics in future, we will update this policy and ask for your consent.'] },
      { h: '10. External links', p: ['The website may link to Zalo, data sources and third-party sites. We are not responsible for the privacy practices of those sites.'] },
      { h: '11. Changes', p: ['We may update this policy when necessary. The new version takes effect when published on the website.'] },
      { h: '12. Contact', p: [`For questions about this policy or your personal data, contact: ${c.email}, hotline ${c.phone}.`] },
    ],
  },
};
