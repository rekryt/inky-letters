module.exports = function () {
	return {
		browserSync: {
			server: {
				baseDir: "./dist/"
			}
		},
		styles: {
			src: './scss/*.scss',
			dest: './templates'
		},
		inky: {
			src: './templates/*.html',
			dest: './dist'
		}
	}
};