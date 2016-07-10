var google_api_key = AIzaSyA-s7r6lug0QeYVkshYFh9k9BHabFFH1xo;

var embed_map = `<div id="google_map">
<script>
      var map;
      function initMap() {
        var myLatLng = {lat: 33.784262, lng: -84.374743};

        map = new google.maps.Map(document.getElementById('google_map'), {
          center: {lat: 33.780, lng: -84.375},
          zoom: 15
        });
        var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'Hello World!'
        });
      }
    </script>
   


    </div>


 <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA-s7r6lug0QeYVkshYFh9k9BHabFFH1xo&callback=initMap"
    async defer></script>
`