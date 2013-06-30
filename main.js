JS.require('JS.Hash',
	'JS.Observable',
	'Animal',
	'Cat',
	'Prismatic',
	'Drawable',
	'Layer',
	'Rectangle', function() {
	
	prismatic.configure({
		canvas: 'myCanvas',
		width: 640,
		height: 480,
		backgroundColor: 'white',
		frameRate: 24,
	});

	var baseLayer = new Layer();
	prismatic.addLayer(baseLayer);

	var rect = new Rectangle({
		x: 100,
		y: 100,
		height: 100,
		width: 100,
		fillColor: 'red',
		strokeColor: 'blue',
		strokeWidth: 2
	});
	rect.setPosition({
		x: 200,
		y: 200,
		position: 'absolute'
	});
	rect.changeLayer();

	console.log(JSON.stringify(rect, null, 2));
	console.log('End of program');
});
