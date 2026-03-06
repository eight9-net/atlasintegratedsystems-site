const fs = require('fs');
const files = require('fs').readdirSync('.').filter(f => f.endsWith('.excalidraw'));
const KEEP = ['#dedede','#4466cc'];

files.forEach(f => {
  const d = JSON.parse(fs.readFileSync(f));
  const strayBg = d.elements.filter(e => {
    if (e.type !== 'rectangle') return false;
    const bg = (e.backgroundColor || '').toLowerCase();
    return bg && bg !== 'transparent' && !KEEP.includes(bg);
  });
  const blueRects = d.elements.filter(e =>
    e.type === 'rectangle' && (e.backgroundColor||'').toLowerCase() === '#4466cc'
  );
  const orphanWhite = d.elements.filter(e => {
    if (e.type !== 'text') return false;
    if ((e.strokeColor||'').toLowerCase() !== '#ffffff') return false;
    const cx = e.x + e.width/2, cy = e.y + e.height/2;
    return !blueRects.some(r =>
      cx >= r.x && cx <= r.x + r.width && cy >= r.y && cy <= r.y + r.height
    );
  });
  const ok = strayBg.length === 0 && orphanWhite.length === 0;
  const name = f;
  if (ok) {
    console.log(name + ': OK');
  } else {
    console.log(name + ': ISSUES');
    strayBg.forEach(e => console.log('  stray-bg: ' + e.id + ' = ' + e.backgroundColor));
    orphanWhite.forEach(e => console.log('  orphan-white: ' + e.id + ' "' + e.text.substring(0,40) + '"'));
  }
});
