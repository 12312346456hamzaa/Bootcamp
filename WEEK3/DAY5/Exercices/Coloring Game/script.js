
const grid = document.getElementById('grid');
const clearBtn = document.getElementById('clear');
const colorBtns = document.querySelectorAll('.color-btn');

let selectedColor = 'red';
let mouseDown = false;

// 1. Palette
colorBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    colorBtns.forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    selectedColor = btn.getAttribute('data-color');
  });
});
colorBtns[0].classList.add('selected');

// 2. Créer la grille
const gridSize = 16 * 16;
for (let i = 0; i < gridSize; i++) {
  const div = document.createElement('div');
  div.className = 'square';

  // Click
  div.addEventListener('mousedown', (e) => {
    mouseDown = true;
    div.style.background = selectedColor;
  });

  // dessiner en glissant
  div.addEventListener('mouseover', (e) => {
    if (mouseDown) {
      div.style.background = selectedColor;
    }
  });

  // Empêche le drag image
  div.addEventListener('dragstart', e => e.preventDefault());

  grid.appendChild(div);
}

// 3. Relâcher le clic
document.body.addEventListener('mouseup', () => {
  mouseDown = false;
});

// 4. Effacer
clearBtn.addEventListener('click', () => {
  document.querySelectorAll('.square').forEach(div => {
    div.style.background = '#eee';
  });
});
