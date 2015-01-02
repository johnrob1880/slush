var gulp = require('gulp'),
    install = require('gulp-install'),
    conflict = require('gulp-conflict'),
    template = require('gulp-template'),
    inquirer = require('inquirer');

gulp.task('default', function (done) {
    inquirer.prompt([
            {type: 'input', name: 'appName', message: 'Name for your app?'},
            {type: 'input', name: 'appVersion', message: 'Version for your app?'},


        ],
        function (answers) {
            gulp.src(__dirname + '/templates/**')
                .pipe(template(answers))
                .pipe(conflict('./'))
                .pipe(gulp.dest('./'))
                .pipe(install())
                .on('finish', function () {
                    done();
                });
        });
});