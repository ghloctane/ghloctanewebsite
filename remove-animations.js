// Script to remove AnimateOnScroll from all files
// Run with: node remove-animations.js

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Find all JSX files with AnimateOnScroll
const files = execSync('grep -r "AnimateOnScroll" src --include="*.jsx" -l', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(Boolean);

console.log(`Found ${files.length} files with AnimateOnScroll`);

files.forEach(file => {
  try {
    let content = fs.readFileSync(file, 'utf8');
    let modified = false;

    // Remove import statement
    const importRegex = /import\s+AnimateOnScroll\s+from\s+["'][^"']+["'];?\n?/g;
    if (importRegex.test(content)) {
      content = content.replace(importRegex, '');
      modified = true;
    }

    // Remove AnimateOnScroll wrapper tags (simple cases)
    // This regex handles: <AnimateOnScroll ...>content</AnimateOnScroll>
    // Note: This is a simplified version - complex nested cases may need manual fixing
    const wrapperRegex = /<AnimateOnScroll[^>]*>([\s\S]*?)<\/AnimateOnScroll>/g;
    if (wrapperRegex.test(content)) {
      content = content.replace(wrapperRegex, '$1');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(file, content, 'utf8');
      console.log(`✓ Updated: ${file}`);
    }
  } catch (error) {
    console.error(`✗ Error processing ${file}:`, error.message);
  }
});

console.log('\nDone! Please review the changes and fix any complex nested cases manually.');
