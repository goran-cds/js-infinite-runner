class Character {
	constructor(animation, speed, x, y) {
		this.x = x;
		this.y = y;
		this.animation = animation;
		this.speed = speed;
		this.len = this.animation.length;
		this.index = 0;
		this.vel = 0;
		this.grav = 0.9;
		this.r = 60;
	}
	show() {

		//fill(255, 50);
		//rect(this.x, this.y, this.r, this.r); 

		index = floor(this.index) % this.len;
		image(this.animation[index], this.x, this.y, this.r, this.r);

	}

	animate() {
		this.index += this.speed;

	}
	move() {
		this.y += this.vel;
    	this.vel += this.grav;
    	this.y = constrain(this.y, 0, height - this.r - 20);
	}
	jump() {
    	if(this.y == height - this.r - 20) {
    	this.vel = -16;
    	jSound.play();
        }
    }
    duck() {
    	if(this.y < height - this.r - 20) {
    		this.vel = 15;
    		this.y += this.vel;
    	}
    }
    hits(other) {
      	return collideRectRect(this.x, this.y, this.r/2, this.r/2, other.x, other.y, other.w/2, other.h/2);
      }
}