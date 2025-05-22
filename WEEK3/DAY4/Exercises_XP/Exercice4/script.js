document.getElementById("MyForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche la page de se recharger

    // Récupérer la valeur du rayon
    const radiusInput = document.getElementById("radius");
    const volumeInput = document.getElementById("volume");

    const r = parseFloat(radiusInput.value);

    // Vérifier que le rayon est bien un nombre positif
    if (isNaN(r) || r <= 0) {
        volumeInput.value = "Invalid radius!";
        return;
    }

    // Calcul du volume d'une sphère : V = (4/3) * π * r^3
    const volume = (4 / 3) * Math.PI * Math.pow(r, 3);

    // Afficher le volume, arrondi à 2 décimales
    volumeInput.value = volume.toFixed(2);
});
