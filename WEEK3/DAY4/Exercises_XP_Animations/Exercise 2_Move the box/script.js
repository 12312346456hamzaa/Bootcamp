function myMove() {
    var elem = document.getElementById("animate");
    var pos = 0;
    
    if (window._interval) clearInterval(window._interval);

    window._interval = setInterval(frame, 1);
    function frame() {
        if (pos >= 350) { 
            clearInterval(window._interval);
        } else {
            pos++;
            elem.style.left = pos + "px";
        }
    }
}
