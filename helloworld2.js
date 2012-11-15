var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
  fs.readFile('helloworld.js', 'utf8', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    if(err) {
      res.write('Could not find or open file for reading\n');
    } else {
      res.write(data);
    }
    res.end();
  });
}).listen(8124, function() {
  console.log('bound to port 8124');
});
console.log('Server running on 8124\n');
