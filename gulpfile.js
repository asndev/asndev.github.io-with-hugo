const gulp = require('gulp');
const deploy = require('gulp-gh-pages');
const del = require('del');
const cp = require('child_process');

gulp.task('clean', (done) => {
  return del(['./public/**/*'], done);
});

gulp.task('hugo-build', (done) => {
  return cp
    .spawn('hugo', [], { stdio: 'inherit' })
    .on('close', done);
});

gulp.task('deploy', ['clean', 'hugo-build'], () => {
  return gulp
    .src('./public/**/*')
    .pipe(deploy({ branch: 'master' }));
});
