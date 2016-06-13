import gulp from 'gulp';
import path from 'path';
import babel from 'gulp-babel';

const serverSrc = path.resolve(__dirname,'src/server/**/*.js');
const serverDest = path.resolve(__dirname,'dist/server/');


gulp.task('build-server', (cb) => {
  gulp.src(serverSrc)
       .pipe(babel({
           presets: ['es2015']
       }))
       .pipe(gulp.dest(serverDest));
      cb();
})

gulp.task('default', ['build-server']);
