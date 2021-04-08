const gulp = require('gulp');
const sass = require('gulp-sass');


gulp.task('buildSass',(done)=>{
    //匹配文件
    gulp.src('./src/sass/*.scss')
    // outputStyle参数：nested(默认），expanded：展开，compact：单行，compressed：压缩
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest('./src/css'))

    // 表示任务处理完成
    done();
})

gulp.task('default',()=>{
    // gulp.series('task1','task2','task3')     串联
    // gulp.parallel('task1','task2','task3')   并联
    gulp.watch('./src/sass/*.scss',gulp.series('buildSass'))
})