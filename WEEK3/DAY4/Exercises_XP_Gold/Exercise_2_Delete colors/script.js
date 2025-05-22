document.getElementById('removeBtn').addEventListener('click', removecolor);

function removecolor() {
    
    const select = document.getElementById('colorSelect');

    if (select.options.length > 0) {
        select.remove(select.selectedIndex);
    }
}
