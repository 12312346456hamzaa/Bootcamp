const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
const form = document.getElementById("gif-form");
const input = document.getElementById("category-input");
const container = document.getElementById("gif-container");
const deleteAllBtn = document.getElementById("delete-all");

form.addEventListener("submit", async function(e) {
  e.preventDefault();
  const category = input.value.trim();
  if (!category) return;

  const url = `https://api.giphy.com/v1/gifs/random?tag=${encodeURIComponent(category)}&api_key=${apiKey}`;
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    if (!data.data || !data.data.images) throw new Error("No GIF found!");

    const gifUrl = data.data.images.fixed_height.url;
    appendGif(gifUrl);
  } catch (error) {
    alert("Error: " + error.message);
  }
  form.reset();
});


function appendGif(gifUrl) {
  const card = document.createElement("div");
  card.className = "gif-card";

  const img = document.createElement("img");
  img.src = gifUrl;
  img.alt = "GIF";
  img.height = 200;

  const delBtn = document.createElement("button");
  delBtn.textContent = "DELETE";
  delBtn.className = "delete-btn";
  delBtn.onclick = () => card.remove();

  card.appendChild(img);
  card.appendChild(delBtn);
  container.appendChild(card);
}


deleteAllBtn.onclick = function() {
  container.innerHTML = "";
};
