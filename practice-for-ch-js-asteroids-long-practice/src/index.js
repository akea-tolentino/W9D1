import MovingObject from "./moving_object";


document.addEventListener("DOMContentLoaded", () => {
    const canvasEl = document.getElementById("game-canvas");
    canvasEl.width = 700;
    canvasEl.height = 700;
    
    const ctx = canvasEl.getContext("2d");
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, 700, 700);
    window.ctx = ctx;
    window.MovingObject = MovingObject;
});



console.log("Webpack is working!");