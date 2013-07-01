var Line = new JS.Class(Drawable, {
	// constructor
    initialize: function(argObj) {
    	this.callSuper(argObj);
        this.x2 = argObj.x2 || 50;
        this.y2 = argObj.y2 | 50;
        this.strokeColor = argObj.strokeColor || 'black';
        this.strokeWidth = argObj.strokeWidth || 1;
    },

	draw: function(context) {
        this.callSuper(context);

        context.beginPath();

        context.moveTo(this.x, this.y);
        context.lineTo(this.x2, this.y2);
        context.lineWidth = this.strokeWidth;
        context.strokeStyle = this.strokeColor;

        context.stroke();

	},

    performHitTest: function (eventObj) {
        return false;
    },
});
