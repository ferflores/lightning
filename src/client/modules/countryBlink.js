export default function(vmap, countryCode, color = '#FFFFFF') {

  let elem = $(vmap).find(`path[data-code="${countryCode}"]`);

  elem.css({fill: color, transition: ".3s"});
  setTimeout(()=> {
    elem.css({fill: "#000000", transition: ".3s"});
  }, 400)
}
