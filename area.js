function Area()
{
	this.canvas = document.getElementById('myCanvas');

	this.context = this.canvas.getContext('2d');
	
	this.mouseX = 0;
	this.mouseY = 0;
	
	this.clear = function(){
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.width);
	}
	
	this.getMousePos = function(mx, my){
		this.mouseX = mx;
		this.mouseY = my;
	}
	
	this.update = function(){
		this.canvas.width = this.canvas.height = 0.9*(document.body.clientHeight);
	}
}