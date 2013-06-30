JS.require('JS.Hash',
	'JS.Observable',
	'Prismatic',
	'Drawable',
	'Layer',
	'Rectangle', function() {
	
	prismatic.configure({
		canvasId: 'myCanvas',
		width: 640,
		height: 480,
		backgroundColor: 'white',
		frameRate: 24,
	});

	var baseLayer = new Layer();

	// var rect = new Rectangle({
	// 	x: 100,
	// 	y: 100,
	// 	height: 100,
	// 	width: 100,
	// 	fillColor: 'red',
	// 	strokeColor: 'blue',
	// 	strokeWidth: 2
	// });
	// rect.setProperty({
	// 	x: 200,
	// 	y: 200,
	// 	position: 'absolute'
	// });
	// console.log(JSON.stringify(rect, null, 2));
	// baseLayer.add(rect);

	prismatic.addLayer(baseLayer);

	console.log('TAKING PRISMATIC CORE OFFLINE!!');
});
