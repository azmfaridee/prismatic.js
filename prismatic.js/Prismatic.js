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
        this.timePerFrame = null;

        // requestAnimationFrame function init
        // TODO: need to update this with a fail safe funciton implementation
        (function() {
            var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
        window.requestAnimationFrame = requestAnimationFrame;
        })();
	},

    /*
        this function must allways be called
    */
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
        this.timePerFrame = Math.round(100000 / this.frameRate) / 100;

    	// init the layer
        // TODO: need to sort the layers according to their depth

        // the main drawing loop by using the layers
        // need to call this one with requestAnimationFrame() over and over
        var layers = this.layers;
        function render() {
            context.clearRect(0, 0, canvas.width, canvas.height);
            // redraw everything
            for (var i = 0; i < layers.length; i++) {
                layers[i].draw(context);
            }
            requestAnimationFrame(render)
        }

        render();
    },

    addLayer: function(layer) {
    	this.layers.push(layer);
        layer.parent = this;
    	// TODO: sort layers according to depth
    }
});

window.prismatic = new Prismatic();
console.log('PRISMATIC CORE ONLINE!');

