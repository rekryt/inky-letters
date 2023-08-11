const $ = require('../global.js');
module.exports = function () {
    $.gulp.task('styles', function () {
        return $.gulp
            .src($.config.styles.src)
            .pipe($.gulpSASS().on('error', $.gulpSASS.logError))
            .pipe($.gulp.dest($.config.styles.dest))
            .pipe($.gulp.dest($.config.styles.dest2));
    });
};
