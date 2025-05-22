// Part I:

setTimeout(function() {
    alert("Hello World");
}, 2000);

// Part II: 

setTimeout(function() {
    const container = document.getElementById('container');
    const p = document.createElement('p');
    p.textContent = "Hello World";
    container.appendChild(p);
}, 2000);

// Part III: 

let count = 0;
const container = document.getElementById('container');
const intervalId = setInterval(function() {
    if (count >= 5) {
        clearInterval(intervalId);
        return;
    }
    const p = document.createElement('p');
    p.textContent = "Hello World";
    container.appendChild(p);
    count++;
}, 2000);

document.getElementById('clear').onclick = function() {
    clearInterval(intervalId);
};
