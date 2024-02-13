// 
// https://codeguppy.com/

background('Land');
let player = sprite('dino.idle', 400, 410, 0.2);
let playerPoints = 0;
let coins = new Group();
let isDirectionLeft = true;
textSize(20);
let countPoints = text('POINTS: '+playerPoints, 600, 30);

//music('Fun Background', 0.1);
//music('Rainbow', 0.1);
music('Jump and Run', 0.5);

function displayPoints(){
    playerPoints += 1;
    countPoints.clear();
    countPoints = text('POINTS: '+playerPoints, 600, 30);
}

function dropCoins(){
    coins.clear();
    coins = new Group();
    for(let i = 0; i < 10; i++)
    {
        let coin = sprite('coin', random(100, 700), random(50, 400), 0.5);
        //coin.velocity.y = -2;
        // add coin to the group
        coins.add(coin);
    }
}

function keyPressed(){
    if (key.toLowerCase() === "s"){
        // showScene("Game");
        dropCoins();
    }
}

function keyReleased()
{
    if (keyCode === UP_ARROW) {
        player.y = 410;
        player.show('jump');
    }
}

// -1 Left + 1 Right
function moveLeftOrRight(direction){

    if (direction == -1){
        isDirectionLeft = true;
        player.x -= 4;        
    }else{
        isDirectionLeft = false;
        player.x += 4;
    }
    player.mirrorX(direction);
    //player.show("jump");
    if (player.y < 200){
            player.show('walk');
    }else{
            player.show("run");
    }
}

function climbUp(){
    if(player.y >= -410){
        player.y -= 2;
    }
    player.show('jump');
}

function climbDown(){
    //if (player.y <= 0){
        player.y += 2;
//    }
    player.show('jump');
}

function jump(){
    player.y -= 2;
    //player.velocity.y = -1;
    player.show("jump");
}

function loop()
{
    player.show("idle");
    
    //player.x = mouseX;
    //player.y = mouseY;

    // check collision against the group
    player.collide(coins, onCollision)
    
    if (keyIsDown(UP_ARROW)) {
        climbUp();
    } else if (keyIsDown(DOWN_ARROW)) {
        climbDown();
    }

    //if (keyIsDown(UP_ARROW)) {
    //    jump();
    //    player.y += 2;
    //}
    
    if (keyIsDown(LEFT_ARROW)) {
        moveLeftOrRight(-1);
    } else if (keyIsDown(RIGHT_ARROW)) {
        moveLeftOrRight(1);
    }
}

function onCollision(player, coin)
{
    // remove coin from the group
    coins.remove(coin);
    sound('twoTone2');
    displayPoints();
    coin.velocity.y = -10;
    coin.life = 100;

    //player.rotationSpeed = 2;
}

