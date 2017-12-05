function Game()
{
	this.area = new Area();
	this.player = new Player(this.area);
	this.state = gameState.START;
	
	this.score = new Score(this.area);
	
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
		this.startScreen.draw();
		
		if(this.startScreen.checkButtons() === "#start")
			this.state = gameState.PLAY;
	}
	
	this.play = function(){
		this.endScreen.labels[1].resetText();
		this.draw();
		this.score.draw();
	}
	
	this.pause = function(){
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
		this.endScreen.draw();
		
		if(this.endScreen.checkButtons() === "#replay")
		{
			this.rectangles = [];
			this.endScreen.buttons[0].isClicked = false;
			this.state = gameState.PLAY;
		}
	}
	
	this.update = function()
	{
		if(timer % 50 == 0)
		{
			this.rectangles.push(new Rectangle(this.area));
			this.score.update();
		}
		
		for(var i=0; i<this.rectangles.length; i++)
			this.rectangles[i].move();
		
		this.player.update();
		this.checkCollision();
	}
	
	this.draw = function()
	{
		this.update();
		
		for(var i = 0; i < this.rectangles.length; i++)
			this.rectangles[i].draw();
		
		this.player.draw();
	}

	this.checkCollision = function(){
		for(var i = 0; i < this.rectangles.length; i++)
		{
			if(((this.player.y <= this.rectangles[i].top) || (this.player.y >= (this.area.canvas.height - this.rectangles[i].bottom))) && ((this.player.x >= this.rectangles[i].x) && (this.player.x <= (this.rectangles[i].x + this.rectangles[i].width))))
			{
				this.endScreen.labels[1].text += this.score.value;
				this.state = gameState.END;
				this.score.reset();
			}
		}
	}
}