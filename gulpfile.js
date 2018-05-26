'use strict';

// GENERAL
const gulp = require('gulp');
const pump = require('pump');
const concat = require('gulp-concat');

// CSS
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const mqpacker = require('css-mqpacker');
const cssnano = require('cssnano');

// HTML
const nunjucks = require('gulp-nunjucks-render');
const htmlPrettify = require('gulp-html-prettify');


gulp.task('html', function(done){
	pump([
		gulp.src('src/html/*.njk'),
		nunjucks({
			path: [
				'src/html/partials'
			]
		}),
		htmlPrettify({
			indent_char: ' ',
			indent_size: 4
		}),
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
			]
		}),
		postcss([
            mqpacker({
                sort: true
			}),
			cssnano({
				discardComments: {
					removeAll: true
				}
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