
// var map = L.map('map').setView([33.2778, 75.3412], 14);

// var osMap = L.tileLayer.mbTiles('data/ocm_kash_14.mbtiles').addTo(map)

var map = L.map('map').setView([33.2778, 75.3412], 10);

// Define tile layers for each zoom level
var tileLayerZoom10 = L.tileLayer.mbTiles('data/ocm_kash_10.mbtiles', {
    minZoom: 10,
    maxZoom: 10
}).addTo(map);

var tileLayerZoom11 = L.tileLayer.mbTiles('data/ocm_kash_11.mbtiles', {
    minZoom: 11,
    maxZoom: 11
}).addTo(map);

var tileLayerZoom12 = L.tileLayer.mbTiles('data/ocm_kash_12.mbtiles', {
    minZoom: 12,
    maxZoom: 12
}).addTo(map);

var tileLayerZoom13 = L.tileLayer.mbTiles('data/ocm_kash_13.mbtiles', {
    minZoom: 13,
    maxZoom: 13
}).addTo(map);

var tileLayerZoom14 = L.tileLayer.mbTiles('data/ocm_kash_14.mbtiles', {
    minZoom: 14,
    maxZoom: 14
}).addTo(map);

// Optionally, you can set the minZoom and maxZoom for the map
map.setMinZoom(10);
map.setMaxZoom(14);
