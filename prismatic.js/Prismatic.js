var Prismatic = new JS.Class({
	initialize: function() {
    	this.canvasId = null;
        this.canvas = null;
    	this.width = 640;
    	this.height = 480;
    	this.backgroundColor = 'white';
    	this.frameRate = 24;
    	this.layers = [];
        this.context = null;
	},

    configure: function(argObj) {
    	this.canvasId = argObj.canvasId;
    	this.width = argObj.width;
    	this.height = argObj.height;
    	this.backgroundColor = argObj.backgroundColor;
    	this.frameRate = argObj.frameRate;

    	// init the canvas
        var canvas = this.canvas = document.getElementById(this.canvasId);
        canvas.height = this.height;
        canvas.width = this.width;
        var context = this.context = this.canvas.getContext('2d');

    	// init the frame rate
    	
    	// init the layer
    },

    addLayer: function(layer) {
    	this.layers.push(layer);
    	// TODO: sort layers according to depth
    }
});

window.prismatic = new Prismatic();
console.log('PRISMATIC CORE ONLINE!');

