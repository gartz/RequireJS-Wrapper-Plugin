require({
paths: {
	'wrap':       '../wrap',
	'underscore': 'underscorejs/underscore'
},
wrapper: {
	globals: {
	    'underscore': '_'
	}
    }
}, ['wrap!underscore'], function(_) {
	console.debug(_);
});
