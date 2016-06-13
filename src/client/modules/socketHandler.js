import countryBlink from './countryBlink';

export default function(socket, map) {

  socket.on('event', (data)=> {
    countryBlink(map, data.countryCode, data.color);
  });
}
