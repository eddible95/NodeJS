const express = require('express');
const app = express();
const fs = require('fs');

var user = {
  'user4' : {
    "name" : "mohit",
    "password" : "password4",
    "profession" : "teacher",
    "id" : 4
  }
}

// List Users API
app.get('/listUsers', function(req, res) {
  fs.readFile(__dirname + "/" + "users.json", 'utf8', function(err, data) {
    console.log(data);
    res.end(data);
  });
})

// Add User API
app.post('/addUser', function(req, res) {
  // First read exisiting users
  fs.readFile(__dirname + "/" + "users.json", "utf8", function(err, data) {
    data = JSON.parse(data);
    data['user4'] = user['user4'];
    console.log(data);
    // Update the user.json
    fs.writeFile(__dirname + "/" + "users.json", JSON.stringify(data), function(err){
      if (err) {
        console.error(err);
      }
    })
    res.end(JSON.stringify(data));
  });
})

// Show Detail API
app.get('/:id', function(req, res) {
  // First read existing users
  fs.readFile(__dirname + "/" + "users.json", "utf8", function(err, data) {
    var users = JSON.parse(data);
    var user = users['user' + req.params.id];
    console.log(user);
    res.end(JSON.stringify(user));
  });
})

// Delete User API
app.delete('/deleteUser', function(req, res) {
  // First read existing users
  fs.readFile(__dirname + "/" + "users.json", "utf8", function(err, data) {
    data = JSON.parse(data);
    delete data['user2'];
    console.log(data);
    fs.writeFile(__dirname + "/" + "users.json", JSON.stringify(data), function(err){
      if (err) {
        console.error(err);
      }
    })
    res.end(JSON.stringify(data));
  });
})

const server = app.listen(8081, "127.0.0.1", function() {
  const host = server.address().address
  const port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port);
})
