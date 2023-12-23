// Importing the http module 
const http = require("http") 

// Creating server 
const server = http.createServer((req, res) => { 
	// Sending the response 
	res.write("This is the response from the server at port 6022") 
	res.end(); 
}) 

// Server listening to port 3002
server.listen((6022), () => { 
	console.log("Server is Running at 6022"); 
})
