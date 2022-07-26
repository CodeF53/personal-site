const canvas = document.getElementById('background');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');

ctx.strokeStyle = "#FFFFFF";
ctx.fillStyle = "#FFFFFF";

function rand(min, max) {
    return Math.random() * (max - min) + min;
}
function mod(num, val) {
    return ((num % val) + val) % val;
}
function dist(point0, point1) {
    return Math.sqrt(Math.pow(point0.x - point1.x, 2) + Math.pow(point0.y - point1.y, 2));
}

function drawPoint(point) {
    ctx.beginPath();
    ctx.arc(point.x, point.y, point.size, 0, 360);
    ctx.fill();
}   

const screenMaxLength = Math.sqrt(Math.pow(window.innerWidth, 2) + Math.pow(window.innerHeight, 2));
function drawLine(point0, point1) {
    distance = dist(point0, point1);
    transparency = ((1-(distance / screenMaxLength))-0.75)*5;
    if (transparency > 0) {
        ctx.lineWidth = transparency*2;
        ctx.strokeStyle = `#FFFFFF${(parseInt(transparency*255)).toString(16)}`;

        ctx.beginPath();
        ctx.moveTo(point0.x, point0.y);
        ctx.lineTo(point1.x, point1.y);
        ctx.stroke();
    }
}

numpoints = 25;
maxspeed = 1;
points = [];
for (let i = 0; i < numpoints; i++) {
    // x, y, xV, yV, size
    points.push( {
        x: rand(0, window.innerWidth), 
        y: rand(0, window.innerHeight), 
        xV: rand(-maxspeed, maxspeed), 
        yV: rand(-maxspeed, maxspeed), 
        size: rand(3, 5)
    });
}

function renderFrame() {
    // clear canvas for next frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // iterate through all the points, move them one step, draw them
    for (let i = 0; i < numpoints; i++) {
        // apply velocity 1 step and save new position
        point = points[i];
        point.x = mod((point.x + point.xV), window.innerWidth);
        point.y = mod((point.y + point.yV), window.innerHeight);
        points[i] = point;

        // draw point at new position
        drawPoint(point);

        // draw lines between all points 
        for (let c = i+1; c < numpoints; c++) {
            drawLine(point, points[c]);
        }
    }
}

// for 144fps each frame should take (1s/144) = 6.94444444ms 
setInterval(renderFrame, 6.94);
//renderFrame();