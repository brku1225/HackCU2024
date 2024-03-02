document.addEventListener('mousemove', function(e) {
    const illumination = document.querySelector('.illumination');
    illumination.style.transform = `translate(${e.clientX - 50}px, ${e.clientY - 50}px)`; // Adjust for the size of the illumination
});