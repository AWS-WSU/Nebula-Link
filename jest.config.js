module.exports = {
    testEnvironment: 'jsdom',  // Changed from 'node' to 'jsdom'
    roots: ['<rootDir>/test'],
    testMatch: ['**/*.test.js'],
    coverageDirectory: 'coverage',
    collectCoverageFrom: ['src/**/*.js'],
    setupFiles: ['<rootDir>/test/setup.js']
};
