var x = document.getElementById("Location");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showLocation);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showLocation(position) {
  var lat = position.coords.latitude;
  var lon = position.coords.longitude;
  var latlon = lat + "," + lon;

var img_url = "http://maps.googleapis.com/maps/api/staticmap?center= "+latlon+"&zoom=14&size=400x300&sensor=false";

  document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";

}


function getPlaces() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPlaces)
  } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
function showPlaces(position) {
  var lat = position.coords.latitude;
  var lon = position.coords.longitude;
  $.ajax({
    url:'/pages/yelp_request',
    type: 'get',
    dataType: "json",
    data: {
      latitude: lat,
      longitude: lon
    },
    success: function(result){
      console.log(result);
      displayPlaces(result);
    }
  });

}
