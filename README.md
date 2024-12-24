# Unhandled error when closing Node.js server

This repository demonstrates a common error in Node.js server programming: improper handling of server closure.  The `bug.js` file showcases the problem, while `bugSolution.js` presents a robust solution.

## Problem

Attempting to close a Node.js HTTP server before it starts or closing it multiple times leads to unhandled errors, potentially causing unexpected application behavior or crashes. 

## Solution

The solution involves carefully checking the server's state before attempting closure and handling potential errors gracefully.  The provided example uses `server.listening` to verify the server's active state and employs error handling to catch and manage exceptions.