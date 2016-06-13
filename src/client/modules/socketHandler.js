let io = null;

export default function(socket) {

  io = socket();

  io.on('connect', ()=> {
    console.log('connected');
  })
}
