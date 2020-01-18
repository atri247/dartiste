
var express = require('express'); /*Includes Express module into our project*/
var app = express(); /*Accesses all the functionality / methods of express in the app variable*/

/*Middleware runs between the request and response. Express has built-in function express.static to handle everything. https://www.youtube.com/watch?v=-lRgL9kj_h0&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp&index=28*/
app.use('/assets', express.static('assets'));

/*Server listens for the request at '/', when it receives a request it fires the function listed below with a response that is set as part of 'res' */
app.get('/', function(req,res){

	res.sendFile(__dirname + '/index.html');

});

app.get('/music', function(req,res){

	res.sendFile(__dirname + '/music.html');

});

app.get('/design', function(req,res){

	res.sendFile(__dirname + '/design.html');

});

app.get('/products', function(req,res){

	res.sendFile(__dirname + '/products.html');

});

app.get('/army', function(req,res){

	res.sendFile(__dirname + '/army.html');

});

app.get('/internships', function(req,res){

	res.sendFile(__dirname + '/internships.html');

});

app.get('/djsets', function(req,res){

	res.sendFile(__dirname + '/djsets.html');

});

app.get('/team', function(req,res){

	res.sendFile(__dirname + '/team.html');

});

app.listen(8000); /*Listen to the port # */




/*
var url = require ('url');
var fs = require ('fs');


function renderHTML (path, response){
	fs.readFile(path, null, function(error, data){
		if (error){
			response.writeHead(404);
			response.write('File not found!');
		} else {
			response.write(data);
		}
		response.end();
	});
}

module.exports = {
	handleRequest: function(request,response){
		response.writeHead(200, {'Content-Type': 'text/html'});

		var path = url.parse(request.url).pathname;
		switch(path){
			case '/':
				renderHTML('./index.html', response);
				break;
			 
			case "/fonts.css" :
	            response.writeHead(200, {"Content-Type": "text/css"});
	            response.write('./fonts.css');
	            break;
			case '/design':
				renderHTML('./design.html', response);
				break;
			default:
				response.writeHead(404);
				response.write('Route not defined');
				response.end();

		}

	}
};


/*
const http = require('http')
const fs = require('fs')
const port = 3000

const server = http.createServer(function(req, res){
	res.writeHead(200, { 'Content-Type': 'text/html'})
	fs.readFile('index.html', function(error,data){
		if (error){
			res.writeHead(404)
			res.write('Error: File Not Found')
		} else{
			res.write(data)
		}
		res.end()

	})
	

})

server.listen(port, function(error){
	if (error){
		console.log('Something went wrong', error)
	} else{
		console.log ('Server is listening on port' + port)
	}
})
*/