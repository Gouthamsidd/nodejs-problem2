var request = require("request");
var http = require("http");
var fs = require ("fs");
var data = fs.readFileSync('./data.json');
var url =  "http://localhost:8080/vegetables";
var port = process.env.PORT || 8080



http.createServer(function(req,res){
    let projects = JSON.parse(data);
 
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify(projects));
    res.end();
  
 
}).listen(port, () => {
    console.log('server started',port)
  });