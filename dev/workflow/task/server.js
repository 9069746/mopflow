module.exports = function (gulp, common) {
    gulp.task('server', function () {
        var _showLog = function () {
            if (common.config.browserSyncShowLog) {
                return 'info';
            }
            return 'silent';
        }
        common.browserSync.init({
            server: {
                baseDir: common.config.htmlResultPath,
                routes: common.config.browserSyncServerRoute
            },
            logLevel: _showLog(),
            logPrefix: common.plugins.util.colors.gray(common.lib.getCurrentTime()),
            startPath: common.config.browserSyncStartPath,
            port: common.config.browserSyncPort
        });
        gulp.watch(common.config.browserSyncWatchPath).on('change', common.reload);
    });
};