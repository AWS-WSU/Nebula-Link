const UrlShortener = require('../src/lib/urlShortener');

describe('UrlShortener Class Tests', () => {
    let shortener;
    const TEST_BASE_URL = 'http://test.com';

    beforeEach(() => {
        shortener = new UrlShortener(TEST_BASE_URL);
    });

    test('should generate a short code with exactly 6 characters', () => {
        const shortCode = shortener.generateShortCode();
        expect(shortCode.length).toBe(6, 
            'Your generateShortCode() method should return a string that is exactly 6 characters long. ' +
            'Check your string manipulation in the method.');
    });

    test('should correctly validate URLs', () => {
        expect(shortener.isValidUrl('https://www.example.com')).toBe(true, 
            'Your URL validator should accept standard HTTPS URLs like "https://www.example.com"');
        
        expect(shortener.isValidUrl('http://localhost:3000')).toBe(true, 
            'Your URL validator should accept localhost URLs like "http://localhost:3000"');
        
        expect(shortener.isValidUrl('not-a-url')).toBe(false, 
            'Your URL validator should reject invalid URLs that don\'t follow the http:// or https:// pattern');
    });

    test('should throw a clear error message for invalid URLs', () => {
        expect(() => {
            shortener.shortenUrl('not-a-url');
        }).toThrow('Invalid URL', 
            'When given an invalid URL, your shortenUrl() method should throw an error with the message "Invalid URL"');
    });

    test('should generate different short URLs for different inputs', () => {
        const url1 = shortener.shortenUrl('https://example1.com');
        const url2 = shortener.shortenUrl('https://example2.com');
        
        expect(url1).not.toBe(url2, 
            'Your shortenUrl() method should generate unique shortened URLs for different inputs. ' +
            'Check that your code creates a unique short code for each URL.');
    });

    test('should correctly store and retrieve long URLs', () => {
        const longUrl = 'https://example.com/very/long/url';
        const shortUrl = shortener.shortenUrl(longUrl);
        const shortCode = shortUrl.split('/').pop();
        
        expect(shortener.getLongUrl(shortCode)).toBe(longUrl, 
            'Your getLongUrl() method should return the original URL when given a short code. ' +
            'Make sure your shortener properly stores URLs in the database and can retrieve them.');
    });
});
