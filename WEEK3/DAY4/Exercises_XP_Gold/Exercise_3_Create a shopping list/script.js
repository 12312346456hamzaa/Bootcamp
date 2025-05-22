let shoppingList = [];

const root = document.getElementById('root');

const form = document.createElement('form');
form.onsubmit = function(e) { e.preventDefault(); addItem(); };

const input = document.createElement('input');
input.type = "text";
input.placeholder = "Enter item...";
input.id = "itemInput";

const addButton = document.createElement('button');
addButton.type = "submit";
addButton.textContent = "AddItem";


const ul = document.createElement('ul');


const clearBtn = document.createElement('button');
clearBtn.type = "button";
clearBtn.textContent = "ClearAll";
clearBtn.onclick = clearAll;


form.appendChild(input);
form.appendChild(addButton);
root.appendChild(form);
root.appendChild(clearBtn);
root.appendChild(ul);


function addItem() {
    const value = input.value.trim();
    if (value !== "") {
        shoppingList.push(value);
        renderList();
        input.value = "";
        input.focus();
    }
}


function renderList() {
    ul.innerHTML = ""; 
    shoppingList.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
    });
}


function clearAll() {
    shoppingList = [];
    renderList();
}
