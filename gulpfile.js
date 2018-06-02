
var gulp = require("gulp");
var ts = require("gulp-typescript");
var sass = require("gulp-sass");
var sourcemaps = require("gulp-sourcemaps");
var tslint = require("gulp-tslint");
var exec = require('child_process').exec;
var del = require("del");
var path = require("path");

var paths = {
    ts: {
        src: "./_ts/**/*.ts",
        config: "./tsconfig.json"
    },
    sass: {
        src: "./_sass/**/*.scss",
        main: "./_sass/main.scss"
    },
    assets: {
        js: "./assets/js",
        css: "./assets/css",
        img: "./assets/img"
    },
    site: {
        dir: "./_site"
    }
  };

gulp.task("ts:build", () => {
    const tsProject = ts.createProject(paths.ts.config);
    return tsProject.src()
        .pipe(sourcemaps.init())
        .pipe(tsProject())
        .pipe(sourcemaps.write(".", {
            mapSources: (sourcePath, file) => {
                // Correct source map path.
                const relativeSourcePath = path.relative(path.dirname(file.path), path.join(file.base, sourcePath));
                return relativeSourcePath;
            }
        }))
        .pipe(gulp.dest(paths.assets.js));
});

gulp.task("ts:watch", () => {
    gulp.watch(paths.ts.src, gulp.series("ts:build"));
});

gulp.task("sass:build", () => {
    return gulp.src(paths.sass.main)
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on("error", sass.logError))
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest(paths.assets.css));
});
   
gulp.task("sass:watch", () => {
    gulp.watch(paths.sass.src, gulp.series("sass:build"));
});

gulp.task("jekyll:build", (done) => {
    exec("bundle exec jekyll build", (err, stdout, stderr) => {
        console.log(stdout);
        console.log(stderr);
        done(err);
    });
});

gulp.task("jekyll:serve", (done) => {
    exec("bundle exec jekyll serve", (err, stdout, stderr) => {
        console.log(stdout);
        console.log(stderr);
        done(err);
    })
});

gulp.task("jekyll:serve:dev", (done) => {
    exec("bundle exec jekyll serve --drafts", (err, stdout, stderr) => {
        console.log(stdout);
        console.log(stderr);
        done(err);
    })
});

gulp.task("clean", (done) => {
    return del([paths.assets.js, paths.assets.css, paths.site.dir], done);
});

gulp.task("watch", gulp.parallel("sass:watch", "ts:watch"));

gulp.task("lint", () => {
    return gulp.src(paths.ts.src)
        .pipe(tslint())
        .pipe(tslint.report());
});

gulp.task("build", gulp.series("clean", "ts:build", "sass:build", "jekyll:build"));

gulp.task("start", gulp.series("build", "jekyll:serve"));

gulp.task("start:dev", gulp.series("build", gulp.parallel("jekyll:serve:dev", "watch")));
