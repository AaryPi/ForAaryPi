// Function to handle fade-in effect
function fadeInEffect() {
    const fadeElements = document.querySelectorAll('.fade-in');

    window.addEventListener('scroll', function() {
        const windowHeight = window.innerHeight;
        const scrollPosition = window.scrollY + windowHeight * 0.8; // Adjust fade-in trigger point

        fadeElements.forEach(function(element) {
            if (element.offsetTop < scrollPosition) {
                element.classList.add('visible');
            }
        });
    });
}

// Call the fadeInEffect function when the page loads
window.onload = function() {
    fadeInEffect();
};
