var x = document.getElementById("Location");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showLocation);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showLocation(position) {
  var latlon = position.coords.latitude + "," + position.coords.longitude;

  var mapProp = {
    center: new google.maps.LatLng(latlon),
    zoom: 5,
    mapTypeId:google.maps.mapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("Location"), mapProp);
}
