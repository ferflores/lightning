import path from 'path';
import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import io from 'socket.io';

const app = express();
const server = http.Server(app);
const sockets = io(server);

app.use(express.static(path.resolve(__dirname, '../../dist/public')))
  .use(bodyParser.urlencoded({extended:false}));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render(path.resolve(__dirname, '../../dist/views/index'))
});

app.post('/event', (req, res) => {
  sockets.emit('event',
    {
      countryCode:req.body.countryCode,
      color: req.body.color,
      message: req.body.message
    });

  res.send('ok');
});

server.listen('3000', function(err){
  if(err) {
    console.log(err);
    return;
  }
  console.log('Server listening at http://localhost:3000');
});
