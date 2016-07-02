const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('default', ['work', 'posts']);

gulp.task('work', () =>
	gulp.src('assets/img/work/*')
		.pipe(imagemin())
		.pipe(gulp.dest('assets/dist/work'))
);

gulp.task('posts', () =>
	gulp.src('assets/img/posts/*')
		.pipe(imagemin())
		.pipe(gulp.dest('assets/dist/posts'))
);
