// Mock window.location for all tests
Object.defineProperty(window, 'location', {
    value: {
        origin: 'http://localhost:3000'
    },
    writable: true
});
