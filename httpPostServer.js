var http = require('http');
//var querystring = require('querystring');

//--------------------------------------------------
function createServerCallback (request, response) {
    if(request.method == 'POST') {
        processPost(request, response, function() {
            console.log(request.post);
            
            // Use request.post here
            //obj = JSON.parse(request.post);
            //console.log(obj.query);
            
            response.writeHead(200, "OK", {'Content-Type': 'text/plain'});
            response.end();
        });
    } else {
        response.writeHead(200, "OK", {'Content-Type': 'text/plain'});
        response.end();
    }

}
//-------------------------------------------------
function processPostCallback(request, response) {
	console.log(request, post);
	
	response.writeHead(200, "OK", {'Content-Type': 'text/plain'});
    response.end();
}
//-------------------------------------

function processPost(request, response, callback) {
    var queryData = "";
    if(typeof callback !== 'function') return null;

    if(request.method == 'POST') {
        request.on('data', function(data) {
            queryData += data;
            if(queryData.length > 1e6) {
                queryData = "";
                response.writeHead(413, {'Content-Type': 'text/plain'}).end();
                request.connection.destroy();
            }
        });

        request.on('end', function() {
            request.post = queryData; //querystring.parse(queryData);
            callback(request, response);
        });

    } else {
        response.writeHead(405, {'Content-Type': 'text/plain'});
        response.end();
    }
}

http.createServer(createServerCallback).listen(8080);


