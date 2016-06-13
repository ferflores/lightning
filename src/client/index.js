import vmap from './modules/map';
import countryBlink from './modules/countryBlink';

var map = vmap.init();

setTimeout(function(){countryBlink(map, 'US');}, 3100);
