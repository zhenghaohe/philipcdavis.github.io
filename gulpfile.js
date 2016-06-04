const gulp = require('gulp');
const pngmin = require('gulp-pngmin');

gulp.task('default', () =>
	gulp.src('assets/img/work/*')
		.pipe(pngmin())
		.pipe(gulp.dest('assets/dist/'))
);
