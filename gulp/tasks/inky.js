module.exports = function () {
	$.gulp.task('inky', function () {
		return $.gulp.src($.config.inky.src)
			.pipe($.gulpInlineSource())
			.pipe($.inky())
			.pipe($.gulpInlineCSS({
				preserveMediaQueries: true,
				removeLinkTags: false
			}))
			.pipe($.gulp.dest($.config.inky.dest));
	});
};