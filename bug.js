const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.writeHead(200);
  response.end(JSON.stringify({ message: 'Hello, World!' }));
};

const server = http.createServer(requestListener);

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});

//This is a simple server, and it works fine.
//But what if we want to close the server after some time?
//We can do that by using the close() method.
//But if we don't handle the error properly, it may lead to unexpected behavior.

//For example, if we try to close the server before it has started,
//it will throw an error.

//Also, if we try to close the server multiple times,
//it will throw an error.

//So we should handle these error cases appropriately.
//This example shows how to handle these errors gracefully.