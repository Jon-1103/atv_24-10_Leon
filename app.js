// Wait for the document to be ready
document.addEventListener('DOMContentLoaded', function () {
  // Create a map instance and set the initial view coordinates and zoom level
  var map = L.map('map').setView([-23.51691783763159, -46.83549726328389], 13);


  // Add a tile layer to the map from OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  var greenIcon = L.icon({
    iconUrl: 'https://i.redd.it/u68122mapmx31.png',
    iconSize:     [80, 60], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

  // Create a marker with popup and add it to the map
  var marker2 = L.marker([-23.52026413037824, -46.83670586136634], {icon: greenIcon}).addTo(map);
  marker2.bindPopup("Amada turma de DMD, eu me perdi aqui").openPopup();

  var marker2 = L.marker([-23.51691783763159, -46.83549726328389]).addTo(map);
  marker.bindPopup("Salve Salve").openPopup();
});