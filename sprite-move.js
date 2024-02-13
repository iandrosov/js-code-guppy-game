// 
// https://codeguppy.com/

sprite('ninja.idle', 0, 0, 0.5);
sprite('ninja.idle', 800, 600, 0.5);
sprite('ninja.idle', 0, 600, 0.5);
sprite('ninja.idle', 800, 0, 0.5);


sprite('ninja.idle', 400, 400, 0.5);


//background('Field');
//background('Jungle');
background('Land');

let player = sprite('ninja.idle', 400, 400, 0.2);
let isDirectionLeft = true;

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
    if (player.y < 200){
            player.show('glide');
    }else{
            player.show("run");
    }
}

function climbUp(){
    player.y -= 2;
    player.show('climb');
}

function climbDown(){
    player.y += 2;
    player.show('climb');
}

function loop()
{
    player.show("idle");
    if (keyIsDown(UP_ARROW)) {
        climbUp();
    } else if (keyIsDown(DOWN_ARROW)) {
        climbDown();
    }

    if (keyIsDown(LEFT_ARROW)) {
        moveLeftOrRight(-1);
    } else if (keyIsDown(RIGHT_ARROW)) {
        moveLeftOrRight(1);
    }
}

