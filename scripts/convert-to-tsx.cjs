const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, '../components/Components');

function renameJsxToTsx(dir) {
  const items = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    
    if (item.isDirectory()) {
      renameJsxToTsx(fullPath);
    } else if (item.name.endsWith('.jsx')) {
      const newPath = fullPath.replace('.jsx', '.tsx');
      fs.renameSync(fullPath, newPath);
      console.log(`Renamed: ${fullPath} -> ${newPath}`);
    }
  }
}

console.log('Starting JSX to TSX conversion...');
renameJsxToTsx(componentsDir);
console.log('Conversion complete!');
