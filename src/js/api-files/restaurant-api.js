baseURL = "https://json-data.herokuapp.com/restaurant"

var log = function(data){
  console.log("%c>>>> API request errored out, logging data...", 'color:red;')
  console.log('>>>> DATA RECIEVED:',data)
}

var requestAPI = function(endUrl, success){
  var url = `${baseURL} + ${endUrl}`
  var apiSuccess = success
    $.ajax({
  url: url,
  dataType: "json",
  success: apiSuccess
  error: log()
})
}

};
