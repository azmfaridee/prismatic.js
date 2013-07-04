var Layer = new JS.Class(Drawable, {
	// NOTE: there is no gaurantee of the objects of the 
	// same layer being drawn in any particular order
	// add objects in different layers if you want to draw
	// then in any particular order

	initialize: function(argObj) {
		// TODO: fix this hack of automatic argObj creation
		if (argObj === undefined) {argObj = {}};
		this.callSuper(argObj)

		this.depth = argObj.depth || 0;
		this.drawables = [];
        this.uniqueName = 'Layer';
	},

	draw: function(context) {
		this.callSuper(context);
		for (var i = 0; i < this.drawables.length; i++) {
			this.drawables[i].draw(context);
		}
	},

	addDrawable: function(drawable) {
		this.drawables.push(drawable);
		drawable.parent = this;
	},

	removeDrawable: function(argObj) {
	},

	onClick: function(eventObj) {
		for (var i = 0; i < this.drawables.length; i++) {
			if (this.drawables[i].performHitTest(eventObj) === true) {
				this.drawables[i].onClick(eventObj);	
			}
		}
	},

	performHitTest: function (eventObj) {
		return true;
	}
});
