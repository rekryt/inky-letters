const $ = require("../global.js");
module.exports = function () {
	$.gulp.task(
		"default",
		$.gulp.series(
			$.gulp.series("styles", "inky"),
			$.gulp.parallel("browserSync", "watch")
		)
	);
};
