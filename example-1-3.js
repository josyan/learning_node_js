var http = require('http');
var fs = require('fs');

var counter = 0;

function writeNumbers(res) {
  for(var i = 0; i < 100; i++) {
    counter++;
    res.write(counter.toString() + '\n');
  }
}

http.createServer(function(req, res) {
  var query = require('url').parse(req.url).query;
  app = require('querystring').parse(query).file + '.txt';
  res.writeHead(200, {'Content-Type': 'text/plain'});
  writeNumbers(res);
  setTimeout(function() {
    console.log('Opening ' + app);
    fs.readFile(app, 'utf8', function(err, data) {
      if(err) {
        res.write('Could not find or open file for reading\n');
      } else {
        res.write(data);
      }
      res.end();
    })
  }, 2000);
}).listen(8124);
console.log('Server running on 8124');
