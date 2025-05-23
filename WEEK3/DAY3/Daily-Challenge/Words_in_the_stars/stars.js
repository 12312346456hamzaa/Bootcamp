const input = prompt("Entrez plusieurs mots séparés par des virgules :");
const words = input.split(",").map(w => w.trim());

const maxLength = Math.max(...words.map(w => w.length));

const border = '*'.repeat(maxLength + 4);

console.log(border);

for (let word of words) {
    const spaces = ' '.repeat(maxLength - word.length);
    console.log(`* ${word}${spaces} *`);
}

console.log(border);
