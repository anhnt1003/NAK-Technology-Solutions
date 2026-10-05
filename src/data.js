// Non-text data shared by both languages.
module.exports = {
  clients: [
    ['Terumo BCT', 'terumo'], ['Atlas+', 'atlas'], ['SCSC', 'scsc'], ['SGS', 'sgs', 'svg'],
    ['Renesas', 'renesas'], ['Boston Scientific', 'boston-scientific'], ['TÜV SÜD', 'tuv-sud'], ['Decathlon', 'decathlon'],
    ['BayWa r.e.', 'baywa'], ['Bejo', 'bejo'], ['EY', 'ey'], ['Otsuka', 'otsuka'],
  ],
  vendors: [
    ['Lenovo', 'lenovo'], ['Dell Technologies', 'dell'], ['Hewlett Packard Enterprise', 'hpe'], ['HP', 'hp'],
    ['Cisco', 'cisco'], ['Fortinet', 'fortinet'], ['Microsoft', 'microsoft'], ['Amazon Web Services', 'aws'],
  ],
  // Project cards: client logo + photo shown on the card
  projectMedia: [
    { client: ['Terumo BCT', 'terumo'], photo: 'network' },
    { client: ['Atlas', 'atlas'], photo: 'building' },
    { client: ['SCSC', 'scsc'], photo: 'skyline' },
    { client: ['Decathlon', 'decathlon'], photo: 'glass' },
  ],
  // Customers for whom NAK supplies the complete range of client devices
  clientSupply: [['Boston Scientific', 'boston-scientific'], ['BayWa r.e.', 'baywa'], ['TÜV SÜD', 'tuv-sud'], ['SGS', 'sgs', 'svg']],
  solutionIcons: ['server', 'database', 'network', 'shield', 'monitor', 'layers', 'cloud', 'wrench'],
  industryIcons: ['i-bank', 'i-health', 'i-energy', 'i-telecom', 'i-edu'],
  deliveryIcons: ['d-consult', 'd-migrate', 'd-deploy', 'd-secure', 'd-support', 'd-integrate'],
};
