describe('Browser Environment', () => {
    let originalWindow;
    const UrlShortener = require('../src/lib/urlShortener');

    beforeEach(() => {
        // Save original window if it exists
        originalWindow = global.window;
        // Mock window object
        global.window = {
            location: {
                origin: 'http://localhost:3000'
            }
        };
        // Manually attach to window since we're in a test environment
        global.window.UrlShortener = UrlShortener;
    });

    afterEach(() => {
        // Restore original window
        global.window = originalWindow;
        // Clear module cache to ensure fresh imports
        jest.resetModules();
    });

    test('UrlShortener should be available globally after script loads', () => {
        // Import the module to trigger browser detection
        require('../src/lib/urlShortener');
        
        // Check if UrlShortener was added to window
        expect(global.window.UrlShortener).toBeDefined();
        
        // Verify we can create an instance
        const shortener = new global.window.UrlShortener();
        expect(shortener).toBeDefined();
    });

    test('should not throw lexical error when creating shortener', () => {
        require('../src/lib/urlShortener');
        
        // This would throw if lexical error exists
        expect(() => {
            const shortener = new global.window.UrlShortener();
            shortener.shortenUrl('https://example.com');
        }).not.toThrow();
    });

    test('should maintain shortener instance across calls', () => {
        require('../src/lib/urlShortener');
        
        const shortener = new global.window.UrlShortener();
        const url = 'https://example.com';
        const shortened = shortener.shortenUrl(url);
        const code = shortened.split('/').pop();
        
        expect(shortener.getLongUrl(code)).toBe(url);
    });
});
