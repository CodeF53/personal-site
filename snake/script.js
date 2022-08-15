// Math Functions
const rand = (max) => parseInt(Math.random() * max); // random int between 0 and max
const mod = (num, val) => ((num % val) + val) % val; // modulus operator, what % should be.

// Game Variables
const GameSize = 30
let Facing
let snake
let apple 
let score
function setGameVars() {
    Facing = ""
    snake = [{x:GameSize/2-1,  y:GameSize/2}]
    apple = {x:rand(GameSize), y:rand(GameSize)}
    score = 0
}
setGameVars()

// Canvas Initialization
const canvas = document.getElementById('SnakeGame');
canvas.width = GameSize;
canvas.height = GameSize;
const ctx = canvas.getContext('2d');

// Game Controls
document.body.addEventListener("keydown", (e) => {
    switch(e.code) {
        case "KeyW":
        case "ArrowUp":
            if (Facing != "down")
                Facing = "up"
            break;
        
        case "KeyA":
        case "ArrowLeft":
            if (Facing != "right")
                Facing = "left"
            break;
        
        case "KeyD":    
        case "ArrowRight":
            if (Facing != "left")
                Facing = "right"
            break;
        
        case "KeyS":
        case "ArrowDown":
            if (Facing != "up")
                Facing = "down"
            break;
    }
}); 

function gameTick() {
    if (Facing != "") {
        let oldHeadPos = snake[snake.length-1]
        switch (Facing) {
            case "up":
                snake.push({x:mod(oldHeadPos.x,  GameSize), y:mod(oldHeadPos.y-1,GameSize)})
                break;
            case "left":
                snake.push({x:mod(oldHeadPos.x-1,GameSize), y:mod(oldHeadPos.y,  GameSize)})
                break;
            case "right":
                snake.push({x:mod(oldHeadPos.x+1,GameSize), y:mod(oldHeadPos.y,  GameSize)})
                break;
            case "down":
                snake.push({x:mod(oldHeadPos.x,  GameSize), y:mod(oldHeadPos.y+1,GameSize)})
                break;
        }
        let headPos = snake[snake.length-1]
        // check if succesfully ate apple 
        if (headPos.x == apple.x && headPos.y == apple.y) {
            // put apple in new position
            console.log(`apple consumed, score: ${score++}`)
            let invalidApplePos = true;
            while (invalidApplePos) {
                invalidApplePos = false
                apple = {x:rand(GameSize), y:rand(GameSize)}
                // make sure snake isnt overlapping apple
                for (let i = 0; i < snake.length; i++) {
                    if (snake[i].x == apple.x && snake[i].y == apple.y) {
                        invalidApplePos = true
                    }
                }
            }
        } else {
            snake.splice(0,1);
        }
        // check for overlaps
        for (let i = 0; i < snake.length-1; i++) {
            if (headPos.x == snake[i].x && headPos.y == snake[i].y) {
                // die
                console.log(`die, score ${score}`)
                setGameVars()
            }
        }
    }   
}
function gameRender() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, GameSize, GameSize);

    ctx.fillStyle = "red"
    ctx.fillRect(apple.x,apple.y,1,1)

    ctx.fillStyle = "white";
    for (let i = 0; i < snake.length; i++) {
        ctx.fillRect(snake[i].x, snake[i].y, 1,1)
    }
}

setInterval(()=>{gameTick();gameRender()}, 50);

// Render the small 30x30px grid we have properly 
//    based on https://gist.github.com/zachstronaut/1184900 
function FitCanvas(){
    let scale = {
        x: (window.innerWidth) / canvas.width, 
        y: (window.innerHeight) / canvas.height
    };
    if (scale.x < scale.y) { 
        scale = scale.x + ', ' + scale.x;
    } else { 
        scale = scale.y + ', ' + scale.y; 
    }
    canvas.setAttribute('style', canvas.getAttribute("style") + ' -ms-transform: scale(' + scale + '); -webkit-transform: scale3d(' + scale + ', 1); -moz-transform: scale(' + scale + '); -o-transform: scale(' + scale + '); transform: scale(' + scale + ');');
}
FitCanvas()
window.addEventListener('resize', function () {FitCanvas();}, false);