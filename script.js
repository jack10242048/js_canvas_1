const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let drawing = false;

ctx.lineWidth = 3;
ctx.lineCap = "round";
ctx.strokeStyle = "black";

canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stopDraw);
canvas.addEventListener("mouseleave", stopDraw);

function startDraw(e) {
  e.preventDefault(); 
  drawing = true;
  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY);
}

function draw(e) {
  if (!drawing) return;

  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
}

function stopDraw() {
  drawing = false;
}