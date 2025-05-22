const form = document.querySelector("form");
console.log(form);


const inputFname = document.getElementById("fname");
const inputLname = document.getElementById("lname");
console.log(inputFname, inputLname);


const inputByNameFirst = document.getElementsByName("firstname")[0];
const inputByNameLast = document.getElementsByName("lastname")[0];
console.log(inputByNameFirst, inputByNameLast);


form.addEventListener("submit", function(event) {
  event.preventDefault(); 
  
  
  const firstNameValue = inputFname.value.trim();
  const lastNameValue = inputLname.value.trim();


  if (firstNameValue === "" || lastNameValue === "") {
    alert("Both fields must be filled!");
    return;
  }

  const ul = document.querySelector(".usersAnswer");
  ul.innerHTML = ""; 
  
  const li1 = document.createElement("li");
  li1.textContent = firstNameValue;
  ul.appendChild(li1);

  const li2 = document.createElement("li");
  li2.textContent = lastNameValue;
  ul.appendChild(li2);

  inputFname.value = "";
  inputLname.value = "";
});
