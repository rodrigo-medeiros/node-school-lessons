var sprintf = require('sprintf'),
		fs      = require('fs');

var text = fs.readFileSync('/home/rodrigomedeiros/local/lib/node_modules/browserify-adventure/problems/using_transforms/wake.txt', 'utf8');
console.log(sprintf(text, "%3d %s"));