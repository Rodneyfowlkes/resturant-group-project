import $ from 'jquery'
var flickr_key = '2809d5d2c511bcae13b4c39a3f3504a2';
var flick_secret = '29e6568fb55a468a';
console.log($);

var photo_pull = function(x) {


	x.photos.photo.forEach(function(y){
		console.log(y);
        var farm_id = y.farm;
	    var server_id = y.server;
	    var id = y.id;
	    var secret = y.secret;
	    var photo_src = `https://farm${farm_id}.staticflickr.com/${server_id}/${id}_${secret}.jpg`
		console.log(photo_src);
		$(".flickr_photos").append(`  <div class="img"> <img class="flick_food" src="${photo_src}">

							   </div>
     `)})}







var flickr_pull = function (x){ $.ajax({
  url:  'https://api.flickr.com/services/rest/?',
  method: "GET",
 

  data: {  
  	format: 'json', 
    nojsoncallback: '1',
  	
  	method: 'flickr.photos.search',
  	api_key: flickr_key,
  	text: "Sushi"
  }

}).then(function (obj){ 

photo_pull(obj);

})
}


// json_pull();


flickr_pull();

export {flickr_pull};