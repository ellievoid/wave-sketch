const canva = document.querySelector('.canva');
const slider = document.getElementById('grid-slider');

let isMouseDown = false;

// Prevents unwanted selection or dragging of text or elements
window.addEventListener('mousedown', (e) => {
    if (e.target.closest('canva')) {
        e.preventDefault();
    }
    isMouseDown = true;
});

window.addEventListener('mouseup', () => {
    isMouseDown = false;
});

// Helper function for colouring a pixel
function colorPixel(target) {
    if (target.classList.contains('pixel')) {
        target.style.backgroundColor = 'var(--color-cyan-300)';
    }
}

// Event delegation on the Canva container rather than on all child elements
canva.addEventListener('mousedown', (e) => {
    colorPixel(e.target);
});

canva.addEventListener('mouseover', (e) => {
    if (isMouseDown) {
        colorPixel(e.target);
    }
});

function createGrid(size) {
    /* reset old grid */
    canva.innerHTML = '';

    canva.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    canva.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    /* create performant fragment */
    const fragment = document.createDocumentFragment();
    const totalPixels = size * size;

    for (let i = 0; i < totalPixels; i++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        fragment.appendChild(pixel);
    }
    canva.appendChild(fragment);
}

slider.addEventListener('input', (e) => {
    createGrid(e.target.value);
});

createGrid(slider.value);