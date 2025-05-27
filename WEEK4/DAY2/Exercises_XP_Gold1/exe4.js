// 1:
const array = [[1],[2],[3],[[[4]]],[[[5]]]];
const modifiedArray = [array[0][0], array[1][0], array[2][0], array[3][0], array[4][0]];
console.log(modifiedArray); // [1, 2, 3, [4], [5]]

// 2:
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
const greetingStrings = greeting.map(arr => arr.join(" "));
console.log(greetingStrings); // ["Hello young grasshopper!","you are","learning fast!"]

// 3:
const greetingStr = greeting.map(arr => arr.join(" ")).join(" ");
console.log(greetingStr); // 'Hello young grasshopper! you are learning fast!'

// 4:
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
const freed = trapped.flat(Infinity);
console.log(freed); // [3]
