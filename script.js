const canva = document.querySelector('.canva');
const slider = document.getElementById('grid-slider');

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