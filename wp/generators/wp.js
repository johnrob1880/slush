module.exports = function(gulp, install, conflict, template, rename, _, git, inquirer, defaults, Spinner, mkdirp, del){

    function format(string) {
        var username = string.toLowerCase();
        return username.replace(/\s/g, '');
    }

    gulp.task('default', function (done) {
        var prompts = [{
            name: 'appName',
            message: 'What is the name of your project?',
            default: defaults.appName
        }, {
            name: 'appDescription',
            message: 'What is the description?'
        }, {
            name: 'appVersion',
            message: 'What is the version of your project?',
            default: '0.1.0'
        }, {
            name: 'authorName',
            message: 'What is the author name?',
            default: defaults.authorName
        }, {
            name: 'authorEmail',
            message: 'What is the author email?',
            default: defaults.authorEmail
        }, {
            name: 'userName',
            message: 'What is the github username?',
            default: defaults.userName
        }, {
            type: 'confirm',
            name: 'github',
            message: 'Create a github repository?'
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
                answers.appNameSlug = _.slugify(answers.appName);

                defaults.appName = answers.appNameSlug;

                var spinner = new Spinner('Cloning wordpress repo.. %s');
                spinner.setSpinnerString('|/-\\');
                spinner.start();

                git.clone('https://github.com/WordPress/WordPress.git', function (err) {

                    spinner.stop(false);

                    if (err) {
                        console.error('Unable to clone wordpress repository!');
                    }

                    del([
                        'WordPress/wp-content/themes/twentyeleven',
                        'WordPress/wp-content/themes/twentytwelve',
                        'WordPress/wp-content/themes/twentythirteen',
                        'WordPress/wp-content/themes/twentyten',
                        'WordPress/wp-content/themes/twentyfourteen'
                      ], function (err) {
                        return done();
                    });

                    gulp.src(__dirname + '/../templates/**/*.*')
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

    return gulp;
};
