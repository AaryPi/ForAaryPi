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

// Function to play audio when triggered by user interaction
function playAudio() {
    const audio = new Audio('audio/your-song.mp3');
    audio.play();
}

// Call the fadeInEffect function when the page loads
document.addEventListener('DOMContentLoaded', function() {
    fadeInEffect();
});

// Event listener to play audio when the user interacts with the document
document.addEventListener('click', function() {
    playAudio();
});
