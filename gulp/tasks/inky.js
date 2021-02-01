const $ = require("../global.js");
module.exports = function () {
	$.gulp.task("inky", function () {
		return $.gulp
			.src($.config.inky.src)
			.pipe($.gulpInlineSource())
			.pipe($.inky())
			.pipe(
				$.gulpInlineCSS({
					preserveMediaQueries: true,
					removeHtmlSelectors: true,
					removeLinkTags: false,
					removeStyleTags: false,
				})
			)
			.pipe($.gulp.dest($.config.inky.dest));
	});
};
