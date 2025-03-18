// DO NOT TOUCH THIS FILE
// This file serves as a re-export of the original urlShortener
// It allows tests to import from '../src/lib/urlShortener' while maintaining the original file structure
// Import the original urlShortener implementation
const UrlShortener = require('../urlShortener');

// Re-export using the same module.exports
module.exports = UrlShortener;
