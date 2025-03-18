class UrlShortener {
    /**
     * TODO: Implement the constructor that initializes the URL database and base URL
     * (hint: use a Map to store shortened URLs and set a default base URL)
     */
    constructor(baseUrl = 'http://localhost:3000') {
        // Initialize URL database and base URL
    }

    /**
     * TODO: Implement a method to generate a random short code
     * (hint: use Math.random and convert to a base-36 string)
     */
    generateShortCode() {
        // Generate and return a random short code
    }

    /**
     * TODO: Implement a method to create a shortened URL
     * (hint: validate the URL, generate a code, store in the database, and return the full short URL)
     */
    shortenUrl(longUrl) {
        // Validate the URL
        
        // Generate a short code
        
        // Store the mapping
        
        // Return the full shortened URL
    }

    /**
     * TODO: Implement a method to retrieve the original URL from a short code
     * (hint: look up the short code in the database)
     */
    getLongUrl(shortCode) {
        // Return the original URL for the given short code
    }

    /**
     * TODO: Implement a method to validate URLs
     * (hint: try creating a URL object and catch any errors)
     */
    isValidUrl(url) {
        // Return true if valid, false otherwise
    }
}

// Export handling for different environments
// No need to touch this part 
if (typeof window !== 'undefined') {
    // Browser environment
    window.UrlShortener = UrlShortener;
} 

// Always export for Node.js/testing environment
module.exports = UrlShortener;
