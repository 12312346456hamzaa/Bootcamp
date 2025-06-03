// 1ère fonction 
function makeAllCaps(words) {
  return new Promise((resolve, reject) => {
    if (words.every(word => typeof word === "string")) {
      resolve(words.map(word => word.toUpperCase()));
    } else {
      reject("All items must be strings");
    }
  });
}

// 2ème fonction 
function sortWords(words) {
  return new Promise((resolve, reject) => {
    if (words.length > 4) {
      resolve(words.sort());
    } else {
      reject("Array length must be bigger than 4");
    }
  });
}

// Test 1 : catch exécuté (il y a un nombre dans le tableau)
makeAllCaps([1, "pear", "banana"])
  .then(arr => sortWords(arr))
  .then(result => console.log(result))
  .catch(error => console.log(error)); 

// Test 2 : catch exécuté (longueur <= 4)
makeAllCaps(["apple", "pear", "banana"])
  .then(arr => sortWords(arr))
  .then(result => console.log(result))
  .catch(error => console.log(error)); 

// Test 3 : réussite, affichage du tableau trié et en majuscules
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
  .then(arr => sortWords(arr))
  .then(result => console.log(result)) 
  .catch(error => console.log(error));
