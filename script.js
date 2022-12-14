
var redCircle = document.getElementById('red-circle');
redCircle.addEventListener('dragstart', function(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
});

var redSquare = document.getElementById('red-square');
redSquare.addEventListener('dragover', function (ev) {
    ev.preventDefault();
});

redSquare.addEventListener('drop', function drop(ev) {
    let id = ev.dataTransfer.getData("Text");
    if(id === 'red-circle'){
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    redCircle.removeAttribute("draggable");
    }
});

var blueCircle = document.getElementById('blue-circle');
blueCircle.addEventListener('dragstart', function(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
});

var blueSquare = document.getElementById('blue-square');
blueSquare.addEventListener('dragover', function (ev) {
    ev.preventDefault();
});

blueSquare.addEventListener('drop', function drop(ev) {
    let id = ev.dataTransfer.getData("Text");
    if(id === 'blue-circle'){
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    blueCircle.removeAttribute("draggable");
    }
});