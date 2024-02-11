// Function to handle parallax scrolling effect
function parallaxEffect() {
    const parallaxImages = document.querySelectorAll('.parallax img');

    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;

        parallaxImages.forEach(function(image, index) {
            const imageOffset = image.offsetTop;
            const distanceFromTop = imageOffset - scrollPosition;
            const visibleThreshold = windowHeight * 0.7; // Adjust visibility threshold as needed

            if (distanceFromTop < visibleThreshold) {
                const distance = (scrollPosition - imageOffset) * 0.5;
                image.style.transform = 'translateY(' + distance + 'px)';
            } else {
                image.style.transform = 'none'; // Reset transform if image is not visible
            }
        });
    });
}

// Call the parallaxEffect function when the page loads
window.onload = function() {
    parallaxEffect();
};

// Function to log a message to the console
function testFunction() {
    console.log("JavaScript is working!");
}

// Call the testFunction when the page loads
window.onload = function() {
    testFunction();
};
