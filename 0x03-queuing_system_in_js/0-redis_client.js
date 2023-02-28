#!/usr/bin/env node
// script that logs to the console "Redis client connected to the server"
//  when the connection to Redis works correctly
// It logs to the console "Redis client not connected to the server: ERROR_MESSAGE"
// when the connection to Redis does not work
import { createClient } from 'redis';

const client = createClient();

client.on('connect', () => {
  console.log('Redis client connected to the server');
});

client.on('error', (error) => {
  console.log(`Redis client not connected to the server: ${error.message}`);
});
