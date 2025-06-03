const morse = `{
  "0": "-----", "1": ".----", "2": "..---", "3": "...--", "4": "....-", "5": ".....", "6": "-....", "7": "--...", "8": "---..", "9": "----.",
  "a": ".-", "b": "-...", "c": "-.-.", "d": "-..", "e": ".", "f": "..-.", "g": "--.", "h": "....", "i": "..", "j": ".---", "k": "-.-",
  "l": ".-..", "m": "--", "n": "-.", "o": "---", "p": ".--.", "q": "--.-", "r": ".-.", "s": "...", "t": "-", "u": "..-", "v": "...-",
  "w": ".--", "x": "-..-", "y": "-.--", "z": "--..", ".": ".-.-.-", ",": "--..--", "?": "..--..", "!": "-.-.--", "-": "-....-",
  "/": "-..-.", "@": ".--.-.", "(": "-.--.", ")": "-.--.-"
}`;

// 1. Convertit le JSON en objet JS, résout ou rejette selon le contenu
function toJs() {
  return new Promise((resolve, reject) => {
    let morseJS;
    try {
      morseJS = JSON.parse(morse);
    } catch (err) {
      reject("JSON invalid !");
      return;
    }
    if (Object.keys(morseJS).length === 0) {
      reject("Morse JS object is empty");
    } else {
      resolve(morseJS);
    }
  });
}

// 2. Demande à l'utilisateur une phrase, la traduit si possible, rejette sinon
function toMorse(morseJS) {
  return new Promise((resolve, reject) => {
    const userInput = prompt("Enter a word or a sentence to translate to Morse:").toLowerCase();
    const morseArr = [];
    for (let char of userInput) {
      if (char === " ") { // Pour gérer les espaces
        morseArr.push(""); // Ligne vide pour les espaces
      } else if (morseJS[char]) {
        morseArr.push(morseJS[char]);
      } else {
        reject(`Character "${char}" does not exist in Morse code!`);
        return;
      }
    }
    resolve(morseArr);
  });
}

// 3. Affiche la traduction sur la page
function joinWords(morseTranslation) {
  // Affiche chaque code Morse sur une ligne, dans une <pre> pour garder la mise en forme
  const pre = document.createElement("pre");
  pre.textContent = morseTranslation.join('\n');
  document.body.appendChild(pre);
}

// Chaînage des fonctions
toJs()
  .then(toMorse)
  .then(joinWords)
  .catch(err => {
    // Affichage de l’erreur sur la page
    const p = document.createElement("p");
    p.textContent = err;
    p.style.color = "red";
    document.body.appendChild(p);
  });


