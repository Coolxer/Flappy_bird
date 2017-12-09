var x = true;
var timer = 0;

var gameState = {
	START: 0,
	PLAY: 1,
	PAUSE: 2,
	END: 3
};

var game = new Game();

game.thisStart();

$(window).keypress(function(e) {
	if (e.which === 32)
        game.player.jump();
});

$(document).keyup(function(e) {
     if (e.keyCode === 27)
		game.state = gameState.PAUSE;
});

function gameLoop() 
{
	game.area.update();
	game.manageStates();
	timer = requestAnimationFrame(gameLoop);
}

gameLoop();



