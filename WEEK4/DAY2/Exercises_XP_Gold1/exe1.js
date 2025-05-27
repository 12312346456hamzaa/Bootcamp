[1, 2, 3].map(num => {
  if (typeof num === 'number') return num * 2;
  return;
});
/* 
Le résultat sera un nouveau tableau avec chaque valeur multipliée par 2 :
[2, 4, 6]

*/
