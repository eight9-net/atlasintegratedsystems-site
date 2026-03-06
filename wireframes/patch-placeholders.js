// patch-placeholders.js
// Converts solid #dedede image-placeholder rects to hachure pattern.
// Hachure = diagonal lines — standard wireframe image-area convention,
// minimal ink when printing.

const fs = require('fs');

const files = require('fs').readdirSync('.').filter(f => f.endsWith('.excalidraw'));

files.forEach(file => {
  const d = JSON.parse(fs.readFileSync(file, 'utf8'));
  let count = 0;

  d.elements = d.elements.map(el => {
    if (
      el.type === 'rectangle' &&
      (el.backgroundColor || '').toLowerCase() === '#dedede'
    ) {
      count++;
      return {
        ...el,
        backgroundColor: 'transparent',
        fillStyle: 'hachure',
        strokeColor: '#9ca3af',
        strokeWidth: 1,
        hachureAngle: -41,
        hachureGap: 10,
      };
    }
    return el;
  });

  fs.writeFileSync(file, JSON.stringify(d, null, 2));
  console.log(`${file.replace('wireframes/', '').padEnd(32)} placeholders updated: ${count}`);
});
