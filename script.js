// Function to handle parallax scrolling effect
function parallaxEffect() {
    const parallaxImages = document.querySelectorAll('.parallax-image');

    window.addEventListener('scroll', function() {
        parallaxImages.forEach(function(image) {
            const scrollPosition = window.scrollY;
            const imageOffset = image.offsetTop;
            const distance = (scrollPosition - imageOffset) * 0.5;

            image.style.transform = 'translateY(' + distance + 'px)';
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
