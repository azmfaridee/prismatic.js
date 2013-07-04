JS.require('JS.Hash',
	'JS.Observable',
	'Prismatic',
	'Drawable',
	'Layer',
	'Rectangle',
	'Line',
	'Circle', function() {
	
	/* 
		This is a must
	*/
	prismatic.configure({
		canvasId: 'myCanvas',
		width: 640,
		height: 480,
		backgroundColor: 'white',
		frameRate: 24
	});

	var baseLayer = new Layer({
		depth: 0
	});

	var upperLayer = new Layer({
		depth: 1
	});

	var rect = new Rectangle({
		height: 150,
		width: 300,
		fillColor: '#aa6633',
		strokeColor: '995522',
		strokeWidth: 4
	});
	rect.setProperty({
		x: 100,
		y: 150,
		position: 'absolute'
	});
	rect.on({
		eventType: 'click',
		callback: function() {
			console.log('rectangle clicked');
		}
	});
	baseLayer.addDrawable(rect);

	var line = new Line({
		x: 100,
		y: 150,
		x2: 450,
		y2: 50,
		strokeColor: '#aa6633',
		strokeWidth: 4
	});
	upperLayer.addDrawable(line);

	var circle = new Circle({
		x: 100,
		y: 100,
		radius: 100,
		fillColor: '#223377'
	});

	circle.on({
		eventType: 'click',
		callback: function(argObj) {
			console.log(argObj.a + ' ' + argObj.b + ' ' + argObj.c);
		},
		callbackArgObject: {
			a: 'Clicked',
			b: 'inside',
			c: 'circle'
		}
	});

	baseLayer.addDrawable(circle);

	// howto add empty lines 
	// var line2 = new Line({});
	// baseLayer.addDrawable(line2);
	// // empty rectangles
	// var rect2 = new Rectangle({});
	// baseLayer.addDrawable(rect2);

	prismatic.addLayer(baseLayer);
	prismatic.addLayer(upperLayer);

    console.log(circle);
//	console.log(rect);
	console.log(prismatic);
	console.log('TAKING PRISMATIC CORE OFFLINE!!');
});
