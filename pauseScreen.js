function PauseScreen(m_area)
{
	this.area = m_area;
	this.button = null;
	
	this.label = null;
	
	this.checkButton = function(){
		if(this.button.isClicked == true)
			return this.button.id;
	}
	
	this.draw = function(){
		this.label.draw();
		this.button.draw();
	}
	
	this.intialize = function(){
		this.label = new Label('auto', 60, 200, 80, 'white', 'PAUSE', this.area);
		this.button = new Button('#resume', 'auto', 275, 200, 80, '#0066ff', 'white', 'RESUME', this.area, 'scale');
	}
	
	this.update = function(){
		this.button.update();
		this.button.onHover();
		this.button.onClicked();
	}
}

