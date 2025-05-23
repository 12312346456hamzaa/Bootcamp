const planets = [
  { name: "Mercury", moons: 0, colorClass: "mercury" },
  { name: "Venus", moons: 0, colorClass: "venus" },
  { name: "Earth", moons: 1, colorClass: "earth" },
  { name: "Mars", moons: 2, colorClass: "mars" },
  { name: "Jupiter", moons: 79, colorClass: "jupiter" },
  { name: "Saturn", moons: 83, colorClass: "saturn" },
  { name: "Uranus", moons: 27, colorClass: "uranus" },
  { name: "Neptune", moons: 14, colorClass: "neptune" }
];

const style = document.createElement('style');
style.innerHTML = `
  .mercury { background: gray; }
  .venus   { background: #d4af37; }
  .earth   { background: #2e82ff; }
  .mars    { background: #c1440e; }
  .jupiter { background: #debe77; }
  .saturn  { background: #f5e9a4; }
  .uranus  { background: #68d8d6; }
  .neptune { background: #4b70dd; }
`;
document.head.appendChild(style);

const section = document.querySelector('.listPlanets');

planets.forEach(planet => {
  
  const planetDiv = document.createElement('div');
  planetDiv.classList.add('planet', planet.colorClass);
  planetDiv.textContent = planet.name;

  for (let i = 0; i < planet.moons; i++) {
    const moon = document.createElement('div');
    moon.classList.add('moon');

    const angle = (i % 8) * (2 * Math.PI / 8);
    const radius = 60 + 20 * Math.floor(i / 8);
    moon.style.left = 35 + radius * Math.cos(angle) + 'px';
    moon.style.top  = 35 + radius * Math.sin(angle) + 'px';
  
    if (i < 20) planetDiv.appendChild(moon);
  }

  section.appendChild(planetDiv);
});
