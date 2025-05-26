// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

// #1.1 - run in the console:
funcOne()
// Prediction: 
// - Inside funcOne, 'a' is d'abord 5, puis comme 5 > 1, il devient 3 dans le if. 
// - Donc l’alerte affichera "inside the funcOne function 3".

// #1.2 What will happen if the variable is declared 
// with const instead of let ?
// - Si 'a' est déclaré avec const, la ligne a = 3 provoque une ERREUR car on ne peut pas réassigner une constante.  
// - Donc la fonction plantera (TypeError).


// #2
let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree() // Affiche 0, car a = 0 n'a pas encore été modifié
funcTwo()   // Modifie la variable globale a, qui devient 5
funcThree() // Affiche 5, car a a été modifié dans funcTwo

// #2.2 What will happen if the variable is declared 
// with const instead of let ?
// - Si a est déclaré avec const, la ligne 'a = 5' dans funcTwo() provoquera une ERREUR car on ne peut pas réassigner une constante.
// - Donc funcTwo plantera avec une TypeError.


// #3
function funcFour() {
    window.a = "hello";
}


function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour()  // Déclare une propriété 'a' sur l'objet global (window), avec la valeur "hello"
funcFive()  // Affiche "inside the funcFive function hello"

// Prediction: 
// - window.a devient "hello", donc dans funcFive(), a est accessible globalement et vaut "hello".


// #4
let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}


// #4.1 - run in the console:
funcSix()
// Prediction: 
// - Dans funcSix(), il y a une nouvelle variable locale a, qui cache la variable globale. 
// - Donc, l’alerte affichera "inside the funcSix function test".

// #4.2 What will happen if the variable is declared 
// with const instead of let ?
// - Rien ne change si tu utilises const à la place de let, tant que tu ne réassignes pas la variable locale. 
// - La valeur affichée sera toujours "test".


// #5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// Prediction: 
// - Dans le bloc if, la variable a = 5 est LOCALE au bloc (grâce à let).
// - Donc, "in the if block 5" s’affichera.
// - Ensuite, hors du if, la variable globale a = 2, donc "outside of the if block 2" s’affichera.

// #5.2 What will happen if the variable is declared 
// with const instead of let ?
// - Même comportement qu’avec let, tant qu’on ne réassigne pas la variable dans le bloc. 
// - Si tu essaies de réassigner, ça plantera, mais ici ce n’est pas le cas.

