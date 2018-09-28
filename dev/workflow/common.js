var plugins = require('gulp-load-plugins')({
        rename: {
            'gulp-file-include': 'include',
            'gulp-better-sass-inheritance': 'sassInheritance'
        }
    }),
    packageInfo = require('../package.json'),
    lib = require('./lib.js'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload,
    _ = require('lodash'),
    configDefault = require('../config.js'),
    common = {
        plugins: plugins,
        config: configDefault,
        packageInfo: packageInfo,
        lib: lib,
        browserSync: browserSync,
        reload: reload,
        log: function (_tag, _content) {
            if (arguments.length > 1) {
                plugins.util.log(common.plugins.util.colors.green(_tag + ': ') + _content);
            } else {
                plugins.util.log(arguments[0]);
            }
        },
        warn: function (_tag, _content) {
            if (arguments.length > 1) {
                plugins.util.log(common.plugins.util.colors.yellow(_tag + ': ') + _content);
            } else {
                plugins.util.log(arguments[0]);
            }
        },
        error: function (_tag, _content) {
            if (arguments.length > 1) {
                plugins.util.log(common.plugins.util.colors.red(_tag + ': ') + _content);
            } else {
                plugins.util.log(arguments[0]);
            }
        }
    };
module.exports = common;