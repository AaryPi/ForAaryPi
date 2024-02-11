window.addEventListener('scroll', function() {
    let offset = window.pageYOffset;
    document.querySelectorAll('.parallax-image').forEach(function(el, i) {
        el.style.backgroundPositionY = -offset * 0.5 + 'px'; // Adjust the factor for parallax speed
    });
});
