console.log('hello world')

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');

canvas.addEventListener("click", canvasClick);

ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;

var vertices = [];
var 

function canvasClick(e) {
    console.log('click');

    var node = {

    };

    //draw circle
    ctx.beginPath();
    ctx.arc(e.clientX, e.clientY, 50, 0, 2 * Math.PI);
    ctx.stroke();
    

};

