baseURL = "https://json-data.herokuapp.com/restaurant"


var requestConst = function(url, returnFunc){
var newsData = $.ajax({
  url: `${baseURL} + url`,
  dataType: "json",
  success: returnFunc
  error: log()
})
};

  new requestConst('/news/1', writeTemplate(newsData))
