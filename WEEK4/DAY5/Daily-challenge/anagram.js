function isAnagram(str1, str2) {
  
  let cleanStr1 = str1.replace(/\s+/g, '').toLowerCase();
  let cleanStr2 = str2.replace(/\s+/g, '').toLowerCase();
  
  let sortedStr1 = cleanStr1.split('').sort().join('');
  let sortedStr2 = cleanStr2.split('').sort().join('');
  
  return sortedStr1 === sortedStr2;
}

// Exemples d'utilisation :
console.log(isAnagram("Astronomer", "Moon starer"));        // true
console.log(isAnagram("School master", "The classroom"));   // true
console.log(isAnagram("Hello", "World"));                   // false
