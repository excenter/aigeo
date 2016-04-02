mapboxgl.accessToken = 'pk.eyJ1IjoiYW5kcmV3YmF0eiIsImEiOiJjaW1pajlhdXowMGNtdXlrdTNtaDByY3R3In0.aRKPHYn4_EDUrmcYxZ0Wgw';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v8', //stylesheet location
    center: [0, 0], // starting position
    zoom: 1 // starting zoom
});
map.on('load', function() {
  map.addSource('markers', {
    type: 'geojson',
    data: {
      "type": "Feature",
      "geometry": {
          "type": "Point",
          "coordinates": [-77.03238901390978, 38.913188059745586]
      },
      "properties": {
          "title": "Mapbox DC",
          "marker-symbol": "monument"
      }
    }
  });
  map.addLayer({
    "id": "markers",
    "type": "symbol",
    "source": "markers",
    "layout": {
        "icon-image": "{marker-symbol}-15",
        "text-field": "{title}",
        "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
        "text-offset": [0, 0.6],
        "text-anchor": "top"
    }
  });
});
