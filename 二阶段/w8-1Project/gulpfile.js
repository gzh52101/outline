const gulp = require('gulp')

const config = {
    phpDir:'./src/api/**/*.php',
    assetsDir:'./src/assets/**/*',
    outputDir:'./dist'
}

function copy(){
    // copy php
    gulp.src(config.phpDir)
    .pipe(gulp.dest(config.outputDir + '/api'))

    // copy image
    gulp.src(config.assetsDir)
    .pipe(gulp.dest(config.outputDir + '/assetss'))

    console.log('copy')

}
function buildSass(){
    console.log('buildSass')
}

function buildJS(done){
    console.log('buildJS')

}

// 构建操作（上线前把代码进行编译，合并，压缩....）
// gulp.task('build',(done)=>{
//     copy();
//     buildSass();
//     buildJS();
//     done();
// })
// exports.buildSass = buildJS;
exports.build = (done)=>{
    copy();
    buildSass();
    buildJS();
    done();
}
