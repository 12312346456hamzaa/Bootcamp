let allBoldItems;

function getBoldItems() {
  allBoldItems = document.querySelectorAll("#myParagraph strong");
}

function highlight() {
  getBoldItems();
  allBoldItems.forEach(item => item.style.color = "blue");
}

function returnItemsToDefault() {
  allBoldItems.forEach(item => item.style.color = "black");
}

const para = document.getElementById("myParagraph");
para.addEventListener("mouseover", highlight);
para.addEventListener("mouseout", returnItemsToDefault);
