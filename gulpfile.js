
var gulp = require("gulp");
var ts = require("gulp-typescript");
var sass = require("gulp-sass");
var uglify = require('gulp-uglify');
var pump = require('pump');
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

gulp.task("ts:build", (done) => {
    const tsProject = ts.createProject(paths.ts.config);
    pump([
        tsProject.src(),
        sourcemaps.init(),
        tsProject(),
        sourcemaps.write(".", {
            mapSources: (sourcePath, file) => {
                // Correct source map path.
                const relativeSourcePath = path.relative(path.dirname(file.path), path.join(file.base, sourcePath));
                return relativeSourcePath;
            }
        }),
        gulp.dest(paths.assets.js)
    ], done);
});

gulp.task("ts:build:prod", (done) => {
    const tsProject = ts.createProject(paths.ts.config);
    pump([
        tsProject.src(),
        tsProject(),
        gulp.dest(paths.assets.js)
    ], done);
});

gulp.task("ts:watch", () => {
    gulp.watch(paths.ts.src, gulp.series("ts:build"));
});

gulp.task("sass:build", (done) => {
    pump([
        gulp.src(paths.sass.main),
        sourcemaps.init(),
        sass({outputStyle: 'compressed'}).on("error", sass.logError),
        sourcemaps.write("./"),
        gulp.dest(paths.assets.css)
    ], done); 
});

gulp.task("sass:build:prod", (done) => {
    pump([
        gulp.src(paths.sass.main),
        sass({outputStyle: 'compressed'}).on("error", sass.logError),
        gulp.dest(paths.assets.css)
    ], done);
});
   
gulp.task("sass:watch", () => {
    gulp.watch(paths.sass.src, gulp.series("sass:build"));
});

gulp.task("jekyll:build", (done) => {
    exec("bundle exec jekyll build --drafts", (err, stdout, stderr) => {
        console.log(stdout);
        console.log(stderr);
        done(err);
    });
});

gulp.task("jekyll:build:prod", (done) => {
    exec("bundle exec jekyll build", (err, stdout, stderr) => {
        console.log(stdout);
        console.log(stderr);
        done(err);
    });
});

gulp.task("jekyll:serve", (done) => {
    exec("bundle exec jekyll serve --drafts", (err, stdout, stderr) => {
        console.log(stdout);
        console.log(stderr);
        done(err);
    })
});

gulp.task("optimize:prod", (done) => {
    pump([
        gulp.src("./assets/js/*.js"),
        uglify(),
        gulp.dest(paths.assets.js)
    ], done);
});

gulp.task("clean", (done) => {
    return del([paths.assets.js, paths.assets.css, paths.site.dir], done);
});

gulp.task("lint", (done) => {
    pump([
        gulp.src(paths.ts.src),
        tslint(),
        tslint.report()
    ], done);
});

gulp.task("watch", gulp.parallel("sass:watch", "ts:watch"));

gulp.task("build", gulp.series("clean", "ts:build", "sass:build", "jekyll:build"));

gulp.task("build:prod", gulp.series("clean", "ts:build:prod", "sass:build:prod", "optimize:prod", "jekyll:build:prod",));

//gulp.task("test", () => {});

gulp.task("serve", gulp.series("build", gulp.parallel("jekyll:serve", "watch")));
