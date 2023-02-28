#!/usr/bin/env node
// script that logs to the console "Redis client connected to the server"
//  when the connection to Redis works correctly
// It logs to the console "Redis client not connected to the server: ERROR_MESSAGE"
// when the connection to Redis does not work
// Add two functions: setNewSchool and displaySchoolValue
import { createClient, print } from 'redis';

const client = createClient();

client.on('connect', () => {
  console.log('Redis client connected to the server');
});

client.on('error', (error) => {
  console.log(`Redis client not connected to the server: ${error.message}`);
});

// it should set in Redis the value for the key schoolName
// it should display a confirmation message using redis.print
const setNewSchool = (schoolName, value) => {
  // redis.print function used as the callback for client.set which will
  // log the confirmation message
  client.set(schoolName, value, print);
}
// it should log to the console the value for the key passed as argument
const displaySchoolValue = (schoolName) => {
  // for client.get, we've used a callback function that handles any errors
  // and logs the value of the key
  client.get(schoolName, (err, reply) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log(reply);
  });
}
// call displaySchoolValue with the Holberton key
displaySchoolValue('Holberton');
// add a new key-value pair using setNewSchool with HolbertonSanFrancisco
// as the key and 100 as the value
setNewSchool('HolbertonSanFrancisco', '100');
// call displaySchoolValue again with the new key.
displaySchoolValue('HolbertonSanFrancisco');
