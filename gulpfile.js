[
	"./gulp/tasks/styles.js",
	"./gulp/tasks/inky.js",
	"./gulp/tasks/browserSync.js",
	"./gulp/tasks/watch.js",
	"./gulp/tasks/default.js",
].forEach(function (taskPath) {
	require(taskPath)();
});
