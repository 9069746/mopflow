var gulp = require('gulp-help')(require('gulp'), {
        description: '展示这个帮助菜单',
        hideDepsMessage: true
    }),
    fs = require('fs'),
    common = require('./workflow/common.js');
var taskPath = 'workflow/task';
fs.readdirSync(taskPath).filter(function (_file) {
    return _file.match(/js$/);
}).forEach(function (_file) {
    require('./' + taskPath + '/' + _file)(gulp, common);
});