
var gulp = require('gulp');
var sass = require('gulp-sass');
var ts = require('gulp-typescript');

gulp.task('css', function(){
    return gulp.src('./_sass/main.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./assets/css'));
});

gulp.task('css:watch', function() {
    gulp.watch('./_sass/**/*.scss', ['css']);
});

var tsProject = ts.createProject('tsconfig.json');
  
gulp.task('js', function(){
    return tsProject.src()
        .pipe(tsProject())
        .pipe(gulp.dest('./assets/js'))
});

gulp.task('js:watch', function() {
    gulp.watch('_typescript/**/*.ts', ['js']);
});

gulp.task('start', function() {
    
});
  
gulp.task('default', ['css', 'js']);