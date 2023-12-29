const gulp = require('gulp')
const babel = require('gulp-babel')
const ts = require('gulp-typescript')
const del = require("del")
//step1  删除上次构建的产物 umd cjs esm
gulp.task('clean', async ()=>{
  await del("dis/**")
  await del('cjs/**')
  // await del('lib/**')
  await del('es/**')
})

//step2 针对不同类型的产物进行构建


//cjs产物 commojs
gulp.task('cjs',()=>{
 return gulp
  .src(['./es/**/*.js']) //输入文件
  .pipe(
    babel({  //babel根据.babelrc文件进行转换
      configFile:'../../.babelrc'
    })
  )
  .pipe(gulp.dest('cjs/')) //输出到lib文件中
})


//esm产物 esmodule
gulp.task('es',()=>{
  //基于ts生产-配置构建
  const tsProject = ts.createProject('tsconfig.pro.json',{
    module:"ESNext"
  })
  //输出到指定目录
  return tsProject.src().pipe(tsProject()).pipe(babel()).pipe(gulp.dest('es/'))
})

//输出声明文件
gulp.task('declaration',  () =>{
  const tsProject = ts.createProject('tsconfig.pro.json', {
    declaration: true,
    emitDeclarationOnly: true,
  });
  return tsProject.src().pipe(tsProject()).pipe(gulp.dest('es/')).pipe(gulp.dest('cjs/'));
});

//赋值readme文件
gulp.task('copyReadme', async () =>{
  await gulp.src('../../README.md').pipe(gulp.dest('../../packages/hooks'));
});

//创建任务之后,执行输出产物
exports.default = gulp.series('clean','es','cjs','declaration', 'copyReadme')
