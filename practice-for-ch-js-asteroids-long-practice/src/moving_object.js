class MovingObject {
    constructor(options) {
        const { pos, vel, radius, color } = options;

        this.pos = pos;
        this.vel = vel;
        this.radius = radius;
        this.color = "#FF0000";
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.Pi);
        ctx.stroke();
    }
}


export default MovingObject;
