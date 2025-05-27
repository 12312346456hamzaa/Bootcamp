function search_word(str, word) {
  // On sépare la phrase en mots avec split()
  const words = str.split(' ');
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i] === word) {
      count++;
    }
  }
  return `'${word}' was found ${count} times.`;
}

console.log(search_word('The quick brown fox', 'fox')); 
// 'fox' found 1 times.

console.log(search_word('The fox jumped over the fox', 'fox')); 
// 'fox' found 2 times.
