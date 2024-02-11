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

// Function to play audio when the user scrolls down to the photo section
function playAudioOnScroll() {
    const audio = new Audio('audio/your-song.mp3');
    let audioPlayed = false;

    window.addEventListener('scroll', function() {
        const photoSection = document.querySelector('.parallax');
        const photoSectionTop = photoSection.getBoundingClientRect().top;

        if (!audioPlayed && photoSectionTop < window.innerHeight) {
            audio.play();
            audioPlayed = true;
        }
    });
}

// Call the parallaxEffect function and playAudioOnScroll function when the page loads
window.onload = function() {
    parallaxEffect();
    playAudioOnScroll();
};
