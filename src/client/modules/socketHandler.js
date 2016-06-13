import countryBlink from './countryBlink';
import log from './log.js';

export default function(socket, map) {

  socket.on('event', (data)=> {
    countryBlink(map, data.countryCode, data.color);
    log(
      {
        color:data.color,
        countryCode: data.countryCode,
        message:data.message
      });
  });
}
