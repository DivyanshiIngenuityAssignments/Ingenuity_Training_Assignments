window.addEventListener("load", () => {


const canvas=document.querySelector("#canvas");
const ctx=canvas.getContext("2d");

let paints;
function beginPosition(a){
    paints=true;
    draw(a);
}

function endPosition(){
    paints=false;
   ctx.beginPath();
}
function draw(a){
    if(!paints)
     return;
    ctx.lineWidth=5;
    ctx.lineTo(a.x,a.y);
    ctx.stroke();
}
canvas.addEventListener("mousedown",beginPosition);
canvas.addEventListener("mouseup",endPosition);
canvas.addEventListener("mousemove",draw);
});
