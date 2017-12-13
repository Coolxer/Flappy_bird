function Rectangle(m_area)
{
	this.area = m_area;
	this.color = "white"
	
	this.top = Math.floor((Math.random() * this.area.canvas.width/2) + 1);
	this.bottom = Math.floor((Math.random() * this.area.canvas.width/2) + 1);
	
	this.speed = 3;
	
	this.x = this.area.canvas.width;
	this.width = 20;
	
	this.draw = function(){
		this.area.context.fillStyle = this.color;
		this.area.context.fillRect(this.x, 0, this.width, this.top);
		this.area.context.fillRect(this.x, this.area.canvas.width - this.bottom, this.width, this.bottom);
	}
	
	this.move = function(){
		this.x -= this.speed;
	}
	
	this.update = function(){
		//this.width = this.area.canvas.width / 20; this make the points dont want to be added to my account
		this.speed = this.area.canvas.width / 160;
	}
}