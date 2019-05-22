const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle ='#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(e) {
    if(!isDrawing) return;
    ctx.beginPath();
    
    //Start from
    ctx.moveTo(lastX, lastY);
    
    //Go to
    ctx.lineTo(e.offsetX, e.offsetY)
    
    //color
    ctx.stroke();
    //Starts from zero
    [lastX, lastY] = [e.offsetX, e.offsetY]
}

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true
    [lastX, lastY] = [e.offsetX, e.offsetY]
    });
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);