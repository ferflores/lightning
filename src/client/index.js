import vmap from './modules/map';
import socketHandler from './modules/socketHandler';
import socket from 'socket.io-client';

var map = vmap.init();

socketHandler(socket(), map);
