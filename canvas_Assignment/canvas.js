
let canvas,
    context,
    dragging = false,
    startLocation,
    imageData;


function getCoordinates(event) {
    let x=event.clientX-canvas.getBoundingClientRect().left,
        y=event.clientY-canvas.getBoundingClientRect().top;

    return {x: x, y: y};
}

function takeImageData() {
    imageData=context.getImageData(0, 0, canvas.width, canvas.height);
}

function restoreImagedata() {
    context.putImageData(imageData, 0, 0);
}
function drawBrush(position){
    context.beginPath();
     context.lineWidth=5;
        context.lineTo(a.position,a.position);
        context.stroke();
}
function drawLine(position) {
    context.beginPath();
    context.moveTo(startLocation.x, startLocation.y);
    context.lineTo(position.x, position.y);
    context.stroke();
}
function drawCircle(position) {
    var radius = Math.sqrt(Math.pow((dragStartLocation.x - position.x), 2) + Math.pow((dragStartLocation.y - position.y), 2));
    context.beginPath();
    context.arc(dragStartLocation.x, dragStartLocation.y, radius, 0, 2 * Math.PI, false);
}
function drawRectangle(position) {
    
    context.beginPath();
    context.fillRect(startLocation.x,startLocation.y,position.x,position.y);
    context.strokeRect();
}

function draw(position) {

    var fillBox=document.getElementById("fillBox"),
        shape=document.querySelector('input[type="radio"][name="shape"]:checked').value;
       
        if (shape==="line") {
            drawLine(position);
        }
        if (shape==="brush") {
            drawBrush(position);
        }
    
    if (shape==="rectangle") {
        drawRectangle(position);
    }
    if (shape==="circle") {
        drawCircle(position);
    }
}

  /* if (fillBox.checked) {
        context.fill();
    } else {
        context.stroke();
    }
*/

function dragStart(event) {
    dragging=true;
    startLocation=getCoordinates(event);
    takeImageData();
}

function drag(event) {
    var position;
    if (dragging===true) {
        restoreImagedata();
        position=getCoordinates(event);
        draw(position, "rectangle");
    }
}
   /*  if (dragging===true) {
        restoreImagedata();
        position=getCoordinates(event);
        draw(position, "rectangle");
    }*/


function dragStop(event) {
    dragging=false;
    restoreImagedata();
    var position=getCoordinates(event);
    draw(position, "line");
    
}
function dragStop(event) {
    dragging=false;
    restoreImagedata();
    var position=getCoordinates(event);
    draw(position, "brush");
    
}
function dragStopR(event) {
    dragging=false;
    restoreImagedata();
    var position=getCoordinates(event);
    draw(position, "rectangle");
    
}

function init() {
    canvas=document.getElementById("canvas");
    context=canvas.getContext('2d');
    context.strokeStyle='black';
    context.fillStyle='red';
    context.lineWidth=4;
    context.lineCap='round';



    canvas.addEventListener('mousedown', dragStart, false);
    canvas.addEventListener('mousemove', drag, false);
    canvas.addEventListener('mouseup', dragStop, false);
    canvas.addEventListener('mouseup', dragStopR, false);
}
    window.addEventListener('load', init, false);

  


   