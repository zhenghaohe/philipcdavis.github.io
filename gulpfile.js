const gulp = require('gulp');
const pngmin = require('gulp-pngmin');

gulp.task('default', ['work', 'posts']);

gulp.task('work', () =>
	gulp.src('assets/img/work/*')
		.pipe(pngmin())
		.pipe(gulp.dest('assets/dist/work'))
);

gulp.task('posts', () =>
	gulp.src('assets/img/posts/*')
		.pipe(pngmin())
		.pipe(gulp.dest('assets/dist/posts'))
);
