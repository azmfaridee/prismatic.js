var Layer = new JS.Class(Drawable, {
	// NOTE: there is no gaurantee of the objects of the 
	// same layer being drawn in any particular order
	// add objects in different layers if you want to draw
	// then in any particular order
	
	initialize: function(argObj) {
		this.depth = 0;
		this.drawables = [];
	},

	draw: function(argObj) {
		// override drawable draw function
	},

	addDrawable: function(argObj) {

	},

	removeDrawable: function(argObj) {
	}
});
