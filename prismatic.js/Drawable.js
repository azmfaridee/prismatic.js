/*
	Drawable is the base class all objects should extend
	that you wish to draw on the canvas	
*/
var Drawable = new JS.Class({
    initialize: function(argObj) {
    	this.x = argObj.x;
    	this.y = argObj.y;
    	this.position = 'absolute';
    },

    draw: function(context) {
    	this.context = context;
    },

	setProperty: function(argObj) {
		this.x = argObj.x;
		this.y = argObj.y;
		this.position = argObj.position;
	},

	changeLayer: function(argObj) {
		// TODO finish this function
	},
});
