
var mouseX = 0, mouseY = 0;

document.onmousemove = function(e) {
	mouseX = e.pageX - $('#myCanvas').offset().left;
	mouseY = e.pageY - $('#myCanvas').offset().top;
	game.area.getMousePos(mouseX, mouseY);
}

document.onmousedown = function(e){
	game.area.isClicked = true;
}

document.onmouseup = function(e){
	game.area.isClicked = false;
}