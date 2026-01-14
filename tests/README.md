# GHL Octane Performance Testing with Puppeteer

This directory contains comprehensive Puppeteer tests to verify the performance improvements and functionality of the GHL Octane website.

## Prerequisites

1. **Development Server Running**: Make sure your Next.js development server is running:
   ```bash
   npm run dev
   ```

2. **Dependencies Installed**: Ensure all testing dependencies are installed:
   ```bash
   npm install
   ```

## Running Tests

### Quick Performance Test
```bash
npm run test:performance
```

### Run All Tests
```bash
npm test
```

### Watch Mode (for development)
```bash
npm run test:watch
```

## Test Coverage

### 1. React Key Errors Test
- ✅ Verifies no "same key" console errors
- ✅ Tests the fixes we implemented for duplicate keys

### 2. Scrolling Performance Test
- ✅ Measures scroll performance across the homepage
- ✅ Tests smooth scrolling functionality
- ✅ Generates scroll timing metrics

### 3. Heavy Animation Sections Test
- ✅ CTA Section (FloatingLines WebGL animations)
- ✅ Industries Section (Swiper carousel)
- ✅ Testimonial Section (CounterOnScroll components)
- ✅ Website Showcase Section (dual infinite scroll)

### 4. Swiper Carousels Functionality
- ✅ Industries Swiper autoplay
- ✅ Partnership Swiper performance
- ✅ Dashboard Swiper functionality

### 5. CounterOnScroll Performance
- ✅ Animation timing optimization
- ✅ Intersection observer efficiency
- ✅ Target value accuracy

### 6. Mobile Responsiveness
- ✅ Mobile viewport testing
- ✅ FloatingLines mobile optimization
- ✅ Touch interaction performance

### 7. Performance Report Generation
- ✅ DOM Content Loaded timing
- ✅ First Paint metrics
- ✅ First Contentful Paint
- ✅ Total load time analysis

## Test Results

After running tests, check these files:
- `tests/performance-report.json` - Detailed performance metrics
- `tests/scroll-performance.json` - Scroll performance trace data

## Performance Benchmarks

### Expected Results (After Optimization):
- **First Contentful Paint**: < 3 seconds
- **Total Load Time**: < 10 seconds
- **Average Scroll Time**: < 1000ms per step
- **React Key Errors**: 0 errors
- **Console Errors**: Minimal/None

### Performance Improvements Made:
1. **FloatingLines**: Optimized scroll timeout (150ms → 100ms)
2. **Swiper Components**: Added `waitForTransition: false`
3. **CounterOnScroll**: Reduced animation steps (60 → 30 frames)
4. **Frame Rate**: Capped at 60fps with 16ms minimum delay

## Troubleshooting

### Common Issues:

1. **Development server not running**
   ```bash
   npm run dev
   ```

2. **Port 3000 in use**
   - Update `baseUrl` in `performance.test.js`
   - Or kill process using port 3000

3. **Puppeteer installation issues**
   ```bash
   npm install puppeteer --save-dev
   ```

4. **Tests timing out**
   - Increase timeout in `jest.config.js`
   - Check if website is loading properly

## Test Configuration

- **Browser**: Chromium (via Puppeteer)
- **Viewport**: 1920x1080 (desktop), 375x667 (mobile)
- **Timeout**: 60 seconds per test
- **Headless**: Disabled for debugging (set to true for CI/CD)

## Continuous Integration

For CI/CD environments, update `tests/setup.js`:
```javascript
global.testConfig = {
  headless: true,  // Enable headless mode
  devtools: false, // Disable devtools
  slowMo: 0       // Remove slow motion
};
```
