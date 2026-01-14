const { spawn } = require('child_process');
const path = require('path');

console.log('🚀 Starting GHL Octane Performance Tests...\n');

// Ensure the development server is running
console.log('📋 Prerequisites:');
console.log('   ✅ Make sure your Next.js dev server is running on http://localhost:3000');
console.log('   ✅ Run: npm run dev (in another terminal)\n');

// Run the Puppeteer tests
const testProcess = spawn('npx', ['jest', 'tests/performance.test.js', '--verbose'], {
    cwd: path.resolve(__dirname, '..'),
    stdio: 'inherit',
    shell: true
});

testProcess.on('close', (code) => {
    if (code === 0) {
        console.log('\n✅ All tests passed successfully!');
        console.log('📊 Check tests/performance-report.json for detailed metrics');
    } else {
        console.log('\n❌ Some tests failed. Check the output above for details.');
    }
    process.exit(code);
});

testProcess.on('error', (error) => {
    console.error('❌ Error running tests:', error.message);
    process.exit(1);
});
