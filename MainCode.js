
/* -------------------------- VARIABILE -------------------------- */

let imgEnemy;
let enemies = [];
let hitSound;
let s = 0;
let jSound;
let myint;
let gameover = false;
let e;
let Gspeed = 1;
let i;
let frame = 0;
let minGap = 50;
let maxGap = 150;
let gap;
let firstSound, rampSound, domSound, monsterSound;
let animation = [];
let character;
let index;
let grounds = [];
let ind = 0;
let p = 1;
let a, loopInt;
let desert;
let blood;

function preload() {

/*	-------------------------- IMAGINI -------------------------- */

	blood = loadImage("Resurse/blood.png");
	imgEnemy = loadImage("Resurse/reaper.png");

	for(let k = 0; k <= 9; k++) {
	animation[k] = loadImage("Resurse/Elf_02__RUN_00" + k + ".png");
    }
    for(let j = 0; j <= 118; j++) {
    	grounds[j] = loadImage("Resurse/loopings/backtest" + j + ".png");
    }

/*	-------------------------- SUNETE -------------------------- */

    hitSound = loadSound("Resurse/grunt.wav");
	jSound = loadSound("Resurse/huh.wav");
	firstSound = loadSound("Resurse/first.mp3");
	rampSound = loadSound("Resurse/rampage.mp3");
	domSound = loadSound("Resurse/dominating.mp3");
	monsterSound = loadSound("Resurse/monsterkill.mp3");
	desert = loadSound("Resurse/desert-cut.mp3");
}

function setup() {

    createCanvas(1400, 400);
    e = new Enemy();
    character = new Character(animation, 1, 80, height - 100);

    jSound.setVolume(0.5);
    firstSound.setVolume(0.3);
    rampSound.setVolume(0.3);
    domSound.setVolume(0.3);
    monsterSound.setVolume(0.3);
    desert.setVolume(0.5);

    myint = setInterval(score, 100);

    gap = randGap();

    loopInt = setInterval(repeat, 25);

    a = grounds[ind];

    desert.loop();

}
function repeat() {
	p++;
	if(p == 118) {
		p = 0;
	}
    a = grounds[ind + p];
}

function keyPressed() {
	if(key == ' ' && gameover == false) {
		character.jump();
	}
	if(keyCode == DOWN_ARROW && gameover == false) {
		character.duck();
	}
	if(keyCode == 82 && gameover == true) {
		location.reload();
	}
	if(keyCode == 78 && gameover == false && !desert.isPlaying()) {
		desert.loop();
	}
	if(keyCode == 77 && gameover == false && desert.isPlaying()) {
		desert.pause();
	}
}

function draw() {

	    background(a);

	    character.show();
	    character.move();
	    character.animate(); 
	    updateGame();

	    if(character.y < height - character.r - 20) {
	    	character.speed = 0;
	    } else {
	    	character.speed = 0.5;
	    }

        if(gameover == true) {
        image(blood, character.x - 10, character.y - 10, 80, 80);
        desert.stop();
	    hitSound.play();
	    noLoop();
	    clearInterval(myint);
        loadGameOverInterface();

    }
        scoreDisplay();
}

function updateGame() {

	if(everyinterval(gap)) {
		enemies.push(new Enemy());
		gap = randGap();
		frame = 0;
	}
	for(let e of enemies) {
		if(character.hits(e)) {
			e.endgame();
		}
		e.move();
		e.show();
	}
	frame += 1;
}

function everyinterval(n) {
	if(frame % n == 0) return true;
	else return false;
}

function randGap() {
	
	return Math.floor(minGap + Math.random() * (maxGap - minGap + 1));

}

function score() {
	s += 1;
	if(s >= 100 && s < 200) {
		Gspeed = 1.2;
		minGap = 40;
		maxGap = 130;
		if(random(1) < 0.01) {
			console.log("spawned at 100-200");
			enemies.push(new Enemy());
		}

	}
	if(s == 200) {
		firstSound.play();
	}
	if(s >= 200 && s < 300) {
		Gspeed = 1.3;
		minGap = 30;
		maxGap = 110;
		if(random(1) < 0.015) {
			console.log("spawned at 200-300");
			enemies.push(new Enemy());
		}

	}
	if(s == 400) {
		rampSound.play();
	}
	if(s >= 300 && s < 500) {
		Gspeed = 1.5;
		minGap = 20;
		maxGap = 90;
		if(random(1) < 0.02) {
			console.log("spawned at 300-500");
			enemies.push(new Enemy());
		}

	}
	if(s == 600) {
		domSound.play();
	}
	if(s >= 600 && s < 800) {
		Gspeed = 1.7;
		minGap = 10;
		maxGap = 80;
		if(random(1) < 0.03) {
			console.log("spawned at 600-800");
			enemies.push(new Enemy());
		}

	}
	if(s == 800 || s == 1200) {
		monsterSound.play();
	}
	if(s >= 800 && s < 1000) {
		Gspeed = 1.9;
		minGap = 20;
		maxGap = 80;
		if(random(1) < 0.04) {
			console.log("spawned at 800-1000");
			enemies.push(new Enemy());
		}

	}
	if(s >= 1000 && s < 1200) {
		Gspeed = 2.1;
		minGap = 20;
		maxGap = 80;
		if(random(1) < 0.05) {
			console.log("spawned at over 1000");
			enemies.push(new Enemy());
		}

	}
		if(s >= 1200 && s < 1300) {
		Gspeed = 2.3;
		minGap = 15;
		maxGap = 60;
		if(random(1) < 0.055) {
			console.log("spawned at over 1200");
			enemies.push(new Enemy());
		}

	}
		if(s >= 1300) {
		Gspeed = 2.5;
		minGap = 15;
		maxGap = 60;
		if(random(1) < 0.06) {
			console.log("spawned at over 1300");
			enemies.push(new Enemy());
		}

	}
		if(s >= 1500) {
		Gspeed = 2.7;
		minGap = 20;
		maxGap = 80;
		if(random(1) < 0.07) {
			console.log("spawned at over 1500");
			enemies.push(new Enemy());
		}

	}
		if(s >= 2000) {
		Gspeed = 3;
		minGap = 40;
		maxGap = 100;
		if(random(1) < 0.08) {
			console.log("spawned at over 2000");
			enemies.push(new Enemy());
		}

	}
}



