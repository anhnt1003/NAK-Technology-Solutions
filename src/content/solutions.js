// Detailed content for the 8 solution groups (VI/EN).
// Descriptions are general industry knowledge, written from the group names in the NAK profile.
// NAK should review them; vendor lists are "related technologies", not an authorization claim.
module.exports = [
  {
    id: 'server', icon: 'server', vendors: ['dell', 'hpe', 'lenovo'],
    vi: {
      title: 'Server', tagline: 'Nền tảng tính toán ổn định cho mọi khối lượng công việc',
      intro: 'Máy chủ là trái tim của hạ tầng CNTT. NAK tư vấn, cung cấp và triển khai hệ thống máy chủ phù hợp với quy mô, ngân sách và lộ trình tăng trưởng của doanh nghiệp, từ vài máy chủ ảo hóa đến cụm hợp nhất hạ tầng.',
      benefits: [
        { t: 'Đúng kích thước', d: 'Cấu hình dựa trên khối lượng công việc thực tế, tránh đầu tư thừa hoặc thiếu.' },
        { t: 'Sẵn sàng cao', d: 'Thiết kế dự phòng để hạn chế gián đoạn khi có sự cố phần cứng.' },
        { t: 'Ảo hóa & hợp nhất', d: 'Gom nhiều ứng dụng lên ít máy chủ hơn, giảm điện năng, không gian và chi phí vận hành.' },
        { t: 'Lộ trình mở rộng', d: 'Dễ nâng cấp CPU, bộ nhớ, lưu trữ khi nhu cầu tăng.' },
      ],
      offerings: ['Khảo sát khối lượng công việc và đề xuất cấu hình', 'Cung cấp máy chủ rack, tower, blade', 'Cài đặt hệ điều hành, ảo hóa và nền tảng ứng dụng', 'Nâng cấp, mở rộng và di chuyển hệ thống hiện hữu', 'Bảo hành, bảo trì và hỗ trợ theo SLA'],
      faq: [
        { q: 'Doanh nghiệp nên chọn máy chủ vật lý hay đưa lên cloud?', a: 'Tùy khối lượng công việc, yêu cầu độ trễ, tuân thủ và chi phí. Nhiều doanh nghiệp chọn mô hình hybrid: giữ hệ thống ổn định, nhạy cảm tại chỗ và đưa tải biến động lên cloud. NAK đánh giá hiện trạng rồi đề xuất phương án cụ thể.' },
        { q: 'Có hỗ trợ nâng cấp máy chủ đang chạy mà không gián đoạn kéo dài không?', a: 'Có thể lập kế hoạch nâng cấp theo giai đoạn, di chuyển dữ liệu và ứng dụng sang hệ thống mới trong khung giờ thỏa thuận để giảm thời gian ngừng hệ thống.' },
        { q: 'Thời gian triển khai một hệ thống máy chủ mới là bao lâu?', a: 'Phụ thuộc quy mô và thời gian giao hàng của hãng. Sau khi khảo sát, NAK sẽ đưa ra lịch triển khai cụ thể trong đề xuất.' },
      ],
    },
    en: {
      title: 'Server', tagline: 'A stable compute foundation for every workload',
      intro: 'Servers are the heart of IT infrastructure. NAK advises on, supplies and deploys server systems matched to your scale, budget and growth path, from a few virtualized hosts to consolidated clusters.',
      benefits: [
        { t: 'Right-sized', d: 'Configurations based on real workloads, avoiding over- or under-investment.' },
        { t: 'High availability', d: 'Redundant design to limit disruption when hardware fails.' },
        { t: 'Virtualize & consolidate', d: 'Run more applications on fewer servers to cut power, space and operating cost.' },
        { t: 'Room to grow', d: 'Easy CPU, memory and storage upgrades as demand increases.' },
      ],
      offerings: ['Workload assessment and configuration proposal', 'Rack, tower and blade server supply', 'OS, virtualization and application platform setup', 'Upgrade, expansion and migration of existing systems', 'Warranty, maintenance and SLA-backed support'],
      faq: [
        { q: 'Should we choose physical servers or move to the cloud?', a: 'It depends on workload, latency needs, compliance and cost. Many organizations choose a hybrid model: keep stable, sensitive systems on-premises and move variable workloads to the cloud. NAK assesses your environment and recommends a specific option.' },
        { q: 'Can you upgrade running servers without long downtime?', a: 'Upgrades can be planned in phases, moving data and applications to the new system in an agreed window to minimize downtime.' },
        { q: 'How long does a new server deployment take?', a: 'It depends on scale and vendor lead time. After the assessment, NAK provides a specific schedule in the proposal.' },
      ],
    },
  },
  {
    id: 'storage', icon: 'database', vendors: ['dell', 'hpe'],
    vi: {
      title: 'Storage', tagline: 'Dữ liệu an toàn, nhanh và luôn sẵn sàng',
      intro: 'Dữ liệu là tài sản quan trọng nhất của doanh nghiệp. NAK thiết kế hệ thống lưu trữ và sao lưu cân bằng giữa hiệu năng, dung lượng, chi phí và khả năng phục hồi khi có sự cố.',
      benefits: [
        { t: 'Hiệu năng phù hợp', d: 'Kết hợp flash và đĩa dung lượng lớn theo từng loại dữ liệu.' },
        { t: 'Bảo vệ trước sự cố', d: 'Sao lưu nhiều lớp, khôi phục nhanh khi hỏng hóc hoặc mã độc tống tiền.' },
        { t: 'Mở rộng linh hoạt', d: 'Tăng dung lượng và hiệu năng mà không phải thay toàn bộ hệ thống.' },
        { t: 'Tập trung quản trị', d: 'Một nơi quản lý dữ liệu cho ảo hóa, file và ứng dụng trọng yếu.' },
      ],
      offerings: ['Hệ thống lưu trữ SAN, NAS và all-flash', 'Giải pháp sao lưu, nhân bản và khôi phục thảm họa', 'Lưu trữ cho ảo hóa và cơ sở dữ liệu', 'Di chuyển dữ liệu từ hệ thống cũ sang hệ thống mới', 'Giám sát dung lượng và hiệu năng'],
      faq: [
        { q: 'Quy tắc sao lưu 3-2-1 là gì?', a: 'Giữ ít nhất 3 bản dữ liệu, trên 2 loại phương tiện khác nhau, và 1 bản đặt ở nơi khác. Đây là nguyên tắc phổ biến để giảm rủi ro mất dữ liệu, đặc biệt trước mã độc tống tiền.' },
        { q: 'Sao lưu khác gì với nhân bản (replication)?', a: 'Sao lưu giữ nhiều phiên bản theo thời gian để quay lại điểm cũ. Nhân bản giữ một bản gần như theo thời gian thực ở vị trí khác để chuyển đổi nhanh khi sự cố. Hai giải pháp bổ trợ chứ không thay thế nhau.' },
        { q: 'Làm sao biết bản sao lưu dùng được khi cần?', a: 'Cần kiểm thử khôi phục định kỳ. NAK có thể xây dựng quy trình và lịch kiểm thử khôi phục cùng doanh nghiệp.' },
      ],
    },
    en: {
      title: 'Storage', tagline: 'Data that is safe, fast and always available',
      intro: 'Data is a business’s most valuable asset. NAK designs storage and backup systems that balance performance, capacity, cost and recoverability when incidents occur.',
      benefits: [
        { t: 'Right performance', d: 'Combine flash and high-capacity disks by data type.' },
        { t: 'Protection from failure', d: 'Multi-layer backup and fast recovery from faults or ransomware.' },
        { t: 'Flexible scaling', d: 'Add capacity and performance without replacing the whole system.' },
        { t: 'Centralized management', d: 'One place to manage data for virtualization, files and critical applications.' },
      ],
      offerings: ['SAN, NAS and all-flash storage systems', 'Backup, replication and disaster recovery solutions', 'Storage for virtualization and databases', 'Data migration from old to new systems', 'Capacity and performance monitoring'],
      faq: [
        { q: 'What is the 3-2-1 backup rule?', a: 'Keep at least 3 copies of data, on 2 different media types, with 1 copy off-site. It is a widely used principle to reduce data-loss risk, especially against ransomware.' },
        { q: 'How is backup different from replication?', a: 'Backup keeps multiple versions over time so you can roll back. Replication keeps a near real-time copy elsewhere for quick failover. They complement each other rather than replace each other.' },
        { q: 'How do we know a backup will work when needed?', a: 'Run restore tests regularly. NAK can help build a restore-testing process and schedule with you.' },
      ],
    },
  },
  {
    id: 'network', icon: 'network', vendors: ['cisco', 'hpe', 'fortinet'],
    vi: {
      title: 'Network', tagline: 'Hạ tầng mạng ổn định cho văn phòng, nhà máy và trung tâm dữ liệu',
      intro: 'Mọi hệ thống đều dựa vào mạng. NAK thiết kế và triển khai mạng có dây, không dây và kết nối liên chi nhánh, bảo đảm hiệu năng, khả năng dự phòng và dễ quản lý.',
      benefits: [
        { t: 'Thiết kế theo nhu cầu', d: 'Phân vùng mạng, dải địa chỉ và băng thông dựa trên thực tế sử dụng.' },
        { t: 'Wi-Fi phủ sóng tốt', d: 'Khảo sát và bố trí điểm phát để trải nghiệm ổn định trong toàn bộ không gian.' },
        { t: 'Dự phòng', d: 'Đường truyền và thiết bị lõi dự phòng để giảm điểm lỗi đơn.' },
        { t: 'Quản trị tập trung', d: 'Giám sát, cấu hình và cảnh báo từ một giao diện.' },
      ],
      offerings: ['Thiết kế và triển khai mạng LAN, WAN, WLAN', 'Switching, routing và Wi-Fi doanh nghiệp', 'Kết nối liên chi nhánh, VPN, SD-WAN', 'Mạng cho nhà máy và môi trường sản xuất', 'Tài liệu hóa, giám sát và tối ưu hiệu năng'],
      faq: [
        { q: 'Vì sao nên phân vùng mạng (VLAN)?', a: 'Phân vùng tách biệt các nhóm thiết bị và người dùng, giảm phạm vi ảnh hưởng khi sự cố hoặc tấn công, đồng thời dễ áp dụng chính sách an ninh theo từng vùng.' },
        { q: 'Có khảo sát Wi-Fi trước khi triển khai không?', a: 'Khảo sát mặt bằng giúp xác định số lượng và vị trí điểm phát phù hợp, tránh vùng chết sóng và nhiễu. NAK khuyến nghị làm bước này với văn phòng và nhà máy.' },
        { q: 'NAK có hỗ trợ mạng cho văn phòng mới không?', a: 'Có. Từ thiết kế, cung cấp thiết bị, đi cáp, cấu hình đến nghiệm thu và bàn giao tài liệu.' },
      ],
    },
    en: {
      title: 'Network', tagline: 'Reliable networks for offices, plants and data centers',
      intro: 'Every system depends on the network. NAK designs and deploys wired, wireless and inter-branch connectivity that delivers performance, redundancy and manageability.',
      benefits: [
        { t: 'Designed for need', d: 'Network segmentation, addressing and bandwidth based on actual usage.' },
        { t: 'Good Wi-Fi coverage', d: 'Survey and access-point placement for a stable experience across the space.' },
        { t: 'Redundancy', d: 'Redundant links and core devices to reduce single points of failure.' },
        { t: 'Central management', d: 'Monitoring, configuration and alerting from one interface.' },
      ],
      offerings: ['LAN, WAN and WLAN design and deployment', 'Enterprise switching, routing and Wi-Fi', 'Branch connectivity, VPN and SD-WAN', 'Networks for plants and production environments', 'Documentation, monitoring and performance tuning'],
      faq: [
        { q: 'Why segment the network (VLANs)?', a: 'Segmentation separates groups of devices and users, limits the blast radius of incidents or attacks, and makes it easier to apply security policy per zone.' },
        { q: 'Do you survey Wi-Fi before deployment?', a: 'A site survey determines the right number and placement of access points and avoids dead zones and interference. NAK recommends it for offices and plants.' },
        { q: 'Can NAK support the network for a new office?', a: 'Yes. From design, equipment supply, cabling and configuration to acceptance and documentation handover.' },
      ],
    },
  },
  {
    id: 'security', icon: 'shield', vendors: ['fortinet', 'cisco', 'microsoft'],
    vi: {
      title: 'Security', tagline: 'Bảo vệ hạ tầng và dữ liệu trước các nguy cơ an ninh mạng',
      intro: 'An ninh không phải một sản phẩm mà là nhiều lớp phòng vệ phối hợp. NAK xây dựng các lớp bảo vệ từ vành đai mạng, điểm cuối, danh tính đến giám sát và ứng phó sự cố.',
      benefits: [
        { t: 'Phòng thủ nhiều lớp', d: 'Tường lửa, bảo mật điểm cuối, kiểm soát truy cập và sao lưu cùng phối hợp.' },
        { t: 'Giảm bề mặt tấn công', d: 'Cấu hình chuẩn, vá lỗi và phân quyền tối thiểu cần thiết.' },
        { t: 'Phát hiện sớm', d: 'Giám sát và cảnh báo để xử lý bất thường trước khi lan rộng.' },
        { t: 'Hỗ trợ tuân thủ', d: 'Xây dựng chính sách và kiểm soát theo yêu cầu của khách hàng, ngành và pháp luật.' },
      ],
      offerings: ['Tường lửa thế hệ mới và VPN', 'Bảo mật điểm cuối và email', 'Quản lý danh tính, xác thực đa yếu tố, kiểm soát truy cập', 'Giám sát, ghi log và ứng phó sự cố', 'Đánh giá an ninh và tư vấn chính sách'],
      faq: [
        { q: 'Xác thực đa yếu tố (MFA) có thật sự cần thiết?', a: 'Có. MFA giảm đáng kể rủi ro khi mật khẩu bị lộ. Nên bật tối thiểu cho tài khoản quản trị, email và truy cập từ xa.' },
        { q: 'Doanh nghiệp vừa và nhỏ cần bắt đầu từ đâu?', a: 'Bắt đầu với những điều nền tảng: sao lưu có kiểm thử khôi phục, cập nhật bản vá, MFA, tường lửa cấu hình đúng và phân quyền. Sau đó nâng dần theo mức độ rủi ro.' },
        { q: 'Chi phí một vụ rò rỉ dữ liệu lớn đến mức nào?', a: 'Theo báo cáo IBM Cost of a Data Breach 2025, chi phí trung bình toàn cầu của một vụ rò rỉ dữ liệu là 4,44 triệu USD. Con số thực tế phụ thuộc quy mô và ngành.' },
      ],
    },
    en: {
      title: 'Security', tagline: 'Protect infrastructure and data against cyber threats',
      intro: 'Security is not a single product but several coordinated layers of defence. NAK builds protection from the network perimeter and endpoints to identity, monitoring and incident response.',
      benefits: [
        { t: 'Layered defence', d: 'Firewalls, endpoint security, access control and backup working together.' },
        { t: 'Smaller attack surface', d: 'Standard configuration, patching and least-privilege access.' },
        { t: 'Early detection', d: 'Monitoring and alerts to handle anomalies before they spread.' },
        { t: 'Compliance support', d: 'Policies and controls aligned to customer, industry and legal requirements.' },
      ],
      offerings: ['Next-generation firewalls and VPN', 'Endpoint and email security', 'Identity management, MFA and access control', 'Monitoring, logging and incident response', 'Security assessment and policy consulting'],
      faq: [
        { q: 'Is multi-factor authentication (MFA) really necessary?', a: 'Yes. MFA greatly reduces risk when passwords leak. Enable it at least for admin accounts, email and remote access.' },
        { q: 'Where should a small or mid-sized business start?', a: 'Start with the fundamentals: backups with tested restores, patching, MFA, a correctly configured firewall and access control. Then add layers according to risk.' },
        { q: 'How costly is a major data breach?', a: 'According to IBM’s Cost of a Data Breach Report 2025, the global average cost of a breach is US$4.44 million. Actual figures vary by size and industry.' },
      ],
    },
  },
  {
    id: 'client', icon: 'monitor', vendors: ['lenovo', 'hp', 'dell', 'microsoft'],
    vi: {
      title: 'Client', tagline: 'Thiết bị đầu cuối đồng bộ, dễ quản lý cho toàn doanh nghiệp',
      intro: 'Trải nghiệm làm việc của nhân viên phụ thuộc vào thiết bị họ dùng hằng ngày. NAK cung cấp máy tính, workstation và phụ kiện doanh nghiệp, kèm chuẩn hóa cấu hình và hỗ trợ bảo hành.',
      benefits: [
        { t: 'Chuẩn hóa thiết bị', d: 'Một dòng máy, một cấu hình chuẩn giúp quản lý và hỗ trợ dễ hơn.' },
        { t: 'Cấp phát số lượng lớn', d: 'Cài đặt sẵn hệ điều hành, phần mềm và chính sách trước khi giao.' },
        { t: 'Phù hợp vai trò', d: 'Cấu hình khác nhau cho văn phòng, thiết kế, kỹ thuật và quản lý.' },
        { t: 'Bảo hành rõ ràng', d: 'Quy trình tiếp nhận và xử lý bảo hành thống nhất.' },
      ],
      offerings: ['Máy tính để bàn, laptop và workstation', 'Màn hình và phụ kiện', 'Cài đặt chuẩn (imaging) và cấp phát số lượng lớn', 'Quản lý thiết bị và chính sách bảo mật', 'Bảo hành và hỗ trợ tại chỗ'],
      faq: [
        { q: 'NAK có nhận cấp phát số lượng lớn không?', a: 'Có. Thiết bị có thể được cài đặt sẵn theo cấu hình chuẩn của doanh nghiệp và giao theo từng đợt.' },
        { q: 'Có hỗ trợ quản lý thiết bị tập trung không?', a: 'Có thể triển khai công cụ quản lý thiết bị và chính sách tập trung, kết hợp nền tảng Microsoft nếu doanh nghiệp đang dùng.' },
        { q: 'Bảo hành được xử lý thế nào?', a: 'Theo chính sách của hãng, NAK hỗ trợ tiếp nhận và làm đầu mối theo dõi đến khi hoàn tất.' },
      ],
    },
    en: {
      title: 'Client', tagline: 'Standardized, manageable end-user devices for the whole business',
      intro: 'Employee experience depends on the devices they use every day. NAK supplies enterprise PCs, workstations and accessories, with standardized configuration and warranty support.',
      benefits: [
        { t: 'Standardized devices', d: 'One model and one standard build make management and support easier.' },
        { t: 'Bulk provisioning', d: 'OS, software and policies installed before delivery.' },
        { t: 'Fit for role', d: 'Different configurations for office, design, engineering and management.' },
        { t: 'Clear warranty', d: 'A consistent process to receive and handle warranty claims.' },
      ],
      offerings: ['Desktops, laptops and workstations', 'Displays and accessories', 'Standard imaging and bulk provisioning', 'Device management and security policy', 'Warranty and on-site support'],
      faq: [
        { q: 'Does NAK handle bulk provisioning?', a: 'Yes. Devices can be pre-configured to your standard build and delivered in batches.' },
        { q: 'Can you set up centralized device management?', a: 'Yes. Centralized device and policy management can be deployed, combined with the Microsoft platform if you already use it.' },
        { q: 'How is warranty handled?', a: 'Following the vendor’s policy, NAK helps receive claims and acts as the point of contact until resolution.' },
      ],
    },
  },
  {
    id: 'microsoft', icon: 'layers', vendors: ['microsoft'],
    vi: {
      title: 'Microsoft', tagline: 'Nền tảng cộng tác, định danh và máy chủ trên hệ sinh thái Microsoft',
      intro: 'Microsoft là nền tảng làm việc hằng ngày của nhiều doanh nghiệp. NAK tư vấn bản quyền, triển khai và vận hành các dịch vụ Microsoft để đội ngũ cộng tác an toàn và hiệu quả.',
      benefits: [
        { t: 'Cộng tác thống nhất', d: 'Email, họp, chia sẻ tệp trên cùng một nền tảng.' },
        { t: 'Định danh tập trung', d: 'Một tài khoản cho nhiều ứng dụng, kết hợp xác thực đa yếu tố.' },
        { t: 'Tối ưu bản quyền', d: 'Chọn đúng gói theo nhu cầu để tránh lãng phí.' },
        { t: 'Di chuyển có kế hoạch', d: 'Chuyển email và dữ liệu sang nền tảng mới, hạn chế gián đoạn.' },
      ],
      offerings: ['Tư vấn và cung cấp bản quyền Microsoft', 'Triển khai Microsoft 365 và di chuyển email', 'Windows Server, Active Directory và Entra ID', 'Quản lý thiết bị và chính sách', 'Đào tạo và hỗ trợ người dùng'],
      faq: [
        { q: 'Làm sao chọn đúng gói Microsoft 365?', a: 'Dựa vào số người dùng, nhu cầu bảo mật, lưu trữ và ứng dụng cần dùng. NAK khảo sát rồi đề xuất gói tối ưu về chi phí.' },
        { q: 'Di chuyển email sang Microsoft 365 có mất dữ liệu không?', a: 'Việc di chuyển được lập kế hoạch và kiểm tra để giữ nguyên hộp thư, lịch và danh bạ. Thường thực hiện theo từng nhóm người dùng.' },
        { q: 'Có hỗ trợ sau triển khai không?', a: 'Có. Hỗ trợ theo SLA được thỏa thuận trong hợp đồng.' },
      ],
    },
    en: {
      title: 'Microsoft', tagline: 'Collaboration, identity and server platforms on the Microsoft ecosystem',
      intro: 'Microsoft is the daily work platform for many businesses. NAK advises on licensing and deploys and operates Microsoft services so teams collaborate securely and efficiently.',
      benefits: [
        { t: 'Unified collaboration', d: 'Email, meetings and file sharing on one platform.' },
        { t: 'Central identity', d: 'One account for many applications, combined with MFA.' },
        { t: 'Optimized licensing', d: 'Choose the right plan for your needs and avoid waste.' },
        { t: 'Planned migration', d: 'Move email and data to the new platform with minimal disruption.' },
      ],
      offerings: ['Microsoft licensing advice and supply', 'Microsoft 365 deployment and email migration', 'Windows Server, Active Directory and Entra ID', 'Device and policy management', 'User training and support'],
      faq: [
        { q: 'How do we choose the right Microsoft 365 plan?', a: 'Based on number of users, security, storage and application needs. NAK assesses and recommends the most cost-effective plan.' },
        { q: 'Will we lose data migrating email to Microsoft 365?', a: 'Migration is planned and tested to preserve mailboxes, calendars and contacts, usually in waves of users.' },
        { q: 'Is there post-deployment support?', a: 'Yes. SLA-backed support as agreed in the contract.' },
      ],
    },
  },
  {
    id: 'aws', icon: 'cloud', vendors: ['aws'],
    vi: {
      title: 'AWS', tagline: 'Đưa hệ thống lên Amazon Web Services và vận hành theo mô hình hybrid',
      intro: 'Cloud cho phép mở rộng linh hoạt và rút ngắn thời gian triển khai. NAK tư vấn kiến trúc, di chuyển và vận hành hệ thống trên AWS, kết hợp với hạ tầng tại chỗ khi cần.',
      benefits: [
        { t: 'Mở rộng linh hoạt', d: 'Tăng giảm tài nguyên theo nhu cầu thực tế.' },
        { t: 'Hybrid thực tế', d: 'Kết hợp hạ tầng tại chỗ và cloud theo từng khối lượng công việc.' },
        { t: 'Kiểm soát chi phí', d: 'Thiết kế và giám sát để tránh phát sinh ngoài dự kiến.' },
        { t: 'Bảo mật và tuân thủ', d: 'Cấu hình theo thực hành tốt về phân quyền, mã hóa và ghi log.' },
      ],
      offerings: ['Đánh giá mức sẵn sàng và thiết kế kiến trúc', 'Di chuyển hệ thống lên AWS', 'Kết nối hybrid giữa trung tâm dữ liệu và AWS', 'Sao lưu và khôi phục thảm họa trên cloud', 'Giám sát, tối ưu chi phí và vận hành'],
      faq: [
        { q: 'Hybrid cloud có phổ biến không?', a: 'Gartner dự báo 90% tổ chức sẽ áp dụng cách tiếp cận hybrid cloud đến hết năm 2027. Hybrid cho phép giữ hệ thống nhạy cảm tại chỗ trong khi tận dụng cloud cho tải biến động.' },
        { q: 'Làm sao kiểm soát chi phí AWS?', a: 'Cần thiết kế kích thước phù hợp, gắn nhãn tài nguyên, đặt ngân sách và cảnh báo, rà soát định kỳ tài nguyên không dùng.' },
        { q: 'Hệ thống hiện tại có thể đưa lên AWS được không?', a: 'NAK đánh giá từng ứng dụng để chọn cách di chuyển phù hợp (giữ nguyên, tối ưu hoặc thiết kế lại) và lập lộ trình.' },
      ],
    },
    en: {
      title: 'AWS', tagline: 'Move workloads to Amazon Web Services and operate in a hybrid model',
      intro: 'The cloud offers flexible scaling and faster delivery. NAK advises on architecture, migration and operation on AWS, combined with on-premises infrastructure where needed.',
      benefits: [
        { t: 'Flexible scaling', d: 'Scale resources up and down with real demand.' },
        { t: 'Practical hybrid', d: 'Combine on-premises and cloud per workload.' },
        { t: 'Cost control', d: 'Design and monitoring to avoid unexpected spend.' },
        { t: 'Security & compliance', d: 'Configuration following good practice for access, encryption and logging.' },
      ],
      offerings: ['Readiness assessment and architecture design', 'Migration of workloads to AWS', 'Hybrid connectivity between data center and AWS', 'Cloud backup and disaster recovery', 'Monitoring, cost optimization and operations'],
      faq: [
        { q: 'Is hybrid cloud common?', a: 'Gartner forecasts that 90% of organizations will adopt a hybrid cloud approach through 2027. Hybrid lets you keep sensitive systems on-premises while using the cloud for variable workloads.' },
        { q: 'How do we control AWS costs?', a: 'Right-size resources, tag everything, set budgets and alerts, and regularly review unused resources.' },
        { q: 'Can our current systems move to AWS?', a: 'NAK assesses each application to choose a suitable migration approach (as-is, optimize or redesign) and builds a roadmap.' },
      ],
    },
  },
  {
    id: 'services', icon: 'wrench', vendors: ['dell', 'hpe', 'cisco', 'fortinet', 'microsoft', 'aws'],
    vi: {
      title: 'Professional Services', tagline: 'Dịch vụ chuyên nghiệp xuyên suốt vòng đời dự án',
      intro: 'Công nghệ chỉ phát huy giá trị khi được thiết kế, triển khai và vận hành đúng cách. Professional Services của NAK đồng hành từ tư vấn kiến trúc đến hỗ trợ dài hạn theo SLA.',
      benefits: [
        { t: 'Một đầu mối', d: 'Một đội ngũ chịu trách nhiệm xuyên suốt giữa các hãng và hạng mục.' },
        { t: 'Triển khai chuẩn', d: 'Quy trình, tài liệu và nghiệm thu rõ ràng ở từng giai đoạn.' },
        { t: 'Tại chỗ và từ xa', d: 'Linh hoạt theo yêu cầu địa điểm và thời gian của khách hàng.' },
        { t: 'Hỗ trợ theo SLA', d: 'Cam kết dịch vụ sau bàn giao theo thỏa thuận.' },
      ],
      offerings: ['Tư vấn kiến trúc và thiết kế giải pháp', 'Di chuyển và tích hợp nền tảng, hệ thống', 'Triển khai tại chỗ và từ xa', 'Giám sát và bảo mật vận hành', 'Bảo trì và hỗ trợ theo SLA'],
      faq: [
        { q: 'NAK làm việc với doanh nghiệp theo quy trình nào?', a: 'Khảo sát và tư vấn, thiết kế giải pháp, triển khai và kiểm thử, rồi vận hành và tối ưu. Báo giá và bàn giao được kiểm soát ở từng bước.' },
        { q: 'Có hỗ trợ ngoài giờ hành chính không?', a: 'Phạm vi và thời gian hỗ trợ được thỏa thuận trong hợp đồng SLA theo nhu cầu của từng khách hàng.' },
        { q: 'Có thể thuê NAK vận hành hạ tầng không?', a: 'Có thể thỏa thuận dịch vụ giám sát, bảo trì và hỗ trợ dài hạn. Hãy liên hệ để được tư vấn phạm vi phù hợp.' },
      ],
    },
    en: {
      title: 'Professional Services', tagline: 'Professional services across the whole project lifecycle',
      intro: 'Technology only delivers value when it is designed, deployed and operated properly. NAK Professional Services supports you from architecture consulting to long-term SLA-backed support.',
      benefits: [
        { t: 'Single point of contact', d: 'One team accountable across vendors and workstreams.' },
        { t: 'Standard delivery', d: 'Clear process, documentation and acceptance at every stage.' },
        { t: 'On-site and remote', d: 'Flexible to your location and timing needs.' },
        { t: 'SLA-backed support', d: 'Post-handover service commitments as agreed.' },
      ],
      offerings: ['Architecture consulting and solution design', 'Platform and system migration and integration', 'On-site and remote implementation', 'Monitoring and operational security', 'Maintenance and SLA-backed support'],
      faq: [
        { q: 'What process does NAK follow with customers?', a: 'Discovery and consulting, solution design, delivery and testing, then operate and optimize. Quotations and handover are controlled at each step.' },
        { q: 'Is out-of-hours support available?', a: 'Support scope and hours are agreed in the SLA contract according to each customer’s needs.' },
        { q: 'Can NAK operate our infrastructure?', a: 'Long-term monitoring, maintenance and support can be agreed. Contact us to discuss the right scope.' },
      ],
    },
  },
];
