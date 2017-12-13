function Player(m_area)
{
	this.area = m_area;
	
	this.gravity = 4;
	
	this.jumpPower = 100;
	
	this.width = 20;
	
	this.x = this.y = (this.area.canvas.width/2) - this.width/2;
	
	this.draw = function(){
		this.area.context.fillStyle = "#0066ff";
		this.area.context.fillRect(this.x, this.y, this.width, this.width);
	}
	
	this.jump = function(){
		this.y -= this.jumpPower;
	}
	
	this.setX = function(){
		this.x = (this.area.canvas.width/2) - this.width/2;
	}
	
	this.update = function(){
		this.resizeUpdate();
		
		this.y += this.gravity;
		
		if(this.y >= this.area.canvas.height )
			this.y = 0;
	}
	
	this.resizeUpdate = function(){
		this.setX();
		this.width = this.area.canvas.width / 20;
		this.gravity = this.width / 8;
		this.jumpPower = this.gravity * 25;
	}
}