// Promise résout avec la valeur 3
const resolvedPromise = Promise.resolve(3);

// Promise rejette avec "Boo!"
const rejectedPromise = Promise.reject("Boo!");

// afficher le résultat ou l’erreur
resolvedPromise.then(result => console.log(result));    // Affiche: 3
rejectedPromise.catch(error => console.log(error));     // Affiche: Boo!
