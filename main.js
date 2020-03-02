// Required modules
var http = require("http");

// Creating a server instance
http.createServer(function (request, response) {
  // Send the HTTP header
  // HTTP Status: 200 : OK
  // Content Type: text/plian
  response.writeHead(200, {'Content-Type': 'text/plain'})

  // Send the response body as "Hellow World"
  response.end("Hello Word\n");
}).listen(8081); // Listen at port 8081

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');
