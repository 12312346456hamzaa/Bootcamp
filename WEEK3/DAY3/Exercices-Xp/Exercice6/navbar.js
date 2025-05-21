// 1
const navDiv = document.getElementById("navBar");
navDiv.setAttribute("id", "socialNetworkNavigation");

// 2
const ul = document.querySelector("#socialNetworkNavigation ul");
const newLi = document.createElement("li");
const textNode = document.createTextNode("Logout");
newLi.appendChild(textNode);
ul.appendChild(newLi);

// 3
const firstLi = ul.firstElementChild;
const lastLi = ul.lastElementChild;
console.log("First link:", firstLi.textContent.trim());
console.log("Last link:", lastLi.textContent.trim());
