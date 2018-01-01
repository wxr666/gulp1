//下载并引入
const gulp = require('gulp');
const concat = require('gulp-concat');//合并
const minifycss = require('gulp-minify-css');//压缩css
const uglify = require('gulp-uglify');//压缩js
const imageMin = require('gulp-imagemin');//压缩img
const rename = require('gulp-rename')//重命名
const rev = require('gulp-rev')
const clean = require('gulp-clean')
const mock = require('mockjs')
//const htmlmin = require('gulp-htmlmin')//压缩html

//var option = {
//    removeComments:true,//清除html注释
//    collapseWhitespace:true,//压缩html
//    collapseBooleanAttribules:true,//省略布尔属性的值
//    removeEmptyAttributes:true,
//    removeScriptTypeAttributes:true,
//    removeStyleLinkTypeAttributes:true
//}
//
//gulp.task('html',function(){
//    gulp.src('./index.html')
//        .pipe(htmlmin(option))
//        .pipe(gulp.dest('./html/'))
//    })

//定义任务
gulp.task('mini',function(){//任务名
    gulp.src('./Content/css/*.css')
        .pipe(clean())
        .pipe(concat('wxr.css'))//合并
        .pipe(rename({suffix:'.min'}))
        .pipe(rev())
        .pipe(minifycss())//压缩
        .pipe(gulp.dest('./Content/css'))//输出
    })


gulp.task('ugli',function(){//任务名
    gulp.src('./Content/js/*.js')
        .pipe(concat('wxr.js'))//合并
        .pipe(uglify())//压缩
        .pipe(gulp.dest('./Content/js'))//输出
    })

gulp.task('imgs',function(){//任务名
    gulp.src('./Content/img/1.jpg')
        .pipe(imageMin())//压缩
        .pipe(gulp.dest('./Content/img'))//输出
    })
gulp.task('default',['mini','ugli','imgs'])
