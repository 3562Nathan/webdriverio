const gulp = require('gulp');
const selenium = require('selenium-standalone');
const webdriver = require('gulp-webdriver');
const clean = require('gulp-clean');
const nodeInspector = require('gulp-node-inspector');

gulp.task('selenium-start', function(done) {
    selenium.install(function(err) {
        if (err) return done(err);
        selenium.start(function(err, child) {
            if (err) return done(err);
            selenium.child = child;
            done();
        });
    });
});

gulp.task('clean-report', function() {
    return gulp.src('allure-report', {read: false})
        .pipe(clean());
});

gulp.task('clean-errorShots', function() {
    return gulp.src('errorShots/*.png', {read: false})
        .pipe(clean());
});

gulp.task('debug', function() {

  gulp.src([])
    .pipe(nodeInspector({
      debugPort: 5859,
      webHost: '0.0.0.0',
      webPort: 8080,
      saveLiveEdit: false,
      preload: true,
      inject: true,
      hidden: [],
      stackTraceLimit: 50,
      sslKey: '',
      sslCert: ''
    }));
});

gulp.task('test:e2e',['clean-report', 'clean-errorShots', 'selenium-start'], function() {
    return gulp.src('wdio.conf.js')
        .pipe(webdriver({
            logLevel: 'silent',
            waitforTimeout: 10000,
            reporter: 'dot'
        }))
        .once('end', function() {
            selenium.child.kill();
        });
});
