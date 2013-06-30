var Prismatic = new JS.Class({

	initialize: function() {
    	this.canvasId = null;
        this.canvas = null;
    	this.width = 640;
    	this.height = 480;
    	this.frameRate = 24;
    	this.layers = [];
        this.context = null;
        this.timePerFrame = null;
	},

    setupRequestAnimationFrame: function() {
        var requestAnimationFrame = window.requestAnimationFrame || 
            window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || 
            window.msRequestAnimationFrame || function (callback) {
                window.setTimeout(callback, this.timePerFrame);
            };
        window.requestAnimationFrame = requestAnimationFrame;
    },

    /*
        this function must allways be called
        TODO: need to have try catch mechanism so that when this function is
        not called, the system throws an error
    */
    configure: function(argObj) {
        this.setupRequestAnimationFrame();

    	this.canvasId = argObj.canvasId;
    	this.width = argObj.width;
    	this.height = argObj.height;
    	this.backgroundColor = argObj.backgroundColor;
    	this.frameRate = argObj.frameRate;

        this.canvas = document.getElementById(this.canvasId);
        this.canvas.height = this.height;
        this.canvas.width = this.width;
        this.context = this.canvas.getContext('2d');

        this.timePerFrame = Math.round(100000 / this.frameRate) / 100;

        var layers = this.layers;

        this.initializeRenderer();
        this.initializeEventListeners();
    },

    initializeRenderer: function() {
        var that = this;
        function render() {
            // TODO: saving and restoring of transformation matrix for more reliable clearing
            // http://stackoverflow.com/questions/2142535/how-to-clear-the-canvas-for-redrawing
            that.context.clearRect(0, 0, that.canvas.width, that.canvas.height);
            for (var i = 0; i < that.layers.length; i++) {
                that.layers[i].draw(that.context);
            }
            requestAnimationFrame(render)
        }
        render();
    },

    initializeEventListeners: function() {
        var that = this;
        this.canvas.addEventListener('click', function (event) {
            // console.log('click (' + event.x + ', ' + event.y + ')');
            for (var i = 0; i < that.layers.length; i++) {
                if (that.layers[i].performHitTest(event) === true) {
                    that.layers[i].onClick(event);    
                }
            }
        });

        this.canvas.addEventListener('mousemove', function (event) {
            // console.log('mousemove (' + event.x + ', ' + event.y + ')');
        });

        /*

        // Other helpful event listeners, we don't need to enable them for the
        // time being

        this.canvas.addEventListener('mousedown', function (event) {
            // console.log('mousedown (' + event.x + ', ' + event.y + ')');
        });

        this.canvas.addEventListener('mouseup', function (event) {
            // console.log('mouseup (' + event.x + ', ' + event.y + ')');
        });

        this.canvas.addEventListener('mouseover', function (event) {
            console.log('mouseover (' + event.x + ', ' + event.y + ')');
        });

        this.canvas.addEventListener('mouseout', function (event) {
            console.log('mouseout (' + event.x + ', ' + event.y + ')');
        });

        */
    },

    addLayer: function(layer) {
    	this.layers.push(layer);
        layer.parent = this;

    	// sort layers according to depth, a layer with 
        // higher depth valued layer will be drawn later, will
        // stay on top
        this.layers.sort(function (layer1, layer2) {
            return (layer1.depth - layer2.depth);
        });
    }
});

window.prismatic = new Prismatic();
console.log('PRISMATIC CORE ONLINE!');
