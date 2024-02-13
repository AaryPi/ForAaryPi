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

// Function to play audio when the page loads
function playAudio() {
    const audio = new Audio('audio/your-song.mp3');
    audio.play();
}

// Call the fadeInEffect, parallaxEffect, and playAudio functions when the page loads
window.onload = function() {
    fadeInEffect();
    parallaxEffect();
    playAudio();
};
