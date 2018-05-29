const Stream = require('readable-stream');
const cleaner = require('clean-html');

module.exports = function(options){
	var stream = new Stream.Transform({
		objectMode: true
	});

	stream._transform = function(file, unused, cb){
	    if( file.isNull() ){
	        return cb(null, file);
	    }
	    // if( file.isStream()) {
		// 	file.contents = file.contents.pipe(new Stream.Transform());
		// 	file.contents._transform = function(chunk, encoding, cb) {
		// 		//console.log(chunk.toString());
		// 		cb(null, new Buffer(fn(chunk.toString(), file)))
		// 	};
		// 	return cb(null, file);
	    // }

		cleaner.clean(file.contents.toString(), options, function(html) {
			file.contents = new Buffer(html);
			cb(null, file);
		});
	};

	return stream;
}