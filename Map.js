// https://developers.google.com/maps/documentation/javascript/overview?hl=ru#Inline
// https://codesandbox.io/p/sandbox/github/googlemaps/js-samples/tree/sample-map-simple?embed=1&file=%2Findex.ts%3A18%2C1

// Полезные источники



let map;

async function initMap() {
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");

map = new Map(document.getElementById("map"), {
  center: { lat: -34.397, lng: 150.644 },
  zoom: 8,
});
}

initMap();