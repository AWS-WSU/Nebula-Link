const UrlShortener = require('../src/lib/urlShortener');

describe('UrlShortener', () => {
    let shortener;
    const TEST_BASE_URL = 'http://test.com';

    beforeEach(() => {
        shortener = new UrlShortener(TEST_BASE_URL);
    });

    test('should generate a short code of length 6', () => {
        const shortCode = shortener.generateShortCode();
        expect(shortCode.length).toBe(6);
    });

    test('should validate correct URLs', () => {
        expect(shortener.isValidUrl('https://www.example.com')).toBe(true);
        expect(shortener.isValidUrl('http://localhost:3000')).toBe(true);
        expect(shortener.isValidUrl('not-a-url')).toBe(false);
    });

    test('should throw error for invalid URLs', () => {
        expect(() => {
            shortener.shortenUrl('not-a-url');
        }).toThrow('Invalid URL');
    });

    test('should generate different short URLs for different inputs', () => {
        const url1 = shortener.shortenUrl('https://example1.com');
        const url2 = shortener.shortenUrl('https://example2.com');
        expect(url1).not.toBe(url2);
    });

    test('should store and retrieve long URLs', () => {
        const longUrl = 'https://example.com/very/long/url';
        const shortUrl = shortener.shortenUrl(longUrl);
        const shortCode = shortUrl.split('/').pop();
        expect(shortener.getLongUrl(shortCode)).toBe(longUrl);
    });
});
