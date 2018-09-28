// Gulp 服务入口
var argv = require('yargs').argv,
    spawn = require('child_process').spawn,
    os = require('os');
module.exports = function (gulp, common) {
    if (os.platform() === 'linux' || os.platform() === 'darwin') {
        gulp.task('start', false, function () {
            if (argv.debug) {
                common.log('Debug: ', '进入 Debug 模式');
            }
            var _mainTaskProcess; // 记录当前 gulp 运行时的进程
            function restart() {
                if (_mainTaskProcess) {
                    _mainTaskProcess.kill();
                }
                _mainTaskProcess = spawn('gulp', ['main'], {
                    stdio: 'inherit'
                });
            }
            // 获取第一次进入时 gulp 的进程
            if (argv.debug) {
                _mainTaskProcess = spawn('gulp', ['main', '--debug'], {
                    stdio: 'inherit'
                });
            } else {
                _mainTaskProcess = spawn('gulp', ['main'], {
                    stdio: 'inherit'
                });
            }
        });
        // 默认任务
        gulp.task('default', '默认任务，自动执行一次 include 和 sass 任务，并调用 watch 任务', ['start'], function () {}, {
            options: {
                'debug': 'debug 模式下 gulpfile.js 有变动时会自动重启 default 任务'
            }
        });
    } else {
        gulp.task('default', '默认任务，自动执行一次 include 和 sass 任务，并调用 watch 任务', ['main']);
    }
    if (common.config.browserSyncMod === 'server' || common.config.browserSyncMod === 'proxy') {
        gulp.task('main', false, common.plugins.sequence('include', 'sass', 'watch', common.config.browserSyncMod));
    } else if (common.config.browserSyncMod === 'close') {
        gulp.task('main', false, common.plugins.sequence('include', 'sass', 'watch'));
    } else {
        gulp.task('main', false, function () {
            common.error('Config', 'Config 中的 browserSyncMod 仅支持 ', common.plugins.util.colors.yellow('server'), ', ', common.plugins.util.colors.yellow('proxy'), ', ', common.plugins.util.colors.yellow('close'), ' 三个值');
        });
    }
};