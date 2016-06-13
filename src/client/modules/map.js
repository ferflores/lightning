var regionStyle = {
  initial: {
    fill: '#000000',
    "fill-opacity": 1,
    stroke: 'none',
    "stroke-width": 0,
    "stroke-opacity": 1
  },
  hover: {
    "fill-opacity": 0.8,
    cursor: 'pointer'
  },
  selected: {
    fill: 'yellow'
  }
}

var map = {
  init: function(){
    $('#map').vectorMap(
      {
        map: 'world_mill',
        backgroundColor:'#5f5f5f',
        regionStyle: regionStyle
      });
    }
}

export default map;
