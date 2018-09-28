// 进行 Sass 编译
module.exports = function (gulp, common) {
    gulp.task('sass', '进行 Sass 编译', function () {
        var _isOpeningBrowserSyncMod = common.config.browserSyncMod !== 'close';
        return gulp.src(common.config.styleSourcePath + '*.scss').pipe(common.plugins.if(global.isWatching && global.isHandleStyle, common.plugins.cached('sass'))).pipe(common.plugins.sassInheritance({
            base: common.config.styleSourcePath
        })).pipe(common.plugins.sass({
            outputStyle: 'compressed'
        })).pipe(common.plugins.if(common.config.needsSourceMaps, common.plugins.sourcemaps.write('./maps'))).pipe(gulp.dest(common.config.styleResultPath)).pipe(common.plugins.if(_isOpeningBrowserSyncMod, common.reload({
            stream: true
        })));
    });
};