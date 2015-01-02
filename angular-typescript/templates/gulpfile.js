var gulp = require("gulp"),
    concat = require("gulp-concat"),
    sass = require("gulp-sass"),
    uglify = require("gulp-uglify"),
    connect = require("gulp-connect"),
    typescript = require("gulp-tsc"),
    karma = require("karma").server,
    open = require("open"),
    port = 5000,
    testServerPort = 8081;

gulp.task("compile", compile);

function compile () {
    gulp.src([
        "./app/blocks/**/*.ts",
        "./app/foobars/**/*.ts",
        "./app/services/**/*.ts",
        "./app/widgets/**.*.ts",
        "./app/core.module.ts",
        "./app.module.ts",
        "./app.config.ts",
        "./app.run.ts",
        "./app.values.ts"
    ])
        .pipe(typescript({out: 'build.js', outDir: "dist/scripts"}))
        .pipe(gulp.dest("dist/scripts"))
        .pipe(connect.reload());
}

gulp.task("views", function () {
    gulp.src([
        "./app/index.html"
    ])
        .pipe(gulp.dest("./dist"));

    gulp.src("./app/**/*.html")
        .pipe(gulp.dest("./dist/views"))
        .pipe(connect.reload());

});
gulp.task("sass", function () {
    gulp.src("./app/content/sass/**/**.scss")
        .pipe(sass())
        .pipe(gulp.dest("./dist/content/css"))
        .pipe(connect.reload());
});
gulp.task("vendor", function () {
    gulp.src([
        "./bower_components/angular/angular.min.js",
        "./bower_components/angular-mocks/angular-mocks.js",
        "./bower_components/angular-route/angular-route.min.js",
        "./bower_components/angular-sanitize/angular-sanitize.min.js",
        "./bower_components/angular-cookies/angular-cookies.min.js",
        "./bower_components/bootstrap/dist/js/bootstrap.min.js",
        "./bower_components/jquery/dist/jquery.min.js",
        "./bower_components/modernizr/modernizr.js"
    ])
        .pipe(gulp.dest("./dist/scripts/vendor"));

    gulp.src([
        "./bower_components/bootstrap/dist/css/bootstrap.min.css"
    ])
        .pipe(gulp.dest("./dist/content/css"));

});

gulp.task("connect", function () {
    connect.server({
        root: "./dist",
        port: port,
        livereload: true
    });
});

gulp.task("compileTests", compileTests());

function compileTests() {
    gulp.src([
        "./test/**/*.ts"
    ])
        .pipe(typescript())
        .pipe(concat("build.spec.js"))
        .pipe(gulp.dest("./test"));
}

gulp.task("tests", function (done) {

    var testServer = connect.server({
        fallback: "SpecRunner.html",
        port: testServerPort,
        livereload: true
    });

    open("http://localhost:" + testServerPort);

    gulp.watch("./app/**/*.ts", ["compile", function() { testServer.reload(true); }]);
    gulp.watch("./test/**/*.ts", ["compileTests"]);

    setTimeout(function () {
        compile();
        compileTests();
    }, 300);

    karma.start({
        configFile: __dirname + '/karma.config.js',
        singleRun: false
    }, done);
});


gulp.task("watch", function () {
    gulp.watch("./app/index.html", ["views"]);
    gulp.watch("./app/views/**/*.html", ["views"]);
    gulp.watch("./app/**/*.ts", ["compile"]);
    gulp.watch("./app/content/sass/**/*.scss", ["sass"]);
});

gulp.task("launch", function () {
    open("http://localhost:" + port);
});

gulp.task("default", ["compile", "views", "sass", "vendor", "connect", "watch", "launch"]);