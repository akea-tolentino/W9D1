class MovingObject {
    constructor(options) {
    [pos, vel, radius, color] = options;

        this.pos = pos;
        this.vel = vel;
        this.radius = radius;
        this.color = color;
    }
};

export default MovingObject;