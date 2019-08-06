module.exports = function () {
	$.gulp.task('watch', function () {
		$.gulp.watch($.config.styles.src, $.gulp.series('styles', 'inky', 'browserSyncReload'));
		$.gulp.watch($.config.inky.src, $.gulp.series('inky', 'browserSyncReload'));
	});
};