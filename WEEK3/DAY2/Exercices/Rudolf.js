const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
};

let sentence = "";

//  Construction de la phrase
for (let key in details) {
  sentence += key + " " + details[key] + " ";
}

console.log(sentence.trim()); // 👉 "my name is Rudolf the reindeer"
