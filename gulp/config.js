module.exports = function () {
    return {
        browserSync: {
            server: {
                baseDir: './dist/',
            },
        },
        styles: {
            src: './scss/*.scss',
            dest: './templates',
            dest2: './dist',
        },
        inky: {
            src: './templates/*.html',
            dest: './dist',
        },
    };
};
