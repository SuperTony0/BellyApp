var x = document.getElementById("Location");
function getLocation() {
    $("#places-near").toggle();
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
  console.log(latlon);

  var map;
        function initMap() {
          map = new google.maps.Map(document.getElementById('mapholder'), {
            center: {lat: -34.397, lng: 150.644},
            zoom: 8
          });
        }

  /*var map = new google.maps.Map(document.getElementById('mapholder'), {
    zoom:10,
    center: latlon
  });
*/

}

var map;
  function initMap() {
    map = new google.maps.Map(document.getElementById('mapholder'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });
  }
