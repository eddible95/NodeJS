const http = require('http');

// Options to be used by request
const option_1 = {
  host: 'localhost',
  port: '8081',
  path: '/listUsers',
  method: 'GET'
};

// Options to be used by request
const option_2 = {
  host: 'localhost',
  port: '8081',
  path: '/addUser',
  method: 'POST'
};


// Options to be used by request
const option_3 = {
  host: 'localhost',
  port: '8081',
  path: '/2',
  method: "GET"
};

// Options to be used by request
const option_4 = {
  host: 'localhost',
  port: '8081',
  path: '/deleteUser',
  method: "DELETE"
};

// Callback function is used to deal with response
const callback = function(response) {
  // Continuously update stream with data
  var body = '';
  response.on('data', function(data) {
    body+= data;
  });

  response.on('end', function() {
    // Data receieved comepletely
    console.log(body);
  });
}

// // Make a request to the Server
// var req = http.request(option_1, callback);
// req.end();
//
// // Make a request to the Server
// req = http.request(option_2, callback);
// req.end();

// Make a request to the Server
var req = http.request(option_3, callback);
req.end();

// Make a request to the Server
req = http.request(option_4, callback);
req.end();
