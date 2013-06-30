var Rectangle = new JS.Class(Drawable, {
	// constructor
    initialize: function(argObj) {
    	this.callSuper(argObj);
    	this.height = argObj.height;
    	this.width = argObj.width;
    	this.fillColor = argObj.fillColor;
    	this.strokeColor = argObj.strokeColor;
    	this.strokeWidth = argObj.strokeWidth;
    },

	draw: function(context) {
		this.callSuper(context);

		context.beginPath();

		context.rect(this.x, this.y, this.width, this.height);
		context.fillStyle = this.fillColor;
		context.fill();
		context.lineWidth = this.strokeWidth;
		context.strokeStyle = this.strokeColor;
		
		context.stroke();
	},
});
