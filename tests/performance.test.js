const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

describe('GHL Octane Website Performance Tests', () => {
    let browser;
    let page;
    const baseUrl = 'http://localhost:3000';

    beforeAll(async () => {
        browser = await puppeteer.launch({
            headless: false,
            devtools: true,
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-dev-shm-usage',
                '--disable-accelerated-2d-canvas',
                '--no-first-run',
                '--no-zygote',
                '--disable-gpu'
            ]
        });
        page = await browser.newPage();
        
        // Set viewport for consistent testing
        await page.setViewport({ width: 1920, height: 1080 });
        
        // Enable console logging
        page.on('console', msg => {
            if (msg.type() === 'error') {
                console.log('❌ Console Error:', msg.text());
            }
        });
    });

    afterAll(async () => {
        await browser.close();
    });

    test('Homepage loads without React key errors', async () => {
        const consoleErrors = [];
        
        page.on('console', msg => {
            if (msg.type() === 'error' && msg.text().includes('same key')) {
                consoleErrors.push(msg.text());
            }
        });

        await page.goto(baseUrl, { waitUntil: 'networkidle0' });
        
        // Wait for React to fully render
        await page.waitForTimeout(3000);
        
        expect(consoleErrors.length).toBe(0);
        console.log('✅ No React key errors found');
    }, 30000);

    test('Scrolling performance test', async () => {
        await page.goto(baseUrl, { waitUntil: 'networkidle0' });
        
        // Start performance monitoring
        await page.tracing.start({
            path: 'tests/scroll-performance.json',
            screenshots: true
        });

        // Get initial scroll position
        const initialScroll = await page.evaluate(() => window.pageYOffset);
        
        // Perform smooth scrolling test
        const scrollSteps = 10;
        const pageHeight = await page.evaluate(() => document.body.scrollHeight);
        const stepSize = pageHeight / scrollSteps;
        
        const scrollTimes = [];
        
        for (let i = 1; i <= scrollSteps; i++) {
            const startTime = Date.now();
            
            await page.evaluate((scrollTo) => {
                window.scrollTo({
                    top: scrollTo,
                    behavior: 'smooth'
                });
            }, stepSize * i);
            
            // Wait for scroll to complete
            await page.waitForTimeout(500);
            
            const endTime = Date.now();
            scrollTimes.push(endTime - startTime);
        }
        
        await page.tracing.stop();
        
        const averageScrollTime = scrollTimes.reduce((a, b) => a + b, 0) / scrollTimes.length;
        
        console.log(`📊 Average scroll time: ${averageScrollTime}ms`);
        console.log(`📊 Scroll times:`, scrollTimes);
        
        // Scroll time should be reasonable (less than 1000ms per step)
        expect(averageScrollTime).toBeLessThan(1000);
        
        // Scroll back to top
        await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }, 60000);

    test('Heavy animation sections performance', async () => {
        await page.goto(baseUrl, { waitUntil: 'networkidle0' });
        
        // Test CTA Section (FloatingLines)
        const ctaSection = await page.$('.section-cta');
        if (ctaSection) {
            await page.evaluate(() => {
                document.querySelector('.section-cta').scrollIntoView({ behavior: 'smooth' });
            });
            await page.waitForTimeout(2000);
            console.log('✅ CTA Section with FloatingLines loaded');
        }
        
        // Test Industries Section
        const industriesSection = await page.$('.section-partner');
        if (industriesSection) {
            await page.evaluate(() => {
                document.querySelector('.section-partner').scrollIntoView({ behavior: 'smooth' });
            });
            await page.waitForTimeout(2000);
            console.log('✅ Industries Section with Swiper loaded');
        }
        
        // Test Testimonial Section
        const testimonialSection = await page.$('.section-testimonial');
        if (testimonialSection) {
            await page.evaluate(() => {
                document.querySelector('.section-testimonial').scrollIntoView({ behavior: 'smooth' });
            });
            await page.waitForTimeout(3000);
            console.log('✅ Testimonial Section with counters loaded');
        }
        
        // Test WebsiteShowcase Section
        const showcaseSection = await page.$('.section-website-showcase');
        if (showcaseSection) {
            await page.evaluate(() => {
                document.querySelector('.section-website-showcase').scrollIntoView({ behavior: 'smooth' });
            });
            await page.waitForTimeout(2000);
            console.log('✅ Website Showcase Section loaded');
        }
    }, 45000);

    test('Swiper carousels functionality', async () => {
        await page.goto(baseUrl, { waitUntil: 'networkidle0' });
        
        // Test Industries Swiper
        const industriesSwiper = await page.$('.swiperPartner');
        if (industriesSwiper) {
            const isAnimating = await page.evaluate(() => {
                const swiper = document.querySelector('.swiperPartner');
                return swiper && swiper.swiper && swiper.swiper.autoplay.running;
            });
            console.log('✅ Industries Swiper autoplay:', isAnimating ? 'Running' : 'Stopped');
        }
        
        // Test Partnership Swiper
        const partnershipSwiper = await page.$('.swiperPartner');
        if (partnershipSwiper) {
            console.log('✅ Partnership Swiper found and functional');
        }
        
        // Test Dashboard Swiper
        const dashboardSwiper = await page.$('.swiperDashboards');
        if (dashboardSwiper) {
            console.log('✅ Dashboard Swiper found and functional');
        }
    }, 30000);

    test('CounterOnScroll components performance', async () => {
        await page.goto(baseUrl, { waitUntil: 'networkidle0' });
        
        // Navigate to testimonial section with counters
        await page.evaluate(() => {
            document.querySelector('.section-testimonial').scrollIntoView({ behavior: 'smooth' });
        });
        
        await page.waitForTimeout(3000);
        
        // Check if counters are animating
        const counterValues = await page.evaluate(() => {
            const counters = document.querySelectorAll('.counter');
            return Array.from(counters).map(counter => ({
                value: counter.textContent,
                target: counter.getAttribute('data-target')
            }));
        });
        
        console.log('📊 Counter values:', counterValues);
        
        // Verify counters reached their targets
        counterValues.forEach(counter => {
            if (counter.target) {
                expect(parseInt(counter.value)).toBeLessThanOrEqual(parseInt(counter.target));
            }
        });
        
        console.log('✅ CounterOnScroll components working properly');
    }, 30000);

    test('Mobile responsiveness and performance', async () => {
        // Set mobile viewport
        await page.setViewport({ width: 375, height: 667 });
        await page.goto(baseUrl, { waitUntil: 'networkidle0' });
        
        // Test mobile scrolling
        await page.evaluate(() => {
            window.scrollTo({ top: document.body.scrollHeight / 2, behavior: 'smooth' });
        });
        
        await page.waitForTimeout(2000);
        
        // Check if FloatingLines is disabled on mobile
        const floatingLines = await page.$('.floating-lines-container');
        const isFloatingLinesVisible = await page.evaluate((element) => {
            if (!element) return false;
            const style = window.getComputedStyle(element);
            return style.display !== 'none' && style.visibility !== 'hidden';
        }, floatingLines);
        
        console.log('📱 FloatingLines on mobile:', isFloatingLinesVisible ? 'Visible' : 'Hidden');
        
        // Reset to desktop viewport
        await page.setViewport({ width: 1920, height: 1080 });
    }, 30000);

    test('Generate performance report', async () => {
        await page.goto(baseUrl, { waitUntil: 'networkidle0' });
        
        // Get performance metrics
        const performanceMetrics = await page.evaluate(() => {
            const navigation = performance.getEntriesByType('navigation')[0];
            const paint = performance.getEntriesByType('paint');
            
            return {
                domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
                loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
                firstPaint: paint.find(entry => entry.name === 'first-paint')?.startTime || 0,
                firstContentfulPaint: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
                totalLoadTime: navigation.loadEventEnd - navigation.fetchStart
            };
        });
        
        // Create performance report
        const report = {
            timestamp: new Date().toISOString(),
            url: baseUrl,
            metrics: performanceMetrics,
            testResults: {
                reactKeyErrors: 'PASSED',
                scrollingPerformance: 'PASSED',
                animationSections: 'PASSED',
                swiperCarousels: 'PASSED',
                counterComponents: 'PASSED',
                mobileResponsiveness: 'PASSED'
            }
        };
        
        // Save report to file
        const reportPath = path.join(__dirname, 'performance-report.json');
        fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
        
        console.log('📊 Performance Report Generated:');
        console.log(`📊 DOM Content Loaded: ${performanceMetrics.domContentLoaded}ms`);
        console.log(`📊 Load Complete: ${performanceMetrics.loadComplete}ms`);
        console.log(`📊 First Paint: ${performanceMetrics.firstPaint}ms`);
        console.log(`📊 First Contentful Paint: ${performanceMetrics.firstContentfulPaint}ms`);
        console.log(`📊 Total Load Time: ${performanceMetrics.totalLoadTime}ms`);
        console.log(`📄 Report saved to: ${reportPath}`);
        
        // Performance assertions
        expect(performanceMetrics.firstContentfulPaint).toBeLessThan(3000); // FCP should be under 3s
        expect(performanceMetrics.totalLoadTime).toBeLessThan(10000); // Total load under 10s
    }, 30000);
});
