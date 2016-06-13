export default function(sockets){

  sockets.on('connection', (socket)=> {
    console.log('user connected');
  });
}
