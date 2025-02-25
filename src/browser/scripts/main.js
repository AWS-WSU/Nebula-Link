let shortener;

function initializeShortener() {
    try {
        shortener = new UrlShortener(window.location.origin);
    } catch (error) {
        console.error('Failed to initialize UrlShortener:', error);
    }
}

function shortenURL() {
    if (!shortener) {
        console.error('UrlShortener not initialized');
        return;
    }

    const urlInput = document.getElementById('urlInput');
    const shortUrlElement = document.getElementById('shortUrl');
    const resultContainer = document.getElementById('result');
    const copyButton = document.getElementById('copyButton');
    const errorElement = document.getElementById('error');

    try {
        const shortUrl = shortener.shortenUrl(urlInput.value);
        errorElement.style.display = 'none';
        resultContainer.style.display = 'block';
        shortUrlElement.textContent = shortUrl;
        copyButton.style.display = 'inline-block';
    } catch (error) {
        errorElement.textContent = error.message;
        errorElement.style.display = 'block';
        resultContainer.style.display = 'none';
    }
}

function copyToClipboard() {
    if (!shortener) {
        alert('Application is not initialized. Please try again.');
        return;
    }
    const shortUrl = document.getElementById('shortUrl').textContent;
    navigator.clipboard.writeText(shortUrl)
        .then(() => {
            const copyButton = document.getElementById('copyButton');
            copyButton.textContent = 'Copied!';
            setTimeout(() => {
                copyButton.textContent = 'Copy';
            }, 2000);
        })
        .catch(err => console.error('Failed to copy:', err));
}

// Initialize when the page loads
document.addEventListener('DOMContentLoaded', () => {
    initializeShortener();
});

// Make functions globally available
window.shortenURL = shortenURL;
window.copyToClipboard = copyToClipboard;
