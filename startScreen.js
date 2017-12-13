function StartScreen(m_area)
{
	this.area = m_area;
	this.buttons = [];
	
	this.label = null;
	
	this.checkButtons = function(){
		for(var i =0; i< this.buttons.length; i++)
		{
			if(this.buttons[i].isClicked == true)
				return this.buttons[i].id;
		}
	}
	
	this.draw = function(){
		this.label.draw();
		
		for(var i = 0; i < this.buttons.length; i++)
			this.buttons[i].draw();
	}
	
	this.intialize = function(){
		this.label = new Label('auto', 60, 200, 80, 'white', 'GAME MENU', this.area);
		this.buttons.push(new Button('#start', 'auto', 170, 200, 80, '#0066ff', 'white', 'START', this.area, 'scale'));
		this.buttons.push(new Button('#info', 'auto', 280, 200, 80, '#ffcc00', 'black', 'INFO', this.area, 'scale'));
		this.buttons.push(new Button('#exit', 'auto', 390, 200, 80, 'red', 'white', 'EXIT', this.area, 'scale'));
	}
	
	this.update = function(){
		this.label.update();
		for(var i = 0; i < this.buttons.length; i++)
		{
			this.buttons[i].update();
			this.buttons[i].onHover();
			this.buttons[i].onClicked();
		}
	}
}

