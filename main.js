var Geo = {};
var weatherDB ={};

if(navigator.geolocation){
  navigator.geolocation.getCurrentPosition(success,error);
}
else{
  alert("Geolocation not supported");
}
function success(position){
  getTemp(position)
  setInterval(function(){getTemp(position)}, 3600000);
  function getTemp(position){
    Geo.lat = position.coords.latitude;
    Geo.lng = position.coords.longitude;
    weatherURL = "https://api.wunderground.com/api/cdbf11ae7a9a1dc1/geolookup/conditions/q/"+Geo.lat+","+Geo.lng+".json"
     $.ajax({
            'async': false,
            'global': false,
            'url': weatherURL,
            'dataType': "jsonp",
            'success': function (data) {
              jsondb = data;
              var cityName = jsondb.location.city;
              var countryName = jsondb.location.country;
               tempC = jsondb.current_observation.temp_c;
               tempF = jsondb.current_observation.temp_f;
              var weatherIcon = jsondb.current_observation.icon_url;
              var weatherIconName = jsondb.current_observation.icon;

              // document.getElementById("wIcon").src = weatherIcon;
              document.getElementById("wIcon").alt = weatherIconName;
              document.getElementById("cityName").innerHTML = cityName+", "+countryName;
               document.getElementById("temp").innerHTML == ""+tempF+" \xB0F" ? document.getElementById("temp").innerHTML = ""+tempF+" \xB0F" : document.getElementById("temp").innerHTML = ""+tempC+" \xB0C"
console.log(jsondb);
              }
        });
  }
}
function error(errorMessage){
  alert(errorMessage.code+" : "+errorMessage.message);
}

 function tempScaleChange(){
              document.getElementById("temp").innerHTML == ""+tempF+" \xB0F" ? document.getElementById("temp").innerHTML = ""+tempC+" \xB0C" : document.getElementById("temp").innerHTML = ""+tempF+" \xB0F"
            }

var d = new Date();
document.getElementById("date").innerHTML = d.toLocaleDateString();