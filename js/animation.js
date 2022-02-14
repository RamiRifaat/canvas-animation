console.log("hi");

let myCanvas = document.getElementById("my-canvas");
let ctx = myCanvas.getContext("2d");
let xPosition = 10;
let yPosition = 0;
let xdir = 0
let keydownOutput = document.getElementById("keydown-output");
let keyupOutput = document.getElementById("keyup-output");
let playerX = 250;
let playerY = 250;
let playerSpeed = 2;
let playerXDir = 0;
let playerYDir = 0;
let ballX = 100;
let ballY = 100;
let ballXDir = 10;
let ballYDir = 10;
const BALL_RADIUS = 15;
const PADDLE_HEIGHT = 20;
const PADDLE_WIDTH = 100;



function drawPlayer() {
    ctx.fillRect(playerX, playerY, PADDLE_WIDTH, PADDLE_HEIGHT, 100, 20)
}

function movePlayer() {
    playerX += playerSpeed * playerXDir;
    playerY += playerSpeed * playerYDir;
    if (playerX < 0) {
        playerX = 0;
    } else if (playerX > 400) {
        playerX = 400;
    }
    if (playerY < 0) {
        playerY = 0;
    }
}

function refreshUI() {
    ctx.clearRect(0, 0, 500, 500);
    movePlayer();
    drawPlayer();
    moveBall();
    drawBall();
    checkBallCollision();
}

function moveBall() {
    ballY += ballYDir;
    ballX += ballXDir;
}



function checkBallCollision() {
    if ((ballY > 500 - BALL_RADIUS) || (ballY < 0 + BALL_RADIUS)) {
        ballYDir = ballYDir * -1;
    }
    if ((ballX > 500 - BALL_RADIUS) || (ballX < 0 + BALL_RADIUS)) {
        ballXDir = ballXDir * -1;
    }
    if (ballX + BALL_RADIUS >= playerX &&
        ballX - BALL_RADIUS <= playerX + PADDLE_WIDTH &&
        ballY + BALL_RADIUS >= playerY &&
        ballY - BALL_RADIUS <= playerY + PADDLE_HEIGHT) { ballYDir = ballYDir * -1.01; }
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(ballX, ballY, BALL_RADIUS, 0, 2 * Math.PI);
    ctx.fill();
}

function keyPressed(event) {
    let key = event.keyCode;
    keydownOutput.innerHTML = "Key down code:" + key;
    if (key === 37) {
        playerXDir = -1;

    } else if (key === 39) {
        playerXDir = +1;
    }
    if (key === 40) {
        playerYDir = +1;
    }
    if (key === 38) {
        playerYDir = -1;
    }
}

function keyReleased(event) {
    let key = event.keyCode;
    keyupOutput.innerHTML = "Key up code:" + key;
    if (key === 37) {
        playerXDir = 0;
    }
    if (key === 39) {
        playerXDir = 0;
    }
    if (key === 38) {
        playerYDir = 0;
    }
    if (key === 40) {
        playerYDir = 0;
    }
}


function refreshPlayer() {
    ctx.clearRect(0, 0, 500, 500);
    movePlayer();
    drawPlayer();

}
/*function moveHorizontal() {
    ctx.clearRect(0, 0, 500, 500);
    ctx.fillRect(xPosition, 0, 20, 20);
    xPosition += 1;
    if (xPosition >= 500) {
        xPosition = 0;
    }
}
*/
/*function moveVertical() {
    ctx.clearRect(0, 0, 500, 500);
    ctx.fillRect(0, yPosition, 20, 20);
    yPosition += 1;
    if (yPosition >= 500) {
        yPosition = 0;
    }
}
*/


function bounceHorizontal() {
    ctx.clearRect(0, 0, 500, 500);
    ctx.fillRect(xPosition, 0, 20, 20)
    xPosition = xPosition + xdir;
    if (xPosition >= 490) {
        xdir = -1;
    }
    if (xPosition <= 10) {
        xdir = +1;
    }

}

function ballBounce() {

}
//setInterval(bounceHorizontal, 10);
//setInterval(moveVertical, 10);
//setInterval(refreshPlayer, 30);
setInterval(refreshUI, 30)