var Layer = new JS.Class(Drawable, {
	// NOTE: there is no gaurantee of the objects of the 
	// same layer being drawn in any particular order
	// add objects in different layers if you want to draw
	// then in any particular order

	initialize: function(argObj) {
		this.depth = 0;
		this.drawables = [];
	},

	draw: function(context) {
		this.callSuper(context);
		for (var i = 0; i < this.drawables.length; i++) {
			this.drawables[i].draw(context);
		}
	},

	addDrawable: function(drawable) {
		this.drawables.push(drawable);
	},

	removeDrawable: function(argObj) {
	}
});
