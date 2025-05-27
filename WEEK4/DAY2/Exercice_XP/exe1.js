const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// Affichage des couleurs avec l’ordre demandé
for (let i = 0; i < colors.length; i++) {
    console.log(`${i + 1}# choice is ${colors[i]}.`);
}

if (colors.includes("Violet")) {
    console.log("Yeah");
} else {
    console.log("No...");
}

/*
Résultat
1# choice is Blue.
2# choice is Green.
3# choice is Red.
4# choice is Orange.
5# choice is Violet.
6# choice is Indigo.
7# choice is Yellow.
Yeah
*/
