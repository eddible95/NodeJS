const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const multer  = require('multer');

// Create application/x-www-form-urlencoded parser
const urleconderParser = bodyParser.urlencoded({extended: false})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: './tmp/'}).single('file'));
app.use(express.static('public'));
// Getting the index.html file within the public/ folder
app.get('/index.html', function(req, res) {
  res.sendFile(__dirname + "/" + "index.html");
})

// Handles GET request
app.get('/process_get', function(req, res) {
  // Prepare output in JSON format
  response = {
    first_name:req.query.first_name,
    last_name:req.query.last_name
  };
  console.log(response);
  res.end(JSON.stringify(response));
})

// Handles POST request
app.post('/process_post', urleconderParser, function(req, res) {
  // Prepare output in JSON format
  response = {
    first_name:req.body.first_name,
    last_name:req.body.last_name
  };
  console.log(response);
  res.end(JSON.stringify(response));
})

// Handles file upload
app.post('/file_upload', function (req, res) {
   console.log(req.files.file.name);
   console.log(req.files.file.path);
   console.log(req.files.file.type);
   var file = __dirname + "/" + req.files.file.name;

   fs.readFile( req.files.file.path, function (err, data) {
      fs.writeFile(file, data, function (err) {
         if( err ) {
            console.log( err );
            } else {
               response = {
                  message:'File uploaded successfully',
                  filename:req.files.file.name
               };
            }

         console.log( response );
         res.end( JSON.stringify( response ) );
      });
   });
})

const server = app.listen(8081, "127.0.0.1", function() {
  const host = server.address().address
  const port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port);
})
