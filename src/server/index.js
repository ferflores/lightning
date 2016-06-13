import path from 'path';
import express from 'express';
import http from 'http';
import io from 'socket.io';
import setIOHandler from './modules/ioHandler';

const app = express();
const server = http.Server(app);
const sockets = io(server);
setIOHandler(sockets);

app.use(express.static(path.resolve(__dirname, '../../dist/public')));
app.set('view engine', 'ejs');

app.get('*', (req, res) => {
  res.render(path.resolve(__dirname, '../../dist/views/index'))
});

server.listen('3000', function(err){
  if(err) {
    console.log(err);
    return;
  }
  console.log('Server listening at http://localhost:3000');
});
