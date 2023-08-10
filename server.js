const http = require('http');
const app = require('./app');
const server = http.createServer(app);

server.listen(3001, console.log("server is running on the port 3001"))