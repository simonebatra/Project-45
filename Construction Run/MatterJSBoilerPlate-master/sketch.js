var canvas;
var backgroundImg;
var player, playerImg;
var obstacles, obstaclesImg;
var screwdriverImg;
var obstaclesPosition1, obstaclesPosition2, obstaclesPosition3, obstaclesPosition4, obstaclesPosition5;
var expertise = 3;

function preload() {
	backgroundImg = loadImage("track.png");
	playerImg = loadImage("running.png");
	obstaclesImg = loadImage("broken.png");
	screwdriverImg = loadImage("reward.png");
}

function setup() {
	canvas = createCanvas(windowWidth, 7000);

	player = createSprite(2000, 3000);
	player.addImage(playerImg);
	player.scale = 1.5;

	obstacles = new Group;

	obstaclesPosition1 = createSprite(width / 2 + 250, height - 800);
	obstaclesPosition1.addImage(obstaclesImg);

	obstaclesPosition2 = createSprite(width / 2 - 150, height - 1300);
	obstaclesPosition2.addImage(screwdriverImg);

	obstaclesPosition3 = createSprite(width / 2 + 250, height - 1800);
	obstaclesPosition3.addImage(obstaclesImg);

	obstaclesPosition4 = createSprite(width / 2 - 180, height - 2300);
	obstaclesPosition4.addImage(screwdriverImg);

	obstaclesPosition5 = createSprite(width / 2, height - 2800);
	obstaclesPosition5.addImage(obstaclesImg);

	obstaclesPosition6 = createSprite(width / 2 - 180, height - 3300);
	obstaclesPosition6.addImage(obstaclesImg);

	obstaclesPosition7 = createSprite(width / 2 + 180, height - 3300);
	obstaclesPosition7.addImage(obstaclesImg);

	obstaclesPosition8 = createSprite(width / 2 + 250, height - 3800);
	obstaclesPosition8.addImage(obstaclesImg);

	obstaclesPosition9 = createSprite(width / 2 - 150, height - 4300);
	obstaclesPosition9.addImage(obstaclesImg);

	obstaclesPosition10 = createSprite(width / 2 + 250, height - 4800,);
	obstaclesPosition10.addImage(obstaclesImg);

	obstaclesPosition11 = createSprite( width / 2, height - 5300);
	obstaclesPosition11.addImage(obstaclesImg);

	obstaclesPosition12 = createSprite(width / 2 - 180, height - 550);
	obstaclesPosition12.addImage(obstaclesImg);



}

function draw() {
	background(backgroundImg);


		//showFuelBar();
	

	
	camera.position.y = player.position.y;



	showFuelBar();
	handlePlayerControls();
	drawSprites();

	if (keyDown(left)) {
		player.position.x -= 5;
	}

	if (keyDown(right)) {
		player.position.x += 5;
	}

}

function handlePlayerControls() {

}

function showFuelBar() {
	rect(300, 2000, 900, 150);
	fill("#ffc400");
	rect(300, 2000, 900, 150);
	stroke("red");
}