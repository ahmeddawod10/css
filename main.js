var canvas=document.querySelector("canvas");
var context = canvas.getContext("2d");
var color=document.getElementById("color")

// context.font='50px Algerian'
// context.fillText("A", 10, 50);
// context.fillText("A", 250, 490);

function start () {
    for (var i = 0; i < 50; i++) {
        context.beginPath();
        x = parseInt(Math.random() * canvas.width);
        y = parseInt(Math.random() * canvas.height);
        context.arc(x, y, 50, 0, Math.PI * 2);
        context.stroke();
        context.strokeStyle = color.value;
    }
    
}



color.addEventListener('input', function() {
         context.clearRect(0, 0, canvas.width, canvas.height)
     });     