global.GLOBAL.$ = {
	/* config */
	config: require('./gulp/config.js')(),

	/* gulp modules */
	gulp: require('gulp'),
	gulpInlineCSS: require('gulp-inline-css'),
	gulpInlineSource: require('gulp-inline-source'),
	gulpSASS: require('gulp-sass'),

	/* inky */
	inky: require('inky'),

	/* browser-sync */
	browserSync: require('browser-sync')
};

$.gulpSASS.compiler = require('node-sass');

[
	'./gulp/tasks/styles.js',
	'./gulp/tasks/inky.js',
	'./gulp/tasks/browserSync.js',
	'./gulp/tasks/watch.js',
	'./gulp/tasks/default.js'
].forEach(function (taskPath) {
	require(taskPath)();
});