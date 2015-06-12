var gulp = require('gulp'),
    install = require('gulp-install'),
    conflict = require('gulp-conflict'),
    concat = require('gulp-concat'),
    template = require('gulp-template'),
    inquirer = require('inquirer');

gulp.task('default', function (done) {
    inquirer.prompt([
            {type: 'input', name: 'appName', message: 'Name?'},
            {type: 'input', name: 'appVersion', message: 'Version?'},
        ],
        function (answers) {
            gulp.src(__dirname + "/src/templates/**/*")
                .pipe(template(answers))
                .pipe(conflict('./'))
                .pipe(gulp.dest('./'))
                .pipe(install())
                .on('finish', function () {
                    done();
                });
        });
});