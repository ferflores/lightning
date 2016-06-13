export default function(vmap, countryCode, color = '#FFFFFF') {

  let elem = $(vmap).find(`path[data-code="${countryCode}"]`);

  elem.removeClass('blink');
  elem.addClass('blink');

  setTimeout(()=> { elem.removeClass('blink') }, 400);
}
