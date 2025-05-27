const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
    console.log(num, i);
    alert(num);
    return num * 2;
});
/*
ce qui sera affiché dans console :

1 0
2 1
4 2
5 3
8 4
9 5

*/