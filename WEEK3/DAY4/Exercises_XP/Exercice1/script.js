const h1 = document.querySelector("h1");
console.log(h1);

const article = document.querySelector("article");
const lastParagraph = article.querySelector("p:last-of-type");
lastParagraph.remove();

const h2 = document.querySelector("h2");
h2.addEventListener("click", function() {
  h2.style.backgroundColor = "red";
});

const h3 = document.querySelector("h3");
h3.addEventListener("click", function() {
  h3.style.display = "none";
});


const boldBtn = document.getElementById("boldBtn");
boldBtn.addEventListener("click", function() {
  const paragraphs = article.querySelectorAll("p");
  paragraphs.forEach(p => p.style.fontWeight = "bold");
});


h1.addEventListener("mouseover", function() {
  const randomSize = Math.floor(Math.random() * 101); // 0 à 100 px
  h1.style.fontSize = randomSize + "px";
});

const secondParagraph = article.querySelectorAll("p")[1];
secondParagraph.addEventListener("mouseover", function() {
  secondParagraph.classList.add("fade-out");
});
