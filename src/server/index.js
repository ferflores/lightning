import path from 'path';
import express from 'express';

const app = express();
app.use(express.static(path.resolve(__dirname, '../../dist/public')));
app.set('view engine', 'ejs');

app.get('*', (req, res) => {
  res.render(path.resolve(__dirname, '../../dist/views/index'))
});

app.listen('3000', function(err){
  if(err) {
    console.log(err);
    return;
  }
  console.log('Server listening at http://localhost:3000');
});
