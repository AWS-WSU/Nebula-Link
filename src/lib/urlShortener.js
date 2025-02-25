class UrlShortener {
    constructor(baseUrl = 'http://localhost:3000') {
        this.urlDatabase = new Map();
        this.baseUrl = baseUrl;
    }

    generateShortCode() {
        return Math.random().toString(36).substring(2, 8);
    }

    shortenUrl(longUrl) {
        if (!this.isValidUrl(longUrl)) {
            throw new Error('Invalid URL');
        }

        const shortCode = this.generateShortCode();
        this.urlDatabase.set(shortCode, longUrl);
        return `${this.baseUrl}/${shortCode}`;
    }

    getLongUrl(shortCode) {
        return this.urlDatabase.get(shortCode);
    }

    isValidUrl(url) {
        try {
            new URL(url);
            return true;
        } catch {
            return false;
        }
    }
}

// Export handling for different environments
if (typeof window !== 'undefined') {
    // Browser environment
    window.UrlShortener = UrlShortener;
} 

// Always export for Node.js/testing environment
module.exports = UrlShortener;
