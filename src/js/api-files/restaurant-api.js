import $ from 'jquery';

var baseURL = "https://json-data.herokuapp.com/restaurant"
var fancyMenuObj = 0
var specialsObj = 0
var specialItem = 0

var log = function(data){
  console.warn(">>>> API request errored out, logging data...")
  console.warn('>>>> DATA RECIEVED:',data)
};




var requestAPI = function(endUrl, writeFunction){
  var url = `${baseURL}${endUrl}`
console.log("function %crequestAPI%c running","color:blue;", baseURL)
  console.log("%c>>>> %cSending API request to","color:green;", "color:black;", url)
  var result = $.ajax({
  url: url,
  dataType: "json",
  success: writeFunction,
  error: log
})
}
// success arg should point to the addToPage function



var newsTemplate = function(result){
  return `<div class="news-post">
  <p class="title">${result.title}</p>
  <p class="date">${result.date_published}</p>
  <p class="post">${result.post}</p>
  </div>`
}

// |=============================================IMPORTANT=================================================|
// |To replace '1' or '0' with the correct icon or image have an if statement:                             |
// |EXAMPLE | if (result.spicy == 1) {spicy = `<img src="example.com/picture"></img>`} |                   |
// |=======================================================================================================|

var fancyMenuTemplate = function(result){
var spicy = ""
var vegan = ""
var allergies = ""

  if (result.spicy == 1) {spicy = `<img src="example.com/picture"></img>`}
  if (result.vegan == 1) {vegan = `<img src="example.com/picture"></img>`}
  if (result.allergies == 1) {allergies = `<img src="example.com/picture"></img>`}

  return `<div class="fancy-menu-post">
  <p class="title">${result.item}</p>
  <p class="description">${result.description}</p>
  <p class="price">$${result.price}</p>
  <p class="spicy">Spicy: ${spicy}</p>
  <p class="vegan">Vegan: ${vegan}</p>
  <p class="allergies">Allergies: ${allergies}</p>
  </div>`
}


var alaydisMenuTemplate = function(result){
  var localFave = ""
  var lowSodium = ""
  var Under500 = ""
  var price = ""
  var soupOr = function(){
    if (result.price.cup === undefined) {
      price = "$" + result.price
      }
    else price = "cup: $" + result.price.cup + "bowl: $" + result.price.bowl
  }

    if (result["local fav"] == 1) {localFave = `<img src="example.com/picture"></img>`};
    if (result["low sodium"] == 1) {lowSodium = `<img src="example.com/picture"></img>`};
    if (result["under 500 cals"] == 1) {Under500 = `<img src="example.com/picture"></img>`};

soupOr()

  return `<div class="alaydis-menu-post">
  <p class="item">${result.item}</p>
  <p class="price">${price}</p>
  <p class="description">${result.description}</p>
  <p class="local">Local fave? ${localFave}</p>
  <p class="sodium">Low sodium? ${lowSodium}</p>
  <p class="cals">Under 500 cals? ${Under500}</p>
  <hr>
  </div>`
}
// remove <hr> after testing


// ------------------------------------------------------------------------------
// Remember to modify the ${class} to point to whatever is on your real index.html


var newsToPage = function(data){
    console.log("function %cnewsToPage%c running, API request recieved","color:blue;", data)
  console.log("adding api result %cnews%c to page","color:green;", data)
  $(".news").append(newsTemplate(data))
}

var fancyToPage = function(data){
    fancyMenuObj = data;
        specialsInit();
        // This function call is here because specialsInit() depends on fancyMenuObj variable being set
  console.log("function %cfancyToPage%c running, API request recieved","color:blue;", data)
        console.log("adding api result %cappetizers%c to page","color:green;", data)
          data.appetizers.forEach(function(datum){
              $(".fancy-menu").append(fancyMenuTemplate(datum))

            });
        console.log("adding api result %centrees%c to page","color:green;", data)
          data.entrees.forEach(function(datum){
              $(".fancy-menu").append(fancyMenuTemplate(datum))

            });
        console.log("adding api result %csides%c to page","color:green;", data)
        data.sides.forEach(function(datum){
            $(".fancy-menu").append(fancyMenuTemplate(datum))

          });
}

var alaydisToPage = function(data){
      console.log("function %calaydisToPage%c running","color:blue;","color:black;")
  for (var prop in data) {
    console.log("Looping over " + "data." + [prop]);
    data[prop].forEach(function(datum){
      console.log("%c<----%c  number of ","color:green;","color:black;", prop)
      $(".alaydis-menu").append(alaydisMenuTemplate(datum))

    });
  };
};


var specialsLogic = function(data){
  var specialsObj = data;
  var specialID = data.menu_item_id;

    console.log("function %cspecialsLogic%c running","color:blue;","color:black;")
    console.log("specialsObj: ",specialsObj,"Today's Special 'id': ",specialID)
  for (var prop in fancyMenuObj) {
      fancyMenuObj[prop].forEach(function(datum){
        if (datum.id === specialID) {specialItem = datum}
        });
    }
  console.log("%cSPECIAL OF THE DAY","color:orange;",specialItem);
    $(".special-item").append("Special OF THE DAY")
    $(".special-item").append(fancyMenuTemplate(specialItem))
};


var specialsInit = function(data){
  console.log("function %cspecialsInit%c running","color:blue;","color:black;")
  requestAPI('/special/1',specialsLogic)
};



// Remember to modify the ${class} to point to whatever is on your real index.html
// ------------------------------------------------------------------------------

// =================================
// INIT                             |
requestAPI('/news/1',newsToPage)
requestAPI('/menu/1', fancyToPage)
requestAPI('/menu/2', alaydisToPage)
// INIT                             |
// =================================


export { baseURL, requestAPI, newsTemplate, fancyMenuTemplate, alaydisMenuTemplate, log, newsToPage, fancyToPage, alaydisToPage };
