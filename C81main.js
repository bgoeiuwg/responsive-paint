var canvas=document.getElementById("rishabh");
var ctx=canvas.getContext("2d");
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
     mousex=e.clientX- canvas.offsetLeft;
     mousey=e.clientY- canvas.offsetTop;
     circle(mousex, mousey);
}
function circle(mousex, mousey){
    ctx.beginPath();
    ctx.strokeStyle="black";
    ctx.lineWidth=8;
    ctx.arc(mousex , mousey, 50, 0, 2*Math.PI);
    ctx.stroke();
}
function Clear(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}