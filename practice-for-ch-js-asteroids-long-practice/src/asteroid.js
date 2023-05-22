import * as Util from "./util.js";
import MovingObject from "./moving_object";

class Asteroid extends MovingObject {
    static RADIUS = 30;
    static COLOR = "blue";

    constructor(options) {
        super(options);

        this.pos = options.pos;
        this.vel = Util.randomVec(Math.floor(Math.random() * 10) + 1);
        this.radius = Asteroid.RADIUS;
        this.color = Asteroid.COLOR;
    }
}

export default Asteroid;
