function loadGameOverInterface() {
		background(0, 0, 0, 150);
		textSize(48);
		stroke(0);
		strokeWeight(3);
		fill(150, 0, 0);
		textFont('Arial Black');
		text("GAME OVER", width/2 - 150, height/2);
		fill(255, 200);
		textFont('Arial');
		textSize(22);
		text("Press R to restart", width/2 - 68, height/2 + 30);
}

function scoreDisplay() {
		stroke(0);
		strokeWeight(3);
		fill(255);
		textSize(32);
		textFont('Arial');
		text("Score:", width - 200, 30);
		text(s, width - 100, 30);
}