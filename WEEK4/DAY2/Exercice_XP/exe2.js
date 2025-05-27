const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th", "st", "nd", "rd"];

// Fonction pour obtenir le suffixe ordinal correct
function getOrdinalSuffix(n) {
    if (n === 1) return ordinal[1];
    if (n === 2) return ordinal[2];
    if (n === 3) return ordinal[3];
    return ordinal[0];
}

// Affichage du résultat avec le bon suffixe
for (let i = 0; i < colors.length; i++) {
    const suffix = getOrdinalSuffix(i + 1);
    console.log(`${i + 1}${suffix} choice is ${colors[i]}.`);
}

