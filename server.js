var http = require('http');
var rethinkDb = require("./rethinkdb.js");

const PORT=8080;

function handleRequest(request, response){
    rethinkDb.isAllGood()
        .then(function (result) {
            if (result === true) {
                response.end("All is good");
            }

            response.statusCode = 503;
            response.end("There are currently issues");
        })
        .catch(function (error) {
            response.statusCode = 500;
            response.end(error.message);
        });
}

var server = http.createServer(handleRequest);

server.listen(PORT);
