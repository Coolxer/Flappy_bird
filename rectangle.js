function Rectangle(m_area)
{
	this.ctx = m_area.context;
	this.color = "white"
	
	this.top = Math.floor((Math.random() * m_area.canvas.width/2) + 1);
	this.bottom = Math.floor((Math.random() * m_area.canvas.width/2) + 1);
	
	this.speed = 3;
	
	this.x = m_area.canvas.width;
	this.width = 20;
	
	this.draw = function(){
		this.ctx.fillStyle = this.color;
		this.ctx.fillRect(this.x, 0, this.width, this.top);
		this.ctx.fillRect(this.x, m_area.canvas.width - this.bottom, this.width, this.bottom);
	}
	
	this.move = function(){
		this.x -= this.speed;
	}
}