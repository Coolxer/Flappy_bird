function Button(id, x, y, width, height, color, textColor, text, m_area, hoverable)
{	
	this.area = m_area;
	this.id = id;
	
	this.color = color;
	this.textColor = textColor;
	this.text = text;
	
	this.x = x;
	this.y = y;
	
	this.width = width; 
	this.height = height; 
	
	this.isClicked = false;
	
	this.difference = this.y / this.area.canvas.width;
	
	if(hoverable !== 'none')
	{
		this.hoverable = hoverable;
		this.isHover = false;
		
		this.helpWidth = this.width;
		this.helpHeight = this.height;
		
		this.helpColor = this.color;
		this.helpTxColor = this.textColor;
	}

	if(this.x == 'auto') this.xcopy = this.x;
	
	this.draw = function(){
		this.area.context.fillStyle = this.color;
			
		this.area.context.fillRect(this.x, this.y, this.width, this.height);
		this.area.context.font =  this.height / 2 + "px Comic Sans MS";
		this.area.context.fillStyle = this.textColor;
		
		this.area.context.textAlign = "center"; 
		this.area.context.textBaseline = "middle";
		
		this.area.context.fillText(this.text, this.x  +(this.width / 2), this.y + (this.height / 2));
	}
	
	this.hoverAction = function(x){
		switch(this.hoverable)
		{
			case 'both':
				this.switchColors(x);
				this.scaleRects(x);
				break;
			case 'color':
				this.switchColors(x);
				break;
			case 'scale':
				this.scaleRects(x);
				break;
		}
	}
	
	this.scaleRects = function(isOn){
		if(isOn)
		{
			this.width = this.helpWidth;
			this.height = this.helpHeight;
		}
		else
		{
			this.width += 0.1 * this.width;
			this.height += 0.1 * this.height;
		}
	}
	
	this.switchColors = function(isOn){
		if(isOn)
		{
			this.color = this.helpColor;
			this.textColor = this.helpTxColor;	
		}
		else
		{
			this.color = this.helpTxColor;
			this.textColor = this.helpColor;
		}
	}
	
	this.onClicked = function(){
		if(this.area.isClicked == true)
		{
			if((this.area.mouseX >= this.x && this.area.mouseX <= (this.x + this.width)) && (this.area.mouseY >= this.y && this.area.mouseY <= (this.y + this.height)))
				this.isClicked = true;
		}
	}
	
	this.onHover = function(){
		if((this.area.mouseX >= this.x && this.area.mouseX <= (this.x + this.width)) && (this.area.mouseY >= this.y && this.area.mouseY <= (this.y + this.height)))
		{
			if(this.isHover === false)
			{
				this.hoverAction(this.isHover);
				this.isHover = true;
			}
		}
		else
		{
			if(this.isHover)
			{
				this.hoverAction(this.isHover);	
				this.isHover = false;
			}
		}
	}
	
	this.update = function(){
		if(this.xcopy == 'auto')
			this.x = this.area.canvas.width/2 - this.width/2;
		
		this.y = this.difference * this.area.canvas.width;
		
		this.width = this.area.canvas.width / 3;
		this.height = this.area.canvas.width / 7;
	}
}