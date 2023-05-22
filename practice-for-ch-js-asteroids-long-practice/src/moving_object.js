class MovingObject {
    constructor(options) {
        const { pos, vel, radius, color } = options;

        this.pos = pos;
        this.vel = vel;
        this.radius = radius;
        this.color = color;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(pos[0], pos[1], radius, 0, 2 * Math.Pi, true);
    }
}

export default MovingObject;
