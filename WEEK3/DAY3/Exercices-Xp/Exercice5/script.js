// 1
const container = document.getElementById('container');
console.log(container);

// 2
const ulLists = document.querySelectorAll('.list');
ulLists[0].children[1].textContent = "Richard";

// 3
ulLists[1].removeChild(ulLists[1].children[1]);

// 4
ulLists.forEach(ul => ul.children[0].textContent = "Jihane");

// 5
ulLists.forEach(ul => ul.classList.add("student_list"));

// 6
ulLists[0].classList.add("university", "attendance");

// 7
container.style.backgroundColor = "lightblue";
container.style.padding = "10px";

// 8
const liList2 = ulLists[1].children;
for (let li of liList2) {
  if (li.textContent === "Dan") {
    li.style.display = "none";
  }
}

// 9
const liList1 = ulLists[0].children;
for (let li of liList1) {
  if (li.textContent === "Richard") {
    li.style.border = "2px solid red";
  }
}

// 10
document.body.style.fontSize = "18px";

// BONUS: 
if (container.style.backgroundColor === "lightblue") {
  const userNames = [];
  ulLists.forEach(ul => {
    
    for (let li of ul.children) {
      if (li.style.display !== "none") {
        userNames.push(li.textContent);
      }
    }
  });
  alert(`Hello ${userNames[0]} and ${userNames[1]}`);
}
