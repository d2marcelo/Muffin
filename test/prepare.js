var current = __dirname;
var muffin  = require('../lib/muffin')({
	called : process.cwd(),
	lib    : current + '/../lib',
	markx  : current + '/../node_modules/markx/bin/markx'
});
var path    = require('path');

describe('muffin.prepare()', function() {
	it('should be able to setup directories and files needed for bake', function() {

		muffin.prepare({
			path: muffin.path.called + '/testfiles'
		});
	});
});