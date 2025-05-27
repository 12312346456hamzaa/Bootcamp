const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const epicSentence = epic.reduce((acc, word) => acc + " " + word);

console.log(epicSentence);
// Résultat : "a long time ago in a galaxy far far away"
