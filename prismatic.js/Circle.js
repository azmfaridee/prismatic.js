var Circle = new JS.Class(Drawable, {
    initialize: function(argObj) {
    	this.callSuper(argObj);

    	this.radius = argObj.radius || 10;
    	this.strokeColor = argObj.strokeColor || 'black';
    	this.strokeWidth = argObj.strokeWidth || 1;
    	this.fillColor = argObj.fillColor || '#ddaaff';
        this.uniqueName = 'Circle';
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
		var that = this;
		return this.callSuper(eventObj, function(hitX, hitY) {
			if (Math.pow(hitX - that.x, 2) + Math.pow(hitY - that.y, 2) < Math.pow(that.radius, 2)) {
				return true;
			}
			return false;	
		});
	}
});
