// Mock window.location for all tests
Object.defineProperty(window, 'location', {
    value: {
        origin: 'http://localhost:3000'
    },
    writable: true
});

// Print helpful messages at the beginning of test runs
console.log('\n🚀 Running Nebula Link tests...');
console.log('💡 These tests check if your URL shortener meets the requirements.');
console.log('📝 Read the error messages carefully - they contain hints about what to fix!');
console.log('❗ If tests are failing, that\'s expected until you implement the TODOs.\n');

// We'll avoid using any Jest lifecycle hooks in this setup file
// to prevent any potential issues
