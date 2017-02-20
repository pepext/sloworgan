// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var fs = require('fs');
var json = require('comment-json');


// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/rels", function (request, response) {
  fs.readFile('/app/nodos.json', 'utf-8', function(err, data) {
                        var texto = 'EERRRRR';
                        if (!err) {
                            texto = data;    
                        }
       //var b= texto.toString();
           a =json.parse(texto);
  
console.log(a.rel[2].dest);
  lista.push(a.rel[3].dest);
  response.send(lista);});
});

// could also use the POST body instead of query string: http://expressjs.com/en/api.html#req.body
app.post("/rels", function (request, response) {
  var n0=request.query.dream;
     fs.readFile('/app/nodos.json', 'utf-8', function(err, data) {
                        var texto = 'EERRRRR';
                        if (!err) {
                            texto = data;    
                        }
       //var b= texto.toString();
           a =json.parse(texto);
  
//console.log(a.rel[2].dest);
  lista.push(a.rel[2].dest);
  response.sendStatus(200);
          
  });

});

// Simple in-memory store for now
var lista = [
  
];
var a;

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
