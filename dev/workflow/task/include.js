var path = require('path'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload;
module.exports = function (gulp, common) {
    gulp.task('include', '执行模板 include 编译', function () {
        var _condition = function (_file) {
            var _fileName = path.basename(_file.path);
            if (_fileName.match(/^_/)) {
                return false;
            }
            return true;
        }
        gulp.src(common.config.iconSourcePath).pipe(gulp.dest(common.config.iconResultPath));
        gulp.src(common.config.jsSourcePath).pipe(gulp.dest(common.config.jsResultPath));
        gulp.src(common.config.cssSourcePath).pipe(gulp.dest(common.config.cssResultPath));
        gulp.src(common.config.imagesSourcePath).pipe(gulp.dest(common.config.imagesResultPath));
        gulp.src(common.config.htmlSourcePath).pipe(common.plugins.plumber({
            errorHandler: function (_error) {
                common.error('Include', _error);
                common.plugins.util.beep();
            }
        })).pipe(common.plugins.include({
            prefix: common.config.includePrefix
        })).pipe(common.plugins.if(_condition, gulp.dest(common.config.htmlResultPath)));
        common.log('Include', '根据 include 标签合并后输出新文件到 ' + common.config.htmlResultPath);
    });
};