//拿到gulp对象
var gulp=require("gulp");
var less=require("gulp-less");

// testLess  任务的名字
gulp.task("testLess",function(){
	//"css/main.less" 文件路径  *代表所有的less都编译
	//"css" 直接使用文件根目录，他会使用less的同名取css的文件名
	gulp.src("css/*.less").pipe(less()).pipe(gulp.dest("css"));
});
//实时监听文件变化
gulp.task("watch",function(){
	//监听css路径下的所有less文件，一旦发生变化就执行编译任务：testLess
	gulp.watch("css/*.less",["testLess"]);

});
