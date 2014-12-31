var gulp = require('gulp'),
    install = require('gulp-install'),
    conflict = require('gulp-conflict'),
    concat = require('gulp-concat'),
    template = require('gulp-template'),
    inquirer = require('inquirer'),
    _ = require('underscore.string');

gulp.task('default', function (done) {
    inquirer.prompt([
            {type: 'input', name: 'appName', message: 'Name for your app?'},
            {type: 'input', name: 'appVersion', message: 'Version for your app?'},
        ],
        function (answers) {
            gulp.src(__dirname + '/app/templates/**')
                .pipe(template(answers))
                .pipe(conflict('./'))
                .pipe(gulp.dest('./'))
                .pipe(install())
                .on('finish', function () {
                    done();
                });
        });
});

gulp.task('controller', function (done) {
    inquirer.prompt([
            {type: 'input', name: 'appName', message: 'Name for your app?'},
            {type: 'input', name: 'name', message: 'Name for your controller?'},
        ],
        function (answers) {
            answers.name = _.capitalize(_.slugify(answers.name));
            gulp.src(__dirname + '/tasks/controller/**')
                .pipe(template(answers))
                .pipe(conflict('./'))
                .pipe(concat(answers.name + 'Ctrl.ts'))
                .pipe(gulp.dest('./app/scripts/controllers'))
                .pipe(install())
                .on('finish', function () {
                    done();
                });
        });
});