var x = document.getElementById("Location");
function getLocation() {
    $("#places-near").toggle();
    $("#map").toggle();
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showLocation);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showLocation(position) {
  var lat = position.coords.latitude;
  var lon = position.coords.longitude;
  var latlon = {lat: lat, lng: lon};
  initMap(latlon);


}

var map;
function initMap(latlon) {
  map = new google.maps.Map(document.getElementById('map'), {
    center: latlon,
    zoom: 15
  });
  var marker, i;
  var infowindow = new google.maps.InfoWindow();
  marker = new google.maps.Marker({
    position: latlon,
    map:map,
    title: "Current Location"
  });
  for (i = 0; i < markers.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(markers[i].lat, markers[i].lon),
      map: map,
      title: markers[i].name
    });
  }
}
