#!/usr/bin/env node
// It should subscribe to the channel holberton school channel
// When it receives message on the channel holberton school channel,
// it should log the message to the console
// When the message is KILL_SERVER, it should unsubscribe and quit
import { createClient } from 'redis';

// Create Redis client
const subscriber = createClient();

// On connect
// subscriber.on('connect', function() { WORKS TOO
subscriber.on('connect', () => {
  console.log('Redis client connected to the server');
});

// On error
// subscriber.on('error', function(error) { WORKS TOO
  subscriber.on('error', (error) => { 
  console.error(`Redis client not connected to the server: ${error}`);
});

// Subscribe to holberton school channel
subscriber.subscribe('holberton school channel');

// On message received
// subscriber.on('message', function(channel, message) { WORKS TOO
  subscriber.on('message', (channel, message) => {
  console.log(`${message}`);
  if (message === 'KILL_SERVER') {
    subscriber.unsubscribe();
    subscriber.quit();
  }
});
