// Jest setup file for Puppeteer tests

// Increase timeout for all tests
jest.setTimeout(60000);

// Global test configuration
global.testConfig = {
  baseUrl: 'http://localhost:3000',
  headless: false, // Set to true for CI/CD
  slowMo: 100, // Slow down actions for better visibility
  devtools: true
};

// Console setup for better test output
const originalConsoleLog = console.log;
console.log = (...args) => {
  const timestamp = new Date().toISOString().split('T')[1].split('.')[0];
  originalConsoleLog(`[${timestamp}]`, ...args);
};
