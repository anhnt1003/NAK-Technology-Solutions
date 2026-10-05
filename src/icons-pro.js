// Custom duotone icon set for the 8 solution groups.
// 48x48 grid, gradient stroke (url(#nakG), defined once in the page head) + soft translucent fill + accent dots.
const F = 'fill="rgba(255,122,61,0.14)"';
const D = 'fill="#ff9a5c" stroke="none"';

const teeth = Array.from({ length: 8 }, (_, k) =>
  `<rect x="21.5" y="3.5" width="5" height="7" rx="1.8" transform="rotate(${k * 45} 24 24)" ${F}/>`
).join('');

const BODY = {
  server:
    `<rect x="7" y="6" width="34" height="11" rx="3.5" ${F}/><rect x="7" y="19" width="34" height="11" rx="3.5" ${F}/><rect x="7" y="32" width="34" height="11" rx="3.5" ${F}/>` +
    `<circle cx="13.5" cy="11.5" r="1.7" ${D}/><circle cx="13.5" cy="24.5" r="1.7" ${D}/><circle cx="13.5" cy="37.5" r="1.7" ${D}/>` +
    `<path d="M21 11.5h14M21 24.5h14M21 37.5h14"/>`,
  storage:
    `<path d="M8 12v24c0 3.3 7.2 6 16 6s16-2.7 16-6V12" ${F}/><ellipse cx="24" cy="12" rx="16" ry="6" ${F}/>` +
    `<path d="M8 24c0 3.3 7.2 6 16 6s16-2.7 16-6"/><circle cx="33" cy="36.5" r="1.7" ${D}/>`,
  network:
    `<rect x="17" y="5" width="14" height="11" rx="3" ${F}/><rect x="4" y="32" width="14" height="11" rx="3" ${F}/><rect x="30" y="32" width="14" height="11" rx="3" ${F}/>` +
    `<path d="M24 16v9M11 32v-4a3 3 0 0 1 3-3h20a3 3 0 0 1 3 3v4"/><circle cx="24" cy="25" r="1.9" ${D}/><circle cx="24" cy="10.5" r="1.6" ${D}/>`,
  security:
    `<path d="M24 4l16 6v12c0 10-7 17-16 22C15 39 8 32 8 22V10z" ${F}/><path d="M16 24l6 6 11-12"/>`,
  client:
    `<rect x="5" y="8" width="38" height="26" rx="4" ${F}/><path d="M17 41h14M24 34v7"/><path d="M11 15h10M11 20h6" opacity=".55"/><circle cx="37" cy="15" r="1.7" ${D}/>`,
  microsoft:
    `<rect x="7" y="7" width="15" height="15" rx="3.5" ${F}/><rect x="26" y="7" width="15" height="15" rx="3.5" ${F}/><rect x="7" y="26" width="15" height="15" rx="3.5" ${F}/><rect x="26" y="26" width="15" height="15" rx="3.5" ${F}/>` +
    `<circle cx="33.5" cy="33.5" r="1.9" ${D}/>`,
  aws:
    `<path d="M14 37a9 9 0 0 1-1.3-17.9A12 12 0 0 1 35.9 17 9 9 0 0 1 35 37z" ${F}/><path d="M24 32V22M19.5 26.5L24 22l4.5 4.5"/>`,
  // delivery capability
  'd-consult':
    `<rect x="6" y="7" width="36" height="34" rx="4.5" ${F}/><path d="M6 17h36"/><path d="M13 25h12M13 31h8" opacity=".6"/><circle cx="34" cy="30" r="5.5" ${F}/><path d="M34 30l2.6-2.6"/><circle cx="12" cy="12" r="1.5" ${D}/>`,
  'd-migrate':
    `<rect x="4" y="15" width="14" height="18" rx="3.5" ${F}/><rect x="30" y="15" width="14" height="18" rx="3.5" ${F}/><path d="M21 20h6M25 16.5l3 3.5-3 3.5"/><path d="M27 29h-6M23 25.5l-3 3.5 3 3.5"/><circle cx="11" cy="24" r="1.7" ${D}/>`,
  'd-deploy':
    `<path d="M24 4c7 3.5 11 10.5 11 19l-5 5H18l-5-5c0-8.500 4-15.500 11-19z" ${F}/><circle cx="24" cy="18" r="3.4"/><path d="M18 28l-5.5 6.500 6.500-1.500M30 28l5.500 6.500-6.500-1.500"/><path d="M21.500 33.500L24 43l2.500-9.500"/><circle cx="24" cy="18" r="1" ${D}/>`,
  'd-secure':
    `<path d="M24 4l16 6v12c0 10-7 17-16 22C15 39 8 32 8 22V10z" ${F}/><path d="M14.500 24c3-5 6-7.500 9.500-7.500s6.500 2.500 9.500 7.500c-3 5-6 7.500-9.500 7.500S17.500 29 14.500 24z"/><circle cx="24" cy="24" r="2.800" ${D}/>`,
  'd-support':
    `<path d="M9 27v-5a15 15 0 0 1 30 0v5"/><rect x="5.500" y="25" width="8.500" height="13" rx="3.800" ${F}/><rect x="34" y="25" width="8.500" height="13" rx="3.800" ${F}/><path d="M38.500 38c0 4.500-4.500 6-11 6"/><circle cx="26.500" cy="44" r="1.700" ${D}/>`,
  'd-integrate':
    `<rect x="9" y="5" width="30" height="38" rx="4.500" ${F}/><path d="M15 15h12M15 24.500h12M15 34h12" opacity=".7"/><circle cx="33" cy="15" r="1.700" ${D}/><circle cx="33" cy="24.500" r="1.700" ${D}/><circle cx="33" cy="34" r="1.700" ${D}/>`,
  // sectors
  'i-bank':
    `<path d="M5 18L24 6l19 12z" ${F}/><path d="M11 22.500v13M19 22.500v13M29 22.500v13M37 22.500v13"/><rect x="5" y="38" width="38" height="5" rx="2" ${F}/><circle cx="24" cy="13" r="1.700" ${D}/>`,
  'i-health':
    `<path d="M24 41S5 30 5 17a9.500 9.500 0 0 1 19-3.500A9.500 9.500 0 0 1 43 17c0 13-19 24-19 24z" ${F}/><path d="M11 24h8l3.500-7 4.500 12 3-5h7"/><circle cx="38" cy="24" r="1.600" ${D}/>`,
  'i-energy':
    `<circle cx="24" cy="24" r="19" ${F}/><path d="M27.500 9L14.500 26.500h8.500L20.500 39 34 21h-8.500z" ${F}/><circle cx="36" cy="12" r="1.700" ${D}/>`,
  'i-telecom':
    `<path d="M16.500 12.500a11 11 0 0 0 0 17M31.500 12.500a11 11 0 0 1 0 17"/><path d="M20.500 16.500a5.500 5.500 0 0 0 0 9M27.500 16.500a5.500 5.500 0 0 1 0 9" opacity=".7"/><path d="M24 24v19M17 43l7-17 7 17" ${F}/><path d="M19.500 36h9"/><circle cx="24" cy="21" r="2.800" ${D}/>`,
  'i-edu':
    `<path d="M24 8L3.500 18.500 24 29l20.500-10.500z" ${F}/><path d="M12 23.500v10c0 3.200 5.500 6 12 6s12-2.800 12-6v-10"/><path d="M44.500 18.500V31"/><circle cx="44.500" cy="32.500" r="1.700" ${D}/>`,
  services:
    `${teeth}<circle cx="24" cy="24" r="11" ${F}/><circle cx="24" cy="24" r="4.5"/>`,
};

function proIcon(id, size = 36) {
  const body = BODY[id] || BODY[id === 'cloud' ? 'aws' : 'services'];
  return `<svg class="pro-icon" width="${size}" height="${size}" viewBox="0 0 48 48" fill="none" stroke="url(#nakG)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${body}</svg>`;
}

module.exports = { proIcon };
