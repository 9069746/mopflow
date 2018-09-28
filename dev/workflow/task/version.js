module.exports = function (gulp, common) {
    gulp.task('version', '显示版本信息', function () {
        common.log('版本号: ' + common.plugins.util.colors.green(common.packageInfo.version));
    });
};