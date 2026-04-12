let currentWidth = 800;

function changeZoom(amount) {
    const images = document.querySelectorAll('.pages-container img');
    currentWidth += amount;
    
    // Limits
    if (currentWidth < 400) currentWidth = 400;
    if (currentWidth > 1200) currentWidth = 1200;

    images.forEach(img => {
        img.style.maxWidth = currentWidth + 'px';
    });
}
