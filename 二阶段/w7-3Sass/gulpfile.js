const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat')
const cleanCSS = require('gulp-clean-css')
const rename = require("gulp-rename");
const htmlmin = require('gulp-htmlmin')
const imagemin = require('gulp-imagemin')
const browserSync = require('browser-sync')

gulp.task('buildSass',(done)=>{
    //匹配文件
    gulp.src('./src/sass/*.scss')
    // outputStyle参数：nested(默认），expanded：展开，compact：单行，compressed：压缩
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))

    // 合并文件
    .pipe(concat('style.css'))

    // 输出文件
    .pipe(gulp.dest('./dist/css'))

    // 压缩css
    .pipe(cleanCSS())

    // 改名
    .pipe(rename({
        // dirname: "main/text/ciao",
        // basename: "aloha",
        // prefix: "bonjour-",
        suffix: ".min",
        // extname: ".md"
      }))

    // 输出文件
    .pipe(gulp.dest('./dist/css'))

    // 表示任务处理完成
    done();
})

gulp.task('buildHtml',(done)=>{
    gulp.src('./src/index.html')

    // 压缩html
    .pipe(htmlmin({
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input checked />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    }))
    
    .pipe(gulp.dest('./dist'))

    done()
})

// 图片优化
gulp.task('imageyh',(done)=>{
    gulp.src('./src/img/*')

    .pipe(imagemin([
        imagemin.gifsicle({interlaced: true}),
        imagemin.mozjpeg({quality: 50, progressive: true}),
        imagemin.optipng({optimizationLevel: 5}),
    ]))

    .pipe(gulp.dest('./dist/img'))
    done();
})

gulp.task('default',()=>{
    // 启动服务器
    browserSync({
        // 设置服务器根目录
        server:'./dist',

        // 代理其他服务器(既能实现自动刷新，也能保持其他服务器的特性)
        // proxy:'http://localhost:3000',

        port:2101,

        // 监听文件修改，当监听的文件有修改时，自动刷新页面
        files:['./dist/**/*.html','./dist/css/*.css']
    },()=>{
        console.log('服务器启动成功')
    });
    // gulp.series('task1','task2','task3')     串联
    // gulp.parallel('task1','task2','task3')   并联
    gulp.watch('./src/sass/*.scss',gulp.series('buildSass'))
    gulp.watch('./src/index.html',gulp.series('buildHtml'))
    gulp.watch('./src/img/*',gulp.series('imageyh'))
})