function Score(m_area)
{
	this.area = m_area;
	this.value = 0;
	
	this.draw = function(){
		this.area.context.fillStyle = 'orange';
			
		this.area.context.font = "30px Comic Sans MS";
		
		this.area.context.textAlign = "center"; 
		this.area.context.textBaseline = "middle";
		
		this.area.context.fillText(this.value, (8/9) * ( this.area.canvas.width), (1/9) * ( this.area.canvas.width));
	}
	
	this.reset = function(){
		this.value = 0;
	}
	
	this.update = function(){
		this.value += 1;
	}
}