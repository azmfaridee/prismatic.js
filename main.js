JS.require('JS.Hash',
	'JS.Observable',
	'Prismatic',
	'Drawable',
	'Layer',
	'Rectangle',
	'Line',
	'Circle', function() {
	
	prismatic.configure({
		canvasId: 'myCanvas',
		width: 640,
		height: 480,
		backgroundColor: 'white',
		frameRate: 24,
	});

	var baseLayer = new Layer();

	var rect = new Rectangle({
		x: 100,
		y: 100,
		height: 100,
		width: 200,
		fillColor: '#aa6633',
		strokeColor: 'green',
		strokeWidth: 4
	});
	rect.setProperty({
		x: 200,
		y: 200,
		position: 'absolute'
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
	baseLayer.addDrawable(line);

	var circle = new Circle({
		x: 100,
		y: 100,
		radius: 100,
		fillColor: '#223377'
	});
	baseLayer.addDrawable(circle);

	// howto add empty lines 
	// var line2 = new Line({});
	// baseLayer.addDrawable(line2);
	// // empty rectangles
	// var rect2 = new Rectangle({});
	// baseLayer.addDrawable(rect2);

	prismatic.addLayer(baseLayer);
	console.log('TAKING PRISMATIC CORE OFFLINE!!');
});
