function Player(m_area)
{
	this.ctx = m_area.context;
	
	this.gravity = 4;
	
	this.jumpPower = 100;
	
	this.width = 20;
	
	this.x = this.y = (m_area.canvas.width/2) - this.width/2;
	
	this.draw = function(){
		this.ctx.fillStyle = "red";
		this.ctx.fillRect(this.x, this.y, this.width, this.width);
	}
	
	this.jump = function(){
		this.y -= this.jumpPower;
	}
	
	this.setX = function(){
		this.x = (m_area.canvas.width/2) - this.width/2;
	}
	
	this.update = function(){
		this.setX();
		
		this.y += this.gravity;
		
		if(this.y >= m_area.canvas.height )
			this.y = 0;
	}
}