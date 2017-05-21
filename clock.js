function init() {
  c = document.getElementById('clock'),
  canvas = c.getContext('2d');
  c.width = window.innerWidth;
  c.height = window.innerHeight;
  canvas.beginPath();
  canvas.rect(0, 0, window.innerWidth, window.innerHeight);
  canvas.fillStyle = "black";
  canvas.fill();

  // http://www.html5canvastutorials.com/tutorials/html5-canvas-circles/
  var centerX = c.width / 2;
  var centerY = c.height / 2;
  var radius = 250;


          canvas.beginPath();
          canvas.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
          canvas.fillStyle = 'black';
          canvas.fill();
          canvas.lineWidth = 5;
          canvas.strokeStyle = 'white';
          canvas.stroke();
//end from extenal

}

function timeDraw() {
var d = new Date();
var m = d.getMinutes();
var s = d.getSeconds();
var h = d.getHours();

  c = document.getElementById('clock'),
  canvas = c.getContext('2d');
  canvas.fillStyle = "white";
  console.log("h: " + h * 30);
  console.log("m: " + m * 6);
  console.log("s: " + s * 6);

  draw(c, 360 - (h * 30) + 90, 1);
  draw(c, 360 - (m * 6) + 90, 2);
  draw(c, 360 - (s * 6) + 90, 3);


}

document.getElementById('clock').width = window.innerWidth;
document.getElementById('clock').height = window.innerHeight;


function draw(canvas, angle, type){ // from https://jsfiddle.net/Lbo0dzfL/17/

    var context = canvas.getContext('2d'), centerX = Math.floor(canvas.width / 2), centerY = Math.floor(canvas.height / 2),radius = Math.floor(canvas.width / 2)
    context.lineWidth = 5;
    if (type == 1) {
      // hours
      var radius = 100;
      context.strokeStyle = 'white';
    }
    if (type == 2) {
      // minutes
      var radius = 225;
      context.strokeStyle = 'white';
    }

    if (type == 3) {
    // minutes
    var radius = 225;
    context.strokeStyle = 'red';
    }
    var begin = 0; interval = 360;
    var arcSize= degreesToRadians(interval);
    context.beginPath();
    context.moveTo(centerX,centerY);
    context.arc(centerX,centerY,radius, degreesToRadians(0), degreesToRadians((-1) * angle),false);
    context.closePath();
    context.stroke();
    context.strokeStyle = 'black';
    context.lineWidth = 6;
    for(var startingAngle=begin; startingAngle < 360;){
        context.beginPath();
        context.moveTo(centerX, centerY);
        context.arc(centerX, centerY, radius, degreesToRadians(startingAngle), startingAngle + arcSize, false);
        context.closePath();
        context.stroke();
        startingAngle = startingAngle + interval;
    }

    if (type == 1) {
      // hours
      var radius = 100;
      context.strokeStyle = 'white';
    }
    if (type == 2) {
      // minutes
      var radius = 225;
      context.strokeStyle = 'white';
    }

    if (type == 3) {
    // minutes
    var radius = 225;
    context.strokeStyle = 'red';
    }

if (angle == 360 || angle == 0) {
context.beginPath();
context.moveTo(centerX,centerY);
context.lineTo(radius, centerY);
context.stroke();
}
}

function degreesToRadians(degrees) {
    return (degrees * Math.PI)/180;
}
// end from external 

function run() {
  init();
  timeDraw();
}
run();

setInterval(run, 500);
