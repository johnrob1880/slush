var gulp = require('gulp'),
    install = require('gulp-install'),
    conflict = require('gulp-conflict'),
    template = require('gulp-template'),
    inquirer = require('inquirer');

gulp.task('default', function (done) {
    inquirer.prompt([
            {type: 'input', name: 'name', message: 'Name for your app?'}
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