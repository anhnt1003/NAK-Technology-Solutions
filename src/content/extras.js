// Optional real content. Each section on the site renders ONLY when its data is present.
// Project texts below were drafted from short briefs given by NAK (client, scope) plus general delivery practice.
// They contain no figures or product names. NAK should review and correct them (see CONTENT-REQUEST.md).
module.exports = {
  // Keyed by project index in data.projectMedia (0 = Terumo BCT, 1 = Atlas, 2 = SCSC).
  projectDetails: {
    0: {
      vi: {
        challenge: 'Mạng nhà máy là nền tảng kết nối máy móc, hệ thống quản lý và người vận hành. Thay thế toàn bộ hạ tầng này trong một cơ sở sản xuất đang hoạt động đòi hỏi kế hoạch chuyển đổi chặt chẽ để hạn chế tối đa gián đoạn sản xuất, đồng thời bảo đảm hạ tầng mới đáp ứng nhu cầu kết nối và tăng trưởng của nhà máy.',
        solution: 'NAK đảm nhận cả tư vấn và triển khai: đánh giá hiện trạng mạng, thiết kế kiến trúc mới, cung cấp và lắp đặt thiết bị, cấu hình, chuyển đổi theo từng giai đoạn và bàn giao cho đội ngũ vận hành của khách hàng.',
        scope: ['Khảo sát và đánh giá hạ tầng mạng hiện hữu của nhà máy', 'Thiết kế kiến trúc mạng mới, phân vùng và dự phòng', 'Cung cấp, lắp đặt và cấu hình thiết bị mạng', 'Lập kế hoạch và thực hiện chuyển đổi từ hệ thống cũ sang hệ thống mới', 'Kiểm thử, nghiệm thu và bàn giao tài liệu'],
        phases: [
          { t: 'Khảo sát', d: 'Đánh giá hiện trạng mạng, nhu cầu kết nối và các ràng buộc vận hành của nhà máy.' },
          { t: 'Thiết kế', d: 'Xây dựng kiến trúc mạng mới, lộ trình chuyển đổi và kế hoạch giảm thiểu gián đoạn.' },
          { t: 'Triển khai', d: 'Lắp đặt, cấu hình và chuyển đổi theo từng giai đoạn đã thống nhất với khách hàng.' },
          { t: 'Bàn giao', d: 'Kiểm thử, nghiệm thu, bàn giao tài liệu và hỗ trợ sau triển khai.' },
        ],
        results: ['Toàn bộ hạ tầng mạng nhà máy được thay thế bằng hệ thống mới', 'Hạ tầng được thiết kế để sẵn sàng cho nhu cầu mở rộng', 'Tài liệu thiết kế và vận hành được bàn giao cho khách hàng'],
      },
      en: {
        challenge: 'A plant network connects machines, management systems and operators. Replacing all of it in a live manufacturing facility demands a tightly controlled cut-over plan to minimize disruption to production, while making sure the new infrastructure meets the plant’s connectivity and growth needs.',
        solution: 'NAK handled both consulting and delivery: assessing the current network, designing the new architecture, supplying and installing equipment, configuring it, migrating in phases and handing over to the customer’s operations team.',
        scope: ['Survey and assessment of the plant’s existing network', 'New network architecture design, segmentation and redundancy', 'Supply, installation and configuration of network equipment', 'Planning and executing the migration from the old to the new system', 'Testing, acceptance and documentation handover'],
        phases: [
          { t: 'Discover', d: 'Assess the current network, connectivity needs and the plant’s operational constraints.' },
          { t: 'Design', d: 'Build the new network architecture, migration roadmap and a disruption-minimizing plan.' },
          { t: 'Deliver', d: 'Install, configure and migrate in phases agreed with the customer.' },
          { t: 'Handover', d: 'Test, accept, hand over documentation and provide post-deployment support.' },
        ],
        results: ['The plant’s entire network infrastructure was replaced with a new system', 'The infrastructure was designed to be ready for future expansion', 'Design and operations documentation was handed over to the customer'],
      },
    },
    1: {
      vi: {
        challenge: 'Chuyển sang văn phòng mới là cơ hội xây dựng hạ tầng CNTT đúng chuẩn ngay từ đầu, nhưng cũng đòi hỏi mọi thứ sẵn sàng đúng thời điểm nhân viên chuyển đến: mạng có dây và không dây, máy chủ, kết nối và an ninh phải hoạt động đồng bộ.',
        solution: 'NAK tư vấn và triển khai toàn bộ hạ tầng network và system cho văn phòng mới: từ thiết kế tổng thể, cung cấp và cài đặt thiết bị đến cấu hình, kiểm thử và bàn giao, bám sát tiến độ chuyển văn phòng của khách hàng.',
        scope: ['Tư vấn và thiết kế tổng thể hạ tầng network và system', 'Hạ tầng mạng có dây, không dây và kết nối Internet', 'Hạ tầng máy chủ và hệ thống phục vụ vận hành văn phòng', 'Cài đặt, cấu hình và kiểm thử toàn hệ thống', 'Nghiệm thu, bàn giao tài liệu và hỗ trợ khi đi vào sử dụng'],
        phases: [
          { t: 'Tư vấn', d: 'Tìm hiểu nhu cầu, quy mô người dùng và mặt bằng văn phòng mới.' },
          { t: 'Thiết kế', d: 'Đề xuất kiến trúc network và system, danh mục thiết bị và tiến độ.' },
          { t: 'Triển khai', d: 'Lắp đặt, cài đặt và cấu hình hệ thống theo tiến độ chuyển văn phòng.' },
          { t: 'Bàn giao', d: 'Kiểm thử, nghiệm thu và hỗ trợ ban đầu khi nhân viên chuyển đến.' },
        ],
        results: ['Văn phòng mới được trang bị hạ tầng network và system hoàn chỉnh', 'Hệ thống sẵn sàng khi doanh nghiệp chuyển đến', 'Tài liệu cấu hình và vận hành được bàn giao'],
      },
      en: {
        challenge: 'Moving to a new office is a chance to build IT infrastructure to standard from day one, but it also requires everything ready exactly when staff move in: wired and wireless networks, servers, connectivity and security must work together.',
        solution: 'NAK advised on and delivered the entire network and system infrastructure for the new office: from overall design, equipment supply and installation to configuration, testing and handover, closely following the customer’s move schedule.',
        scope: ['Consulting and overall network and system design', 'Wired, wireless and Internet connectivity infrastructure', 'Server infrastructure and systems supporting office operations', 'Installation, configuration and testing of the whole system', 'Acceptance, documentation handover and go-live support'],
        phases: [
          { t: 'Consult', d: 'Understand needs, user scale and the new office floor plan.' },
          { t: 'Design', d: 'Propose the network and system architecture, equipment list and schedule.' },
          { t: 'Deliver', d: 'Install, set up and configure the system to the office move schedule.' },
          { t: 'Handover', d: 'Test, accept and provide early support as staff move in.' },
        ],
        results: ['The new office was equipped with a complete network and system infrastructure', 'Systems were ready when the business moved in', 'Configuration and operations documentation was handed over'],
      },
    },
    2: {
      vi: {
        challenge: 'Các hệ thống vận hành trọng yếu tại cảng hàng không đòi hỏi độ tin cậy và tính sẵn sàng rất cao. Nâng cấp loại hệ thống này cần lập kế hoạch cẩn thận, kiểm thử kỹ và triển khai sao cho hạn chế tối đa ảnh hưởng đến hoạt động đang diễn ra.',
        solution: 'NAK thực hiện nâng cấp hệ thống vận hành trọng yếu cho SCSC tại cảng hàng không: đánh giá hệ thống hiện hữu, thiết kế phương án nâng cấp, triển khai theo kế hoạch có kiểm soát, kiểm thử và bàn giao.',
        scope: ['Đánh giá hiện trạng các hệ thống vận hành trọng yếu', 'Thiết kế phương án nâng cấp, ưu tiên tính sẵn sàng và dự phòng', 'Triển khai nâng cấp theo kế hoạch có kiểm soát', 'Kiểm thử và nghiệm thu trước khi đưa vào vận hành', 'Bàn giao tài liệu và hỗ trợ sau triển khai'],
        phases: [
          { t: 'Đánh giá', d: 'Xác định hiện trạng, yêu cầu vận hành và các ràng buộc của hệ thống trọng yếu.' },
          { t: 'Thiết kế', d: 'Xây dựng phương án nâng cấp, lộ trình và kế hoạch hạn chế ảnh hưởng đến vận hành.' },
          { t: 'Triển khai', d: 'Thực hiện nâng cấp theo từng bước đã thống nhất với khách hàng.' },
          { t: 'Bàn giao', d: 'Kiểm thử, nghiệm thu, bàn giao tài liệu và hỗ trợ sau triển khai.' },
        ],
        results: ['Hệ thống vận hành trọng yếu được nâng cấp', 'Hệ thống được kiểm thử và nghiệm thu trước khi đưa vào vận hành', 'Tài liệu cấu hình và vận hành được bàn giao'],
      },
      en: {
        challenge: 'Critical operations systems at an airport demand very high reliability and availability. Upgrading them requires careful planning, thorough testing and delivery that minimizes impact on ongoing operations.',
        solution: 'NAK carried out the upgrade of SCSC\u2019s critical operations systems at the airport: assessing the existing systems, designing the upgrade, delivering under a controlled plan, testing and handing over.',
        scope: ['Assessment of the current critical operations systems', 'Upgrade design prioritizing availability and redundancy', 'Controlled, planned delivery of the upgrade', 'Testing and acceptance before going into operation', 'Documentation handover and post-deployment support'],
        phases: [
          { t: 'Assess', d: 'Establish the current state, operational requirements and constraints of the critical systems.' },
          { t: 'Design', d: 'Build the upgrade approach, roadmap and a plan to limit impact on operations.' },
          { t: 'Deliver', d: 'Carry out the upgrade in steps agreed with the customer.' },
          { t: 'Handover', d: 'Test, accept, hand over documentation and provide post-deployment support.' },
        ],
        results: ['The critical operations systems were upgraded', 'Systems were tested and accepted before going into operation', 'Configuration and operations documentation was handed over'],
      },
    },
  },

  // Customer quotes (only with the customer's written consent).
  // { name: 'Nguyễn Văn A', role: 'IT Manager', company: 'Terumo BCT', vi: '...', en: '...' }
  testimonials: [],

  // Leadership / team members shown on the About page.
  // { name: '...', photo: '/img/team/a.jpg', vi: { role: '...' }, en: { role: '...' } }
  team: [],

  // Concrete service-level commitments.
  // { vi: [{ label: 'Phản hồi sự cố khẩn', value: '...' }], en: [...] }
  sla: null,
};
