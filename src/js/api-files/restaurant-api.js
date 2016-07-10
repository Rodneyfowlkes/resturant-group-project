import $ from 'jquery';

var baseURL = "https://json-data.herokuapp.com/restaurant"


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

var fancyMenuTemplate = function(result){
  return `<div class="fancy-menu-post">
  <p class="title">${result.item}</p>
  <p class="description">${result.description}</p>
  <p class="price">$${result.price}</p>
  </div>`
}

// "item": "Bagel & Egg",
// "price": 2,
// "description": "A Bagel and an Egg",
// "local fav": 0,
// "low sodium": 1,
// "under 500 cals": 1

var alaydisMenuTemplate = function(result){
  return `<div class="alaydis-menu-post">
  <p class="item">${result.item}</p>
  <p class="price">$${result.price}</p>
  <p class="description">${result.description}</p>
  <p class="local">${result["local fav"]}</p>
  <p class="sodium">${result["low sodium"]}</p>
  <p class="cals">${result["under 500 cals"]}</p>
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
  for (var prop in data) {
    console.log("Looping over " + "data." + [prop]);
    data[prop].forEach(function(datum){
      console.log("%c<----%c  | number of ","color:green;","color:black;", prop)
      $(".alaydis-menu").append(alaydisMenuTemplate(datum))

    });
  };
};


// Remember to modify the ${class} to point to whatever is on your real index.html
// ------------------------------------------------------------------------------


requestAPI('/news/1',newsToPage)
requestAPI('/menu/1', fancyToPage)
requestAPI('/menu/2', alaydisToPage)

export { baseURL, requestAPI, newsTemplate, fancyMenuTemplate, alaydisMenuTemplate, log, newsToPage, fancyToPage, alaydisToPage };
