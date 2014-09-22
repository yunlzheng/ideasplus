var gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    watch = require('gulp-watch'),
    express = require('express'),
    livereloadport = 35729,
    serverport = 3000;

var path = require('path');
var routes = require("./routes/index");
var server = express();

server.set('view engine', 'jade');
server.use(express.static(path.resolve('./public')));
server.get('/', routes.index);
server.get('/partial/:name', routes.partial);

gulp.task('serve', function () {
    server.listen(serverport);
    livereload.listen(livereloadport);
});

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch('views/**').on('change', livereload.changed);
});

gulp.task('default', function () {
    // place code for your default task here
    gulp.run('serve', 'watch');
});