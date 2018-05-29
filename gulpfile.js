'use strict';

// GENERAL
const gulp = require('gulp');
const pump = require('pump');
const concat = require('gulp-concat');
const Stream = require('readable-stream');
const cleaner = require('clean-html');

// CSS
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const mqpacker = require('css-mqpacker');
const cssnano = require('cssnano');
const perfectionist = require('perfectionist');

// HTML
const nunjucks = require('gulp-nunjucks-render');

function cleanHTML(){
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

		cleaner.clean(file.contents.toString(), {
			'add-break-around-tags': [
				'svg', 'text', 'mask', 'li', 'span', 'a', 'line', 'img', 'circle', 'path'
			],
			'remove-attributes': [],
			'wrap': false
		}, function(html) {
			file.contents = new Buffer(html);
			cb(null, file);
		});
	};

	return stream;
}


gulp.task('html', function(done){
	pump([
		gulp.src('src/html/*.njk'),
		nunjucks({
			path: [
				'src/html/partials'
			]
		}),
		cleanHTML(),
		gulp.dest('./public')
	], done);
});

gulp.task('sass', done => {
	pump([
		gulp.src([
			'src/scss/1-settings/*.scss',
			'src/scss/2-tools/*.scss',
			'src/scss/3-generic/*.scss',
			'src/scss/4-elements/*.scss',
			'src/scss/5-objects/*.scss',
			'src/scss/6-components/*.scss',
			'src/scss/7-utilities/*.scss'
		]),
		concat('style.css'),
		sass({
			includePaths: [
				'./node_modules'
			],
			outputStyle: 'compressed'
		}),
		postcss([
            mqpacker({
                sort: true
			}),
			perfectionist({
				colorCase: 'upper',
				colorShorthand: false,
				trimLeadingZero: false,
				zeroLengthNoUnit: true
			})
        ]),
		gulp.dest('public/assets/css')
	], done);
});

gulp.task('build', ['sass', 'html']);

gulp.task('watch', () => {
	gulp.watch(['src/scss/**'], {cwd: __dirname}, ['sass']);
	gulp.watch(['src/html/**'], {cwd: __dirname}, ['html']);
});