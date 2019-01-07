// Create the canvas
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
document.body.appendChild(canvas);

// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
  bgReady = true;
};
bgImage.src = "assets/background.jpg";

// Hero image
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
  heroReady = true;
};
heroImage.src = "assets/hero.png";

// Monster image
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
  monsterReady = true;
};
monsterImage.src = "assets/monster.png";

// Game objects
var hero = {
  speed: 256 // movement in pixels per second
};
var monster = {};
var monstersCaught = 0;

// Handle keyboard controls
var keysDown = {};

addEventListener("keydown", function (e) {
  keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
  delete keysDown[e.keyCode];
  document.getElementById("arrowkeys").style.opacity = "0";
}, false);

// Reset the game when the player catches a monster
var reset = function () {
  hero.x = canvas.width / 2;
  hero.y = canvas.height / 2;

  // Throw the monster somewhere on the screen randomly
  monster.x = 32 + (Math.random() * (canvas.width - 64));
  monster.y = 32 + (Math.random() * (canvas.height - 64));
};

// Update game objects
var update = function (modifier) {
  if (38 in keysDown) { // Player holding up
    hero.y -= hero.speed * modifier;
    document.getElementById("arrowkeys").style.opacity = "0.8";
  }
  if (40 in keysDown) { // Player holding down
    hero.y += hero.speed * modifier;
    document.getElementById("arrowkeys").style.opacity = "0.8";
  }
  if (37 in keysDown) { // Player holding left
    hero.x -= hero.speed * modifier;
    document.getElementById("arrowkeys").style.opacity = "0.8";
  }
  if (39 in keysDown) { // Player holding right
    hero.x += hero.speed * modifier;
    document.getElementById("arrowkeys").style.opacity = "0.8";
  }

  // check to see if the players are touching
  if (
    hero.x <= (monster.x + 32)
    && monster.x <= (hero.x + 32)
    && hero.y <= (monster.y + 32)
    && monster.y <= (hero.y + 32)
  ) {
    ++monstersCaught;
    reset();
  }
};


document.getElementById("arrowkeys").style.opacity = "0.8";

// Draw everything
var render = function () {
  if (bgReady) {
    ctx.drawImage(bgImage, 0, 0);
  }

  if (heroReady) {
    ctx.drawImage(heroImage, hero.x, hero.y);
  }

  if (monsterReady) {
    ctx.drawImage(monsterImage, monster.x, monster.y);
  }

  // Score
  ctx.fillStyle = "rgb(0, 120, 239)";
  ctx.font = "24px Helvetica";
  ctx.font = "24px Helvetica";
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  ctx.fillText("Aliens caught: " + monstersCaught, 32, 32);

};


// The main game loop
var main = function () {
  var now = Date.now();
  var delta = now - then;

  update(delta / 1000);
  render();

  then = now;

  // Request to do this again ASAP
  requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// starts the game
var then = Date.now();
reset();
main();


// Game Timer

function checklength(i) {
    'use strict';
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
var minutes, seconds, count, counter, timer;
count = 11; //game time in seconds - add 1 sec so it starts on the time you wnat to count down from
counter = setInterval(timer, 1000);

// creates count down timer in minutes and seconds

function timer() {
    'use strict';
    count = count - 1;
    minutes = checklength(Math.floor(count / 60));
    seconds = checklength(count - minutes * 60);
    if (count < 0) {
        clearInterval(counter);
        return;
    }
    document.getElementById("timer").innerHTML = 'Time left: ' + minutes + ':' + seconds + ' ';

// compares scores with 2 secs remainig to find last score and compare to highest score

    if (count === 1) {

          var score = 0;
          var lastscore = monstersCaught;
          var highscore = localStorage.getItem("highscore");

      if(lastscore !== null){

          localStorage.setItem("lastscore", monstersCaught);

          if (lastscore > highscore) {
              localStorage.setItem("highscore", monstersCaught);

                  var txt;
                  var person = prompt("Congratulations. You have achieved the highest score ! \n\nPlease enter your name:", "Garry");
                  if (person == null || person == "") {
                    txt = "You don't have to tell us. You still did well :)";
                  } else {
                    txt = "Well done " + person + " on your new highest score !";
                  }
                  document.getElementById("congrats").innerHTML = txt;
                
          }

        }
    }

// When count is at 0 secs the game will reload and repeat

    if (count === 0) {
        location.reload();
    }
}

// Last score text

if (typeof(Storage) !== "undefined") {
  // Retrieve
  document.getElementById("lastgameresult").innerHTML = localStorage.getItem("lastscore");
} else {
  document.getElementById("lasthighestscore").innerHTML = "Sorry, your browser does not support Web Storage...";
}

// High score text

if (typeof(Storage) !== "undefined") {
  // Retrieve
  document.getElementById("highscoreresult").innerHTML = localStorage.getItem("highscore");
} else {
  document.getElementById("highscoreresult").innerHTML = "Sorry, your browser does not support Web Storage...";
}

// Delete local storage and past user scores

function deleteItems() {
  setTimeout(function(){localStorage.clear(); location.reload(); }, 3000);
}

// background scroll - not needed as I found a gif image

// var BackgroundScroll = function(params) {
//   params = $.extend({
//     scrollSpeed: 70,
//     imageWidth: $('#bg').width(),
//     imageHeight: $('#bg').height()
//   }, params);
  
//   var step = 1,
//     current = 0,
//     restartPosition = - (params.imageWidth - params.imageHeight);
  
//   var scroll = function() {
//     current -= step;
//     if (current == restartPosition){
//       current = 0;
//     } 
//     $('#bg').css('backgroundPosition', current + 'px 0');
  
//   };
  
//   this.init = function() {
//     setInterval(scroll, params.scrollSpeed);
  
//   };
// };

// var scroll = new BackgroundScroll();
// scroll.init();

// })();


