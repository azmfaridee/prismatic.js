var Rectangle = new JS.Class(Drawable, {
	// constructor
    initialize: function(arg) {
    	this.x = arg.x;
    	this.y = arg.y;
    	this.height = arg.height;
    	this.width = arg.width;
    	this.fillColor = arg.fillColor;
    	this.strokeColor = arg.strokeColor;
    	this.strokeWidth = arg.strokeWidth;
    	this.position = 'absolute';
    },

	draw: function(arg) {
		// override drawable draw function
	},

	setPosition: function(arg) {
		this.x = arg.x;
		this.y = arg.y;
		this.position = arg.position;
	},

	changeLayer: function(arg) {

	}
});
