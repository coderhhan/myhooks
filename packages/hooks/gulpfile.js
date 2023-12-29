const gulp = require('gulp')
const common = require('../../gulpfile')
//创建任务之后,执行输出产物
exports.default = gulp.series(common.default)
