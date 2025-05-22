const select = document.getElementById('genres');

const result = document.getElementById('selectedValue');

function showSelected() {
    result.textContent = "Selected: " + select.value;
}

showSelected();

select.addEventListener('change', showSelected);

let option = document.createElement("option");
option.value = "classic";
option.text = "Classic";
option.selected = true; 

select.appendChild(option);


showSelected();
