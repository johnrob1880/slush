
module.exports = function(gulp, install, conflict, template, rename, _, git, inquirer, defaults, Spinner, mkdirp, del){

    gulp.task('theme', function (done) {
        var prompts = [{
            name: 'themeName',
            message: 'What is the name of your theme?',
            default: defaults.appName
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
                answers.appThemeSlug = _.slugify(answers.themeName);
                var themePath = './WordPress/wp-content/themes/' + answers.appThemeSlug;

                var spinner = new Spinner('Cloning roots sage theme repo into ' + themePath + ' %s');

                spinner.setSpinnerString('|/-\\');
                spinner.start();

                mkdirp(themePath, function (err) {

                    if (err) {
                        console.error('Unable to create theme directory. Please try manually creating the folder: ' + themePath);
                        return done();
                    }

                    git.clone('https://github.com/roots/sage.git', {
                        args: themePath
                    }, function (err) {

                        spinner.stop(false);

                        if (err) {
                            console.error('Unable to clone roots sage repository!');
                        }

                        gulp.src(__dirname + '/../templates/**')
                           .pipe(template(answers))
                           .pipe(rename(function (file) {
                               if (file.basename[0] === '_') {
                                   file.basename = '.' + file.basename.slice(1);
                               }
                           }))
                           .pipe(conflict('./'))
                           .pipe(gulp.dest('./'))
                           .pipe(install())
                           .on('end', function () {
                               done();
                           });
                    });
                });


            });
    });

    return gulp;
};
