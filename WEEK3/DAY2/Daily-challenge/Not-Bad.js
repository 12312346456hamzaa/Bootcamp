//Définir la phrase
let sentence = "The movie is not that bad, I like it";

//Trouver la position de "not" et "bad"
let wordNot = sentence.indexOf("not");
let wordBad = sentence.indexOf("bad");

//Vérifier si "bad" vient après "not"
if (wordNot !== -1 && wordBad !== -1 && wordBad > wordNot) {
  // Remplacer de "not" jusqu'à "bad" (inclus) par "good"
  let result = sentence.slice(0, wordNot) + "good" + sentence.slice(wordBad + 3);
  console.log(result);
} else {
  // Sinon, afficher la phrase originale
  console.log(sentence);
}
