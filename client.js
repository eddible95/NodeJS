const http = require('http');

// Options to be used by request
const options = {
  host: 'localhost',
  port: '8081',
  path: '/index.html'
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

// Make a request to the Server
const req = http.request(options, callback);
req.end();
