const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.writeHead(200);
  response.end(JSON.stringify({ message: 'Hello, World!' }));
};

const server = http.createServer(requestListener);

let isClosing = false;

const closeServer = () => {
  if (isClosing) return;
  isClosing = true;

  if (server.listening) {
    server.close((err) => {
      if (err) {
        console.error('Error closing server:', err);
      } else {
        console.log('Server closed successfully');
      }
    });
  } else {
    console.log('Server not started yet or already closed.');
  }
};

// Start the server
server.listen(8080, () => {
  console.log('Server is running on port 8080');
  //Simulate closing after 5s
  setTimeout(closeServer, 5000);
});

//Simulate attempting to close before it starts
//closeServer();

//Simulate attempting to close twice
//setTimeout(closeServer, 6000);
//setTimeout(closeServer, 7000); 