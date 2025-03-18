describe('Browser Environment Tests', () => {
    let originalWindow;
    const UrlShortener = require('../src/lib/urlShortener');

    beforeEach(() => {
        originalWindow = global.window;
        global.window = {
            location: {
                origin: 'http://localhost:3000'
            }
        };
        // Manually attach to window since we're in a test environment
        global.window.UrlShortener = UrlShortener;
    });

    afterEach(() => {
        global.window = originalWindow;
        jest.resetModules();
    });

    test('UrlShortener should be available globally when script loads', () => {
        require('../src/lib/urlShortener');
        
        expect(global.window.UrlShortener).toBeDefined(
            'The UrlShortener class should be attached to the window object in browser environments. ' +
            'Make sure your export handling is properly set up.');
        
        // Verify we can create an instance
        const shortener = new global.window.UrlShortener();
        expect(shortener).toBeDefined(
            'Should be able to create a new UrlShortener instance in the browser. ' +
            'Check your class definition and constructor.');
    });

    test('should not have syntax or lexical errors when creating a shortener', () => {
        require('../src/lib/urlShortener');
        
        // This would throw if lexical error exists
        expect(() => {
            const shortener = new global.window.UrlShortener();
            shortener.shortenUrl('https://example.com');
        }).not.toThrow(
            'Your code should execute without errors when used in a browser environment. ' +
            'Check your syntax and method implementations.');
    });

    test('should maintain URL mappings across multiple calls', () => {
        require('../src/lib/urlShortener');
        
        const shortener = new global.window.UrlShortener();
        const url = 'https://example.com';
        const shortened = shortener.shortenUrl(url);
        const code = shortened.split('/').pop();
        
        expect(shortener.getLongUrl(code)).toBe(url,
            'Your URL database should persist URLs during the lifetime of the shortener instance. ' +
            'Check that you\'re properly storing and retrieving URLs from your database.');
    });
});
