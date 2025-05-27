function string_chop(str, size) {
  const result = [];
  for (let i = 0; i < str.length; i += size) {
    result.push(str.substr(i, size));
  }
  return result;
}

console.log(string_chop('developers', 2)); // ["de", "ve", "lo", "pe", "rs"]
console.log(string_chop('OpenAI', 3));     // ["Ope", "nAI"]
