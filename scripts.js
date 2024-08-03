function searchProducts() {
    const searchQuery = document.getElementById('search').value;
    document.getElementById('results').innerHTML = `Searching for: ${searchQuery}`;
}

function startTryOn() {
    const uploadInput = document.getElementById('upload');
    if (uploadInput.files.length > 0) {
        document.getElementById('virtualTryOn').innerHTML = 'Starting virtual try-on...';
    } else {
        document.getElementById('virtualTryOn').innerHTML = 'Please upload a photo.';
    }
}

function completePurchase() {
    alert('Purchase completed!');
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
