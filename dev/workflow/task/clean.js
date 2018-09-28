var del = require('del');
module.exports = function(gulp, common) {
	gulp.task('clean', '清理多余文件', function() {
		del(common.config.cleanFileType, {
			force: true
		});
		common.log('Clean', '清理所有的 ' + common.config.cleanFileType + ' 文件');
	});
};