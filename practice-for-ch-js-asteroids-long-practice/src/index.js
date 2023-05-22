document.addEventListener("DOMContentLoaded", () => {
    const canvasEl = document.getElementById("canvas");
    // canvasEl.width = 500;
    // canvasEl.height = 700;

    const ctx = canvasEl.getContext("2d");
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 500, 700);
});

    console.log("Webpack is working!");
    import MovingObject from "./moving_object";
    window.MovingObject = MovingObject;
