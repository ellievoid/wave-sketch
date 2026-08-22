const canva = document.querySelector('.canva');
const slider = document.getElementById('grid-slider');

let isPointerDown = false;

// Prevents unwanted selection or dragging of text or elements
window.addEventListener('pointerdown', (e) => {
    if (e.target.closest('.canva')) {
        e.preventDefault();
    }
    isPointerDown = true;
});

window.addEventListener('pointerup', () => {
    isPointerDown = false;
});

// Helper function for colouring a pixel
function colorPixel(target) {
    if (target.classList.contains('pixel')) {
        target.style.backgroundColor = 'var(--color-cyan-300)';
    }
}

// Event delegation on the Canva container rather than on all child elements
canva.addEventListener('pointerdown', (e) => {
    colorPixel(e.target);
});

canva.addEventListener('pointermove', (e) => {
    if (isPointerDown) {
    const position = document.elementFromPoint(e.clientX, e.clientY);
    colorPixel(position);
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