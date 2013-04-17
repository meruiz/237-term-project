var canvas = document.getElementById("canvas1");
var ctx = canvas.getContext("2d");

// globals
  var frame = 0;

  var bgX = -200;
  var bgY = -200;

  sprite = new Image();
  sprite.src = "sheet.png";

  bgImg = new Image();
  bgImg.src = "map1.png";

  var p1x = 200;
  var p1y = 200;



function onKeyDown(){
  // var moveLeft = false;
  // var moveRight = false;
  // var moveUp = false;
  // var moveDown = false;
  var playerDir = "";

  //moveLeft
  if ((event.keyCode === 65)) {
    playerDir = "left";
    }

  //moveRight
  if ((event.keyCode === 68)) {
    playerDir = "right";
    }

  // moveUp
  if ((event.keyCode === 87)) {
    playerDir = "up";
    }

  // moveDown
  if ((event.keyCode === 83)) {
    playerDir = "down";
    }
    moveBg(playerDir);
    movePlayer(playerDir);
}



function movePlayer(diretion){
  //draws player
  if (diretion === "left"){
    if (frame%3 == 0){
      ctx.drawImage(sprite, 7, 35, 17, 33, canvas.width/2, canvas.height/2, 17, 33)
    }
    if (frame%3 == 1){
      ctx.drawImage(sprite, 35, 35, 21, 33, canvas.width/2, canvas.height/2, 21, 33)
    }
    if (frame%3 == 2){
      ctx.drawImage(sprite, 71, 35, 17, 33, canvas.width/2, canvas.height/2, 17, 33)
    }
    frame++;
    p1x -=5;
    p2x +=5;
  }

  if (diretion === "right"){
    if (frame%3 == 0){
      ctx.drawImage(sprite, 35, 69, 21, 33, canvas.width/2, canvas.height/2, 21, 33)
    }
    if (frame%3 == 1){
      ctx.drawImage(sprite, 8, 69, 17, 33, canvas.width/2, canvas.height/2, 17, 33)
    }
    if (frame%3 == 2){
      ctx.drawImage(sprite, 72, 69, 17, 33, canvas.width/2, canvas.height/2, 17, 33)
    }
    frame++;
    p1x += 5;
    p2x -=5;
  }


  if (diretion === "up"){
    if (frame%3 == 0){
      ctx.drawImage(sprite, 35, 103, 27, 33, canvas.width/2, canvas.height/2, 27, 33)
    }
    if (frame%3 == 1){
      ctx.drawImage(sprite, 6, 103, 21, 33, canvas.width/2, canvas.height/2, 21, 33)
    }
    if (frame%3 == 2){
      ctx.drawImage(sprite, 70, 103, 21, 33, canvas.width/2, canvas.height/2, 21, 33)
    }
    frame++;
    p1y -= 5;
    p2y += 5;
  }


  if (diretion === "down"){
    if (frame%3 == 0){
      ctx.drawImage(sprite, 5, 1, 22, 33, canvas.width/2, canvas.height/2, 22, 33)
    }
    if (frame%3 == 1){
      ctx.drawImage(sprite, 35, 1, 27, 33, canvas.width/2, canvas.height/2, 27, 33)
    }
    if (frame%3 == 2){
      ctx.drawImage(sprite, 70, 1, 22, 33, canvas.width/2, canvas.height/2, 22, 33)
    }
    frame++;
    p1y += 5;
    p2y -= 5;
  }
    drawPlayers();
}

function moveBg(direction){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  if (direction == "left"){
    bgX += 5;
  }

  if (direction == "right"){
    bgX -= 5;
  }

  if (direction == "up"){
    bgY += 5;
  }

  if (direction == "down"){
    bgY -= 5;
  }
  ctx.drawImage(bgImg, 0, 0, 400, 300, bgX, bgY, 800, 800);
}

function drawPartner(){

}

function run(){
    canvas.addEventListener('keydown', onKeyDown, false);
    //canvas.addEventListener('keyup', onKeyUp, false);

    // make canvas focusable, then give it focus!
    canvas.setAttribute('tabindex','0');
    canvas.focus();

    //mapdev = setInterval(draw,100);

}

run();


// --------------------------------------------------------------
var canvas2 = document.getElementById("canvas2");
var ctx2 = canvas2.getContext("2d");

// globals
  var frame2 = 0;

  var bgX2 = -200;
  var bgY2 = -200;

  var p2x = 200;
  var p2y = 200;

  sprite2 = new Image();
  sprite2.src = "sheet.png";

  bgImg2 = new Image();
  bgImg2.src = "map1.png";

  function drawPlayers(){
  ctx.drawImage(sprite, 5, 1, 22, 33, p2x, p2y, 22, 33);
  ctx2.drawImage(sprite, 5, 1, 22, 33, p1x, p1y, 22, 33);
}


function onkeyDown(){
  var playerDir2 = "";
  // var moveLeft2 = false;
  // var moveRight2 = false;
  // var moveUp2 = false;
  // var moveDown2 = false;

  //moveLeft
  if ((event.keyCode === 37)) {
    playerDir2 = "left";
    }

  //moveRight
  if ((event.keyCode === 39)) {
    playerDir2 = "right";
    }

  // moveUp
  if ((event.keyCode === 38)) {
    playerDir2 = "up";
    }

  // moveDown
  if ((event.keyCode === 40)) {
    playerDir2 = "down";
    }
    moveBg2(playerDir2);
    playerMove2(playerDir2);
}



function playerMove2(diretion){
  //draws player
  if (diretion === "left"){
    if (frame2%3 == 0){
      ctx2.drawImage(sprite2, 7, 35, 17, 33, canvas.width/2, canvas.height/2, 17, 33)
    }
    if (frame2%3 == 1){
      ctx2.drawImage(sprite2, 35, 35, 21, 33, canvas.width/2, canvas.height/2, 21, 33)
    }
    if (frame2%3 == 2){
      ctx2.drawImage(sprite2, 71, 35, 17, 33, canvas.width/2, canvas.height/2, 17, 33)
    }
    frame2++;
    p1x += 5;
    p2x -= 5;
  }

  if (diretion === "right"){
    if (frame2%3 == 0){
      ctx2.drawImage(sprite2, 35, 69, 21, 33, canvas.width/2, canvas.height/2, 21, 33)
    }
    if (frame2%3 == 1){
      ctx2.drawImage(sprite2, 8, 69, 17, 33, canvas.width/2, canvas.height/2, 17, 33)
    }
    if (frame2%3 == 2){
      ctx2.drawImage(sprite2, 72, 69, 17, 33, canvas.width/2, canvas.height/2, 17, 33)
    }
    frame2++;
    p1x -= 5;
    p2x += 5;
  }


  if (diretion === "up"){
    if (frame2%3 == 0){
      ctx2.drawImage(sprite2, 35, 103, 27, 33, canvas.width/2, canvas.height/2, 27, 33)
    }
    if (frame2%3 == 1){
      ctx2.drawImage(sprite2, 6, 103, 21, 33, canvas.width/2, canvas.height/2, 21, 33)
    }
    if (frame2%3 == 2){
      ctx2.drawImage(sprite2, 70, 103, 21, 33, canvas.width/2, canvas.height/2, 21, 33)
    }
    frame2++;
    p1y += 5;
    p2y -= 5;
  }


  if (diretion === "down"){
    if (frame2%3 == 0){
      ctx2.drawImage(sprite2, 5, 1, 22, 33, canvas.width/2, canvas.height/2, 22, 33)
    }
    if (frame2%3 == 1){
      ctx2.drawImage(sprite2, 35, 1, 27, 33, canvas.width/2, canvas.height/2, 27, 33)
    }
    if (frame2%3 == 2){
      ctx2.drawImage(sprite2, 70, 1, 22, 33, canvas.width/2, canvas.height/2, 22, 33)
    }
    frame2++;
    p1y -= 5;
    p2y += 5;
  }
  drawPlayers();
}

function moveBg2(direction){
  ctx2.clearRect(0,0,canvas.width,canvas.height);
  if (direction == "left"){
    bgX2 += 5;
    ctx2.drawImage(bgImg2, 0, 0, 400, 300, bgX2, bgY2, 800, 800);
  }

  if (direction == "right"){
    bgX2 -= 5;
    ctx2.drawImage(bgImg2, 0, 0, 400, 300, bgX2, bgY2, 800, 800);
  }

  if (direction == "up"){
    bgY2 += 5;
    ctx2.drawImage(bgImg2, 0, 0, 400, 300, bgX2, bgY2, 800, 800);
  }

  if (direction == "down"){
    bgY2 -= 5;
    ctx2.drawImage(bgImg2, 0, 0, 400, 300, bgX2, bgY2, 800, 800);
  }
}

function run2(){
    canvas.addEventListener('keydown', onkeyDown, false);
    //canvas.addEventListener('keyup', onKeyUp, false);

    // make canvas focusable, then give it focus!
    canvas.setAttribute('tabindex','0');
    canvas.focus();

    //mapdev = setInterval(draw,100);
    //drawplayer = setInterval(player1,100);

}
run();
run2();