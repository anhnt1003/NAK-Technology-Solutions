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
  services:
    `${teeth}<circle cx="24" cy="24" r="11" ${F}/><circle cx="24" cy="24" r="4.5"/>`,
};

function proIcon(id, size = 36) {
  const body = BODY[id] || BODY[id === 'cloud' ? 'aws' : 'services'];
  return `<svg class="pro-icon" width="${size}" height="${size}" viewBox="0 0 48 48" fill="none" stroke="url(#nakG)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${body}</svg>`;
}

module.exports = { proIcon };
