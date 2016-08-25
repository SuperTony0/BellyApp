function displayPlaces (places){
  $('#loader').hide();
  var count = 0;
  for (count = 0; count <10; count ++){
    createBiz(places,count);
    //console.log(places.businesses[count].name);
  }
}

function createBiz(places,count) {
  var biz = places.businesses[count];
  markers.push(biz.location.coordinate);
  var name = biz.name;
  var image = biz.image_url;
  var distance = Math.round(biz.distance/100)/10;

  var catagory = biz.categories[0][0];
  var closed = biz.is_closed;
  var open;
  if (closed){
    open = "style='color:gray'>Closed";
  } else {
    open = "style='color:green'>Open";
  }
  var col1 = '<div class="col-xs-2"><img src="'+image+'"></div>';

  var row1 = '<div class="row" style="height:33%"><h3>'+name+'</h3></div>';
  var row2 = '<div class="row">'+distance+' miles away</div>';
  var row3 = '<div class="row" style="height:33%">'+catagory+'</div>';
  var col2 = '<div class="col-xs-8" style="height:33%">'+row1+row2+row3+'</div>';


  var col3 = '<div class="col-xs-2"'+open+'</div>';
  var row ='<div class="row place" > '+col1+col2+col3+'</div>';
  $('#places-near').append(row);
}
