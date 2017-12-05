function Player(m_area)
{
	this.width = 20;
	this.height = 20;
	
	this.x = (m_area.canvas.width/2) - this.width/2;
	this.y = (m_area.canvas.height/2) - this.height/2;
	
	this.gravity = 4;
	this.jumpPower = 100;
	
	this.ctx = m_area.context;
	
	this.setX = function(){
		this.x = (m_area.canvas.width/2) - this.width/2;
	}
	
	this.setY = function(){
		this.y = (m_area.canvas.height/2) - this.height/2;
	}
	
	this.update = function(){
		this.y += this.gravity;
		
		if(this.y >= m_area.canvas.height )
			this.y = 0;
	}
	
	this.jump = function(){
		this.y -= this.jumpPower;
	}
	
	this.draw = function(){
		this.ctx.fillStyle = "red";
		this.ctx.fillRect(this.x, this.y, this.width, this.height);
	}
}