const API_URL = "http://localhost:5000/api/items";

function fetchItems() {
  fetch(API_URL)
    .then(res => res.json())
    .then(data => {
      const menu = document.getElementById("menu-list");
      menu.innerHTML = "";
      data.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `${item.name} - ${item.price} MAD 
          <button onclick="deleteItem('${item.name}')">Supprimer</button>
          <button onclick="showUpdate('${item.name}', ${item.price})">Modifier</button>`;
        menu.appendChild(li);
      });
    });
}

function addItem() {
  const name = document.getElementById("name").value;
  const price = parseInt(document.getElementById("price").value);
  fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, price })
  }).then(() => fetchItems());
}

function deleteItem(name) {
  fetch(`${API_URL}/${name}`, { method: "DELETE" }).then(() => fetchItems());
}

function showUpdate(oldName, oldPrice) {
  const newName = prompt("Nouveau nom :", oldName);
  const newPrice = prompt("Nouveau prix :", oldPrice);
  if (newName && newPrice) {
    fetch(`${API_URL}/${oldName}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newName, price: parseInt(newPrice) })
    }).then(() => fetchItems());
  }
}

window.onload = fetchItems;
