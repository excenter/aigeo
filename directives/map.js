L.mapbox.accessToken = 'pk.eyJ1IjoiYW5kcmV3YmF0eiIsImEiOiJjaW1pajlhdXowMGNtdXlrdTNtaDByY3R3In0.aRKPHYn4_EDUrmcYxZ0Wgw';
var geojson = [
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-77.031952,38.913184]
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.413682,37.775408]
    }
  }
];

var mapGeo = L.mapbox.map('map_geo', 'mapbox.light')
  .setView([37.8, -96], 4);

var myLayer = L.mapbox.featureLayer().setGeoJSON(geojson).addTo(mapGeo);
