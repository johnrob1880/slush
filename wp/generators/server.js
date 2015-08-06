
module.exports = function(gulp, install, conflict, template, rename, _, git, inquirer, defaults, Spinner, mkdirp, del){

    gulp.task('server', function (done) {
        var prompts = [{
            name: 'port',
            message: 'What port should the server use?',
            default: 8000
        }, {
            type: 'confirm',
            name: 'moveon',
            message: 'Continue?'
        }];
        //Ask
        inquirer.prompt(prompts,
            function (answers) {
                if (!answers.moveon) {
                    return done();
                }

                gulp.src(__dirname + '/../templates/**')
                   .pipe(template(answers))
                   .pipe(rename(function (file) {
                       // replace the 'server-'
                       file.basename = file.basename.slice(7);

                   }))
                   .pipe(conflict('./'))
                   .pipe(gulp.dest('./'))
                   .pipe(install())
                   .on('end', function () {
                       done();
                   });


            });
    });

    return gulp;
};
