/*
 * slush-wp
 * https://github.com/johnro/slush-wp
 *
 * Copyright (c) 2015, john
 * Licensed under the MIT license.
 */

'use strict';

var gulp = require('gulp'),
    install = require('gulp-install'),
    conflict = require('gulp-conflict'),
    template = require('gulp-template'),
    rename = require('gulp-rename'),
    git = require('gulp-git'),
    _ = require('underscore.string'),
    inquirer = require('inquirer'),
    path = require('path'),
    Spinner = require('cli-spinner').Spinner,
    mkdirp = require('mkdirp'),
    del = require('del'),
    defaults = require('./defaults.js');

// load generators
gulp = require('./generators/wp')(gulp, install, conflict, template, rename, _, git, inquirer, defaults, Spinner, mkdirp, del);
gulp = require('./generators/theme')(gulp, install, conflict, template, rename, _, git, inquirer, defaults, Spinner, mkdirp, del);
