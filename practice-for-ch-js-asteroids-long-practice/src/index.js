// import Asteroid from "./asteroid";
// import MovingObject from "./moving_object";
const MovingObject = require("./moving_object");
const Asteroid = require("./asteroid");

document.addEventListener("DOMContentLoaded", () => {
    const canvasEl = document.getElementById("game-canvas");
    canvasEl.width = 700;
    canvasEl.height = 700;

    const ctx = canvasEl.getContext("2d");
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 700, 700);
    
    window.ctx = ctx;
    window.MovingObject = MovingObject;
    window.Asteroid = Asteroid;
});

console.log("Webpack is working!");
