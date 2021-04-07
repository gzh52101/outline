// nodejs
// 引入gulp模块
const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');

// console.log('gulp',gulp);

// 创建任务
// gulp.task('hello',function(){
//     console.log('hello gulp')
// })

// 创建一个任务，用户编译ES6->ES5
gulp.task('build',()=>{
    // 匹配文件：返回文件流
    return gulp.src('./src/**/*.js')

    // ES6->ES5
    .pipe(babel({
        presets: ["@babel/preset-env"], // 插件集合
    }))

    // 合并
    .pipe(concat('all.js'))

    .pipe(gulp.dest('./dist'))
});