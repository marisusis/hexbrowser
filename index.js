var log = require('util').log;
var http = require('http');
var express = require('express');
var app = express();
var server = http.createServer(app);
var path = require('path');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


//implement http config
var port = 9500;
app.set('port', port);



app.get('/get', function(req, res) {
  log(req.query.url);
var xhr = new XMLHttpRequest();
  xhr.open('GET',req.query.url);
  xhr.onload = function(e) {
    res.send(xhr.responseText);
  }
  xhr.send();
});


server.listen(port, function(e) {
  log("http server listening on :9500");
})