var Prismatic = new JS.Class({
	initialize: function() {
    	this.canvas = 'canvas';
    	this.width = 640;
    	this.height = 480;
    	this.backgroundColor = 'white';
    	this.frameRate = 24;
    	this.layers = [];
	},

    configure: function(arg) {
    	this.canvas = arg.canvas;
    	this.width = arg.width;
    	this.height = arg.height;
    	this.backgroundColor = arg.backgroundColor;
    	this.frameRate = arg.frameRate;
    	// init the canvas
    	
    	// init the frame rate
    	
    	// init the layer
    },

    addLayer: function(layer) {
    	this.layers.push(layer);
    	// TODO: sort layers according to depth
    }
});

window.prismatic = new Prismatic();
console.log('Prismatic core online');

