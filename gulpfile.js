const gulp = require('gulp');
const deploy = require('gulp-gh-pages');
const cp = require('child_process');

const messages = {
  building: '<span style="color: grey">Running:</span> $ hugo'
};

gulp.task('hugo-build', (done) => {
  return cp
    .spawn('hugo', [], { stdio: 'inherit' })
    .on('close', done);
});

gulp.task('deploy', ['hugo-build'], () => {
  return gulp
    .src('./public/**/*')
    .pipe(deploy({ branch: 'master' }));
});
