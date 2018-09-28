// 文件监控
var path = require('path');
// 逻辑变量
var watchTaskDesciption = '样式文件监控，';
module.exports = function (gulp, common) {
    gulp.task('watch', watchTaskDesciption, function () {
        global.isWatching = true;
        gulp.watch(common.config.styleSourcePath + '*.scss', ['sass']);
        if (common.config.openIncludeFunction) {
            var _includeWatcher = gulp.watch(common.config.htmlSourcePath, ['include']);
            _includeWatcher.on('change', function (event) {
                common.log('');
                common.log('Include', '模板 ' + event.path + ' was ' + event.type);
            });
        }
        gulp.watch(common.config.SourcePath + '**/*.*', ['include']);
    });
};