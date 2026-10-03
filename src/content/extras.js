// Optional real content. Each section on the site renders ONLY when its data is present.
// Fill these in when real material is available (see CONTENT-REQUEST.md). Nothing here is invented.
module.exports = {
  // Detailed case studies, keyed by the project index in data.projectMedia (0 = Terumo, 1 = Atlas+, 2 = SCSC).
  // Example shape:
  // 0: { vi: { challenge: '...', solution: '...', results: ['...'], tech: ['Cisco', '...'], duration: '...' }, en: { ... } }
  projectDetails: {},

  // Customer quotes (only with the customer's written consent).
  // { name: 'Nguyễn Văn A', role: 'IT Manager', company: 'Terumo', vi: '...', en: '...' }
  testimonials: [],

  // Leadership / team members shown on the About page.
  // { name: '...', photo: '/img/team/a.jpg', vi: { role: '...' }, en: { role: '...' } }
  team: [],

  // Concrete service-level commitments (shown on Solutions and Contact pages).
  // { vi: [{ label: 'Phản hồi sự cố khẩn', value: '...' }], en: [...] }
  sla: null,
};
