JS.Packages(function() { 
	with(this) {
	    file('Animal.js')
	        .provides('Animal');

	    file('Cat.js')
	        .provides('Cat')
	        .requires('Animal');

        file('prismatic.js/Prismatic.js')
        	.provides('Prismatic');

        file('prismatic.js/Drawable.js')
        	.provides('Drawable')
        	.requires('Prismatic');

        file('prismatic.js/Layer.js')
        	.provides('Layer')
        	.requires('Prismatic')
        	.requires('Drawable');

        file('prismatic.js/Rectangle.js')
        	.provides('Rectangle')
        	.requires('Prismatic')
        	.requires('Drawable');        
    }
});