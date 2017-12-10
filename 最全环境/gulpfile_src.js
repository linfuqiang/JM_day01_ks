//拿到gulp对象
var gulp=require("gulp");
var less=require("gulp-less");
//热更新
var connect=require("gulp-connect");
//压缩js
var uglify=require("gulp-uglify");
//压缩css
var cleanCss=require("gulp-clean-css");
//压缩img
var imagemin=require("gulp-imagemin");

var watchLess="src/css/*.less"
var watchHtml="src/*.html";
var watchImg="src/img/*.{png,jpg}";
var watchJs="src/js/*.js"
// testLess  任务的名字
gulp.task("testLess",function(){
	//"css/main.less" 文件路径  *代表所有的less都编译
	//"css" 直接使用文件根目录，他会使用less的同名取css的文件名
	 gulp
	.src(watchLess)
	.pipe(less())
	.pipe(gulp.dest("src/css"))
//	.pipe(cleanCss())
//	.pipe(gulp.dest("dist/css"))
    //刷新浏览器
	.pipe(connect.reload());
});
gulp.task("testHtml", function () {
          gulp
         .src(watchHtml)
//       .pipe(gulp.dest("dist"))
         .pipe(connect.reload());
 
 });
gulp.task("testJs", function () {
          gulp
         .src(watchJs)
//       .pipe(uglify())
//       .pipe(gulp.dest("dist/js"))
         .pipe(connect.reload());
 
 });
 
 gulp.task("testImg", function () {
          gulp
         .src(watchImg)
//       .pipe(imagemin())
//       .pipe(gulp.dest("dist/img"))
         .pipe(connect.reload());
 }); 
 
 
//部署热更新 
gulp.task("server",function(){
	connect.server({root:"src",livereload:true});
});
//实时监听文件变化
gulp.task("watch",function(){
	//监听css路径下的所有less文件，一旦发生变化就执行编译任务：testLess
	gulp.watch(watchLess,["testLess"]);
	gulp.watch(watchHtml,["testHtml"]);
	gulp.watch(watchJs,["testJs"]);
	gulp.watch(watchImg,["testImg"]);
});
gulp.task("default",["server","watch"]);




