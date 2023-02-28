#!/usr/bin/env node
// Write a function named publishMessage:
//  - It will take 2 arguments: message (string), and time (integer - in ms)
//  - After time millisecond:
//    - The function should log to the console About to send MESSAGE
//    - The function should publish to the channel holberton school channel,
//      the message passed in argument after the time passed in arguments
// At the end of the file, call:
//  - publishMessage("Holberton Student #1 starts course", 100);
//  - publishMessage("Holberton Student #2 starts course", 200);
//  - publishMessage("KILL_SERVER", 300);
//  - publishMessage("Holberton Student #3 starts course", 400);
import { createClient } from 'redis';

// Create Redis client
const publisher = createClient();

// On connect
publisher.on('connect', () => {
  console.log('Redis client connected to the server');
});

// On error
publisher.on('error', (error) => {
  console.error(`Redis client not connected to the server: ${error}`);
});

// Function to publish message after a certain time
const publishMessage = (message, time) => {
  // setTimeout(function() { WORKS TOO
  setTimeout(() => {
    console.log(`About to send ${message}`);
    publisher.publish('holberton school channel', message);
  }, time);
}

// Publish messages
publishMessage('Holberton Student #1 starts course', 100);
publishMessage('Holberton Student #2 starts course', 200);
publishMessage('KILL_SERVER', 300);
publishMessage('Holberton Student #3 starts course', 400);
