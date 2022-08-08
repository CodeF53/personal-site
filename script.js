// Constants used in math and stuff
const width = window.innerWidth;
const height = window.innerHeight;
const screenMaxLength = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));

// PointCloud Settings
const numpoints = 30;
const maxspeed = 0.25;

// PointCloud Canvas Definition
const canvas = document.getElementById('background');
canvas.width = width
canvas.height = height
const ctx = canvas.getContext('2d');
ctx.fillStyle = "#FFFFFF";

// Math Functions
function rand(min, max) {
    return Math.random() * (max - min) + min;
}
function mod(num, val) {
    return ((num % val) + val) % val;
}
function dist(point0, point1) {
    return Math.sqrt(Math.pow(point0.x - point1.x, 2) + Math.pow(point0.y - point1.y, 2));
}

// Drawing functions
function drawPoint(point) {
    ctx.beginPath();
    ctx.arc(point.x, point.y, point.size, 0, 360);
    ctx.fill();
}   
function drawLine(point0, point1) {
    distance = dist(point0, point1);
    transparency = ((1-(distance / screenMaxLength))-0.75)*5;
    if (transparency > 0) {
        // lines can get thicker than 2 if points are really close
        ctx.lineWidth = transparency*2;
        // but make sure transparency never goes above 100% because that causes issues
        if (transparency>=1){
            transparency=1;
        }
        ctx.strokeStyle = `#FFFFFF${(parseInt(transparency*255)).toString(16)}`;

        ctx.beginPath();
        ctx.moveTo(point0.x, point0.y);
        ctx.lineTo(point1.x, point1.y);
        ctx.stroke();
    }
}


points = [];
// Initalize points with random positions, velocities, and sizes
for (let i = 0; i < numpoints; i++) {
    points.push( {
        x: rand(0, width), 
        y: rand(0, height), 
        xV: rand(-maxspeed, maxspeed), 
        yV: rand(-maxspeed, maxspeed), 
        size: rand(3, 5)
    });
}

function renderFrame() {
    // clear canvas for next frame
    ctx.clearRect(0, 0, canvas.width, height);

    // iterate through all the points, move them one step, draw them
    for (let i = 0; i < numpoints; i++) {
        // apply velocity 1 step and save new position
        point = points[i];
        point.x = mod((point.x + point.xV), width);
        point.y = mod((point.y + point.yV), height);
        points[i] = point;

        // draw point at new position
        drawPoint(point);

        // draw lines between all points 
        for (let c = 0; c < numpoints; c++) {
            drawLine(point, {x:-(width-points[c].x), y: -(height-points[c].y)})
            drawLine(point, {x:-(width-points[c].x), y: points[c].y})
            drawLine(point, {x:-(width-points[c].x), y: height+points[c].y})

            drawLine(point, {x:points[c].x, y: -(height-points[c].y)})
            if (c > i) { drawLine(point, points[c]); }
            drawLine(point, {x:points[c].x, y: height+points[c].y})

            drawLine(point, {x:width+points[c].x, y: -(height-points[c].y)})
            drawLine(point, {x:width+points[c].x, y: points[c].y});
            drawLine(point, {x:width+points[c].x, y: height+points[c].y})
        }
    }
}

// for 144fps each frame should take (1s/144) = 6.94444444ms 
setInterval(renderFrame, 6.94);
//renderFrame();