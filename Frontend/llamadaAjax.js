$(document).ready(function(){
  var map;
  var madridCentro = {lat: 40.41, lng: -3.70};
  var maker;
$( "#btnTags" ).click(function(){
    var makerFinal = [];
    var maker = [];
    var URL = "http://localhost:3977/api/search/"
    var inputValue = $("#tags").val();
    console.log(URL + inputValue);
      $.get(URL + inputValue, function(data, status){
        for (var i = 0; i < data.provincia[0].citys.length; i++) {
          maker = [];
          //console.log(data.provincia[0].citys[i]);
            maker.push(data.provincia[0].citys[i].cityName);
            maker.push(data.provincia[0].citys[i].lat);
            maker.push(data.provincia[0].citys[i].lng);
            makerFinal.push(maker);
          }
          console.log(makerFinal);
          console.log(data.provincia[0].latLng[0].lat + " " +data.provincia[0].latLng[0].lng  );
          map = new google.maps.Map(document.getElementById('map'), {
           zoom: data.provincia[0].zoom,
           center: new google.maps.LatLng(data.provincia[0].latLng[0].lat, data.provincia[0].latLng[0].lng)
         });
         for (var i = 0; i < makerFinal.length; i++) {
           var markerMapa = new google.maps.Marker({
             position: new google.maps.LatLng(makerFinal[i][1], makerFinal[i][2]),
             map: map
           });
           markerMapa.setMap(map);
         }

      });


  });
});
function initMap() {
  var madrid = {lat: 40.41, lng: -3.70};
   map = new google.maps.Map(document.getElementById('map'), {
    zoom: 5,
    center: madrid
  });

}
