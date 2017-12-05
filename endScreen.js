function EndScreen(m_area)
{
	this.area = m_area;
	this.buttons = [];
	
	this.labels = [];
	
	this.intialize = function(){
		this.labels.push(new Label('auto', 60, 200, 80, 'white', 'GAME OVER!', this.area));
		this.labels.push(new Label('auto', 130, 80, 40, 'orange', 'Your score:', this.area));
		this.buttons.push(new Button('#replay', 'auto', 180, 200, 80, '#0066ff', 'white', 'REPLAY', this.area, 'scale'));
		this.buttons.push(new Button('#exit', 'auto', 280, 200, 80, '#ffcc00', 'black', 'EXIT', this.area, 'scale'));
	}
	
	this.checkButtons = function(){
		for(var i =0; i< this.buttons.length; i++)
		{
			if(this.buttons[i].isClicked == true)
				return this.buttons[i].id;
		}
	}
	
	this.draw = function(){
		for(var j = 0; j < this.labels.length; j++)
			this.labels[j].draw();
		
		
				
		for(var i = 0; i < this.buttons.length; i++)
		{
			this.buttons[i].onHover();
			this.buttons[i].onClicked();
			this.buttons[i].draw();
		}
	}
}

