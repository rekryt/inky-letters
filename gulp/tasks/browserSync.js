module.exports = function () {
	$.gulp.task('browserSync', function () {
		return $.browserSync.init($.config.browserSync);
	});
	$.gulp.task('browserSyncReload', function (done) {
		$.browserSync.reload();
		done();
	});
};