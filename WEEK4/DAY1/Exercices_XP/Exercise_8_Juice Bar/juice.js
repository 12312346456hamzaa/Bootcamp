function makeJuice(size) {
    // Part II : 
    const ingredients = [];

    // Ajoute 3 ingrédients à chaque appel
    function addIngredients(ing1, ing2, ing3) {
        ingredients.push(ing1, ing2, ing3);
    }

    // Affiche la phrase finale avec tous les ingrédients
    function displayJuice() {
        const sentence = `The client wants a ${size} juice, containing ${ingredients.join(', ')}.`;
        const p = document.createElement('p');
        p.textContent = sentence;
        document.body.appendChild(p);
    }

    // On ajoute 6 ingrédients en deux appels
    addIngredients('orange', 'strawberry', 'pineapple');
    addIngredients('mango', 'peach', 'lemon');

    // On affiche la commande finale
    displayJuice();
}

// On exécute la fonction avec la taille souhaitée
makeJuice('medium');
