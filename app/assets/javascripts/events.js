

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
      displayPlaces(result);
    }
  });

}
