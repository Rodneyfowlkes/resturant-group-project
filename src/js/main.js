import $ from 'jquery';

var baseURL = "https://json-data.herokuapp.com/restaurant"

var log = function(data){
  console.log("%c>>>> API request errored out, logging data...", 'color:red;')
  console.log('>>>> DATA RECIEVED:',data)
}



var requestAPI = function(endUrl, writeFunction){
  var url = `${baseURL}${endUrl}`
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
  <p class="post">${result.post}</p>`
}

var fancyMenuTemplate = function(result){
  return `<div class="fancy-menu-post">
  <p class="title">${result.item}</p>
  <p class="description">${result.description}</p>
  <p class="price">${result.price}</p>`
}


var newsToPage = function(data){
  console.log("adding api result news to page", data)
  $(".news").append(newsTemplate(data))
}

// Remember to modify the ${class} to point to whatever is on your real inde.html

var fancyToPage = function(data){
  console.log("adding api result news to page", data)
  data.appetizers.forEach(function(datum){
    $(".fancy-menu").append(fancyMenuTemplate(datum))
  });
  // Remember to modify the ${class} to point to whatever is on your real inde.html

}
requestAPI('/news/1',newsToPage)
requestAPI('/menu/1', fancyToPage)
