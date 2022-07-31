class Enemy {
	constructor() {
		let ranH = 85;
		let ranW = 65;
		this.x = width;
		this.y = height - ranH - 20;
		this.w = ranW;
		this.h = ranH;
	}
      move() {
      	this.x = this.x - Gspeed * 10;

      }

      show() {
            
      	image(imgEnemy, this.x, this.y, this.w, this.h);

      }
      endgame() {
      	gameover = true;
      }
  
}