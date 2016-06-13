import vmap from './modules/map';
import countryBlink from './modules/countryBlink';
import socketHandler from './modules/socketHandler';
import socket from 'socket.io-client';

var map = vmap.init();

socketHandler(socket);

setTimeout(function(){countryBlink(map, 'US');}, 3100);
