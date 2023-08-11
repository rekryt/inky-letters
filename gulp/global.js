const $ = {
    /* config */
    config: require('./config.js')(),

    /* gulp modules */
    gulp: require('gulp'),
    gulpInlineCSS: require('gulp-inline-css'),
    gulpInlineSource: require('gulp-inline-source'),
    gulpSASS: require('gulp-sass')(require('sass')),

    /* inky */
    inky: require('inky'),

    /* browser-sync */
    browserSync: require('browser-sync'),
};

module.exports = $;
