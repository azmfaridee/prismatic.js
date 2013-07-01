var Circle = new JS.Class(Drawable, {
	// constructor
    initialize: function(argObj) {
    	this.callSuper(argObj);

    	this.radius = argObj.radius || 10;
    	this.strokeColor = argObj.strokeColor || 'black';
    	this.strokeWidth = argObj.strokeWidth || 1;
    	this.fillColor = argObj.fillColor || '#ddaaff';
    },

	draw: function(context) {
		this.callSuper(context);

		context.beginPath();
		context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
		context.fillStyle = this.fillColor;
		context.fill();
		context.lineWidth = this.strokeWidth;
		context.strokeStyle = this.strokeColor;

		context.stroke();
	},

	performHitTest: function (eventObj) {
		// console.log(eventObj);
		// console.log(this);
		var hitX = eventObj.x;
		var hitY = eventObj.y;
		if (Math.pow(hitY - this.x, 2) + Math.pow(hitY - this.y, 2) < Math.pow(this.radius, 2)) {
			// console.log('inside');
			return true;
		}
		return false;
	}
});
