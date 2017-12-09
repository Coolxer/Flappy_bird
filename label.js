function Label(x, y, width, height, color, text, m_area)
{	
	this.area = m_area;
	
	this.x = x;
	this.y = y;
	
	this.color = color;
	this.text = text;
	
	this.width = width; 
	this.height = height; 

	if(this.x == 'auto') this.xcopy = this.x;
	
	this.draw = function(){
		if(this.xcopy == 'auto')
			this.x = this.area.canvas.width/2 - this.width/2;
		
		this.area.context.fillStyle = this.color;
			
		this.area.context.font = this.height/1.5 + "px Comic Sans MS";
		
		this.area.context.textAlign = "center"; 
		this.area.context.textBaseline = "middle";
		
		this.area.context.fillText(this.text, this.x  +(this.width / 2), this.y + (this.height / 2));
	}
	
	this.resetText = function(){
		this.text = text;
	}
	
	this.update = function(){
		if(this.xcopy == 'auto')
			this.x = this.area.canvas.width/2 - this.width/2;
	}
}