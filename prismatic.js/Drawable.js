/*
	Drawable is the base class all objects should extend
	that you wish to draw on the canvas	
*/
var Drawable = new JS.Class({
    initialize: function(argObj) {
    	this.position = argObj.position || 'absolute';
    	this.x = argObj.x || 0;
    	this.y = argObj.y || 0;
    	this.parent = argObj.parent || null;

    	this.eventListeners = {};
    },

    draw: function(context) {
    	this.context = context;
    },

	setProperty: function(argObj) {
		this.x = argObj.x || this.x;
		this.y = argObj.y || this.y;
		this.position = argObj.position || this.position;
	},

	changeLayer: function(argObj) {
		// TODO finish this function

		// ALGO BEING
		// get parent reference
		// remove itself form it's parent
		// add itself to new layer
		// ALGO END
	},

	performHitTest: function(event) {
		return false;
	},

	onClick: function(event) {
		var callback = this.eventListeners.click.callback;
		var argObj =this.eventListeners.click.argObj;
		callback(argObj);
	},

	on: function(argObj) {
		var eventType = argObj.eventType || {};
		var callback = argObj.callback || function() {};
		var callbackArgObject = argObj.callbackArgObject || {};

		this.eventListeners[eventType] = { callback: callback, argObj : callbackArgObject};

	},
});
