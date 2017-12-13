function Game()
{
	this.area = new Area();
	this.player = new Player(this.area);
	this.score = new Score(this.area);
	this.state = gameState.START;
	
	this.startScreen = new StartScreen(this.area);
	this.pauseScreen = new PauseScreen(this.area);
	this.endScreen = new EndScreen(this.area);
	
	this.rectangles = [];
	
	this.thisStart = function(){
		this.startScreen.intialize();
		this.pauseScreen.intialize();
		this.endScreen.intialize();
	}
	
	this.manageStates = function(){
		switch(this.state)
		{
				case 0:
					this.start();
					break;
				case 1:
					this.play();
					break;
				case 2:
					this.pause();
					break;
				case 3:
					this.end();
					break;
		}
	}
	
	this.start = function(){
		this.startScreen.update();
		this.startScreen.draw();
		
		if(this.startScreen.checkButtons() === "#start")
			this.state = gameState.PLAY;
	}
	
	this.play = function(){
		this.endScreen.labels[1].resetText();
		this.update();
		this.draw();
		this.score.draw();
	}
	
	this.pause = function(){
		this.pauseScreen.update();
		this.pauseScreen.draw();
		cancelAnimationFrame(timer);
		timer = 0;

		if(this.pauseScreen.checkButton() === "#resume")
		{
			this.pauseScreen.button.isClicked = false;
			this.state = gameState.PLAY;
		}
	}
	
	this.end = function(){
		this.endScreen.update();
		this.endScreen.draw();
		
		if(this.endScreen.checkButtons() === "#replay")
		{
			this.rectangles = [];
			this.endScreen.buttons[0].isClicked = false;
			this.state = gameState.PLAY;
		}
	}
	
	this.checkCollision = function(){
		if(this.rectangles.length > 1)
		{
			if(((this.player.x + this.player.width / 2) >= (this.rectangles[this.rectangles.length - 2].x + this.rectangles[this.rectangles.length - 2].width / 2)) && ((this.player.x + this.player.width / 2) <= (this.rectangles[this.rectangles.length - 2].x + this.rectangles[this.rectangles.length - 2].width / 2 + 1)))
				this.score.update();
			
			if((((this.player.x + this.player.width) >= this.rectangles[this.rectangles.length - 2].x) && (this.player.x <= (this.rectangles[this.rectangles.length - 2].x + this.rectangles[this.rectangles.length - 2].width))) && ((this.player.y <= this.rectangles[this.rectangles.length - 2].top) || ((this.player.y + this.player.width) >= (this.area.canvas.width - this.rectangles[this.rectangles.length - 2].bottom))))
			{
				this.endScreen.labels[1].text += this.score.value;
				this.state = gameState.END;
				this.score.reset();
			}
		}
	}
	
	this.draw = function() {	
		for(var i = 0; i < this.rectangles.length; i++)
			this.rectangles[i].draw();
		
		this.player.draw();
	}
	
	this.update = function() {
		if(timer % 50 == 0)
			this.rectangles.push(new Rectangle(this.area));	
		
		for(var i = 0; i < this.rectangles.length; i++)
		{
			this.rectangles[i].update();
			this.rectangles[i].move();
			
			if((this.rectangles[i].x + this.rectangles[i].width) <= 0 )
				this.rectangles.splice(this.rectangles[i], 1);
		}
		
		this.player.update();
		this.checkCollision();
	}
}