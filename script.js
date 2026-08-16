const canva = document.querySelector('.canva');
const slider = document.getElementById('grid-slider');

let isMouseDown = false;

window.addEventListener('mousedown', () => {
    isMouseDown = true;
});

window.addEventListener('mouseup', () => {
    isMouseDown = false;
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

        pixel.addEventListener('mousedown', () => {
            pixel.style.backgroundColor = "var(--color-cyan-300)";
        })
        pixel.addEventListener('mouseenter', () => {
           if (isMouseDown === true) {
             pixel.style.backgroundColor = "var(--color-cyan-300)";
            }
        })
    }
    canva.appendChild(fragment);
}

slider.addEventListener('input', (e) => {
    createGrid(e.target.value);
});

createGrid(slider.value);