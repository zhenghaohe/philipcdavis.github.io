var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var pngcrush = require('imagemin-pngcrush');
var minifyCSS = require('gulp-minify-css');
var rename = require("gulp-rename");

//Shrink image size down
gulp.task('compress', function () {
    return gulp.src('assets/img/**')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngcrush()]
        }))
        .pipe(gulp.dest('assets/dist/'));
});


//Minified css goes into my assets folder
gulp.task('minify-css', function() {
  gulp.src('css/*.css')
    .pipe(minifyCSS({keepBreaks:true}))
    .pipe(gulp.dest('css/'))
    
});

// My default task
gulp.task('default', ['compress', 'minify-css']);
