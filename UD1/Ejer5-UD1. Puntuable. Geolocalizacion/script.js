var map;
var marker;

function initMap() {
  map = L.map('map').setView([0, 0], 12);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
}

document.getElementById("mostrarUbicacion").addEventListener("click", function() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = position.coords.latitude;
      var lon = position.coords.longitude;

      document.getElementById("latitud").textContent = lat;
      document.getElementById("longitud").textContent = lon;

      if (!map) {
        initMap();
      }

      if (marker) {
        marker.remove();
      }

      marker = L.marker([lat, lon]).addTo(map);
    });
  } else {
    console.log("La geolocalización no está disponible en este navegador.");
  }
});
