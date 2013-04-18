var GAMEPLAY = (function() {

  var exports = {};
  var players = {};
  var enemies = {};

  socket.on('sendPlayerLocationsToClient', function(data) {
    players = JSON.parse(data.playerList);
    // console.log(players);
  });

  socket.on('sendEnemyLocationsToClient', function(data) {
    enemies = JSON.parse(data.enemyList);
    // console.log(enemies);
  });

  exports.loadCanvas = function() {

      // Gameplay Area
      canvas = document.createElement('canvas');
      div = document.getElementById('gameDiv');
      div.style.width = '100%';
      div.style.height = '50%'; 
      canvas.id     = "gameCanvas";
      canvas.width  = 568;
      canvas.height = 320;
      canvas.style.width = '80%';
      canvas.style.left = "10%";
      canvas.style.height = '75%';
      canvas.style.zIndex   = 8;
      canvas.style.position = "absolute";
      

      div.appendChild(canvas);

      // Analog
      MScanvas = document.createElement('canvas');
      div = document.getElementById('analogDiv'); 
      MScanvas.id     = "movementStick";
      MScanvas.width  = 100;
      MScanvas.height = 100;
      MScanvas.style.zIndex   = 8;
      MScanvas.style.position = "absolute";
      div.appendChild(MScanvas);
      MSTICK.render();
    }

  function loop() {
    PLAYER.doDraw(players);
    ENEMY.drawEnemies(enemies);
  }


  function run(){
    canvas.addEventListener('keydown', PLAYER.onKeyDown, false);

    setInterval(loop, 30);
  }

  exports.init = function () {
    console.log("init began");
    canvas = document.getElementById("gameCanvas");
    canvas.setAttribute('tabindex','0');
    ctx = canvas.getContext("2d");
    MScanvas = document.getElementById("movementStick");
    MSctx = MScanvas.getContext("2d");
    canvas.focus();
    socket.emit('readyToPlay');
    run();

  };
return exports;
}());