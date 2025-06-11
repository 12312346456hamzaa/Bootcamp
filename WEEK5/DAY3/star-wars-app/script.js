window.addEventListener('DOMContentLoaded', () => {
  // On crée le canvas S'IL N'EXISTE PAS déjà
  if (!document.querySelector('.stars')) {
    const starLayer = document.createElement('canvas');
    starLayer.className = 'stars';
    document.body.appendChild(starLayer);

    function drawStars() {
      const ctx = starLayer.getContext('2d');
      starLayer.width = window.innerWidth;
      starLayer.height = window.innerHeight;
      ctx.clearRect(0, 0, starLayer.width, starLayer.height);
      for (let i = 0; i < 200; i++) {
        const x = Math.random() * starLayer.width;
        const y = Math.random() * starLayer.height;
        const r = Math.random() * 1.1 + 0.1;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.fillStyle = "#fff";
        ctx.globalAlpha = Math.random() * 0.6 + 0.4;
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    }
    drawStars();
    window.addEventListener('resize', drawStars);
  }
});

// === Fond étoilé animé (canvas) ===
window.addEventListener('DOMContentLoaded', () => {
  const starLayer = document.createElement('canvas');
  starLayer.className = 'stars';
  document.body.appendChild(starLayer);

  const ctx = starLayer.getContext('2d');
  function resizeStars() {
    starLayer.width = window.innerWidth;
    starLayer.height = window.innerHeight;
    drawStars();
  }
  function drawStars() {
    ctx.clearRect(0, 0, starLayer.width, starLayer.height);
    for (let i = 0; i < 180; i++) {
      const x = Math.random() * starLayer.width;
      const y = Math.random() * starLayer.height;
      const r = Math.random() * 0.8 + 0.2;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, 2 * Math.PI);
      ctx.fillStyle = 'white';
      ctx.globalAlpha = Math.random() * 0.5 + 0.5;
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  }
  resizeStars();
  window.addEventListener('resize', resizeStars);
});

// === Fonctionnalité Star Wars App ===
const card = document.getElementById('card');
const btn = document.getElementById('findBtn');

// Fonction pour générer un ID aléatoire entre 1 et 83
function getRandomId() {
  return Math.floor(Math.random() * 83) + 1;
}

async function showCharacter() {
  card.innerHTML = `
    <div>
      <i class="fas fa-spinner"></i>
      <br>Loading...
    </div>
  `;

  const id = getRandomId();

  try {
    // Données du personnage
    const res = await fetch(`https://www.swapi.tech/api/people/${id}`);
    if (!res.ok) throw new Error("Person not available");

    const data = await res.json();
    const person = data.result.properties;

    // Données planète d'origine (homeworld)
    const homeRes = await fetch(person.homeworld);
    const homeData = await homeRes.json();

    // Affichage infos
    card.innerHTML = `
      <strong>${person.name}</strong><br><br>
      Height: ${person.height}<br>
      Gender: ${person.gender}<br>
      Birth Year: ${person.birth_year}<br>
      Home World: ${homeData.result.properties.name}
    `;
  } catch (err) {
    card.innerHTML = `
      <strong>Oh No! That person isn't available.</strong>
    `;
  }
}

// Premier personnage au chargement
showCharacter();

// Nouveau personnage au clic
btn.addEventListener('click', showCharacter);
