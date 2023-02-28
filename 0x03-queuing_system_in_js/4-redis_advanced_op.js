#!/usr/bin/env node
// Create Hash:
// Using hset, let’s store the following:
// - The key of the hash should be HolbertonSchools
// - It should have a value for:
//  - Portland=50
//  - Seattle=80
//  - New York=20
//  - Bogota=20
//  - Cali=40
//  - Paris=2
// - Make sure you use redis.print for each hset
// Display Hash:
// Using hgetall, display the object stored in Redis. 
import redis from 'redis';

const client = redis.createClient();

client.on('connect', () => {
  console.log('Redis client connected to the server');
});

client.on('error', (error) => {
  console.error(`Redis client not connected to the server: ${error}`);
});

// Create a hash using hset
const createHash = () => {
  const hashKey = 'HolbertonSchools';
  client.hset(hashKey, 'Portland', 50, redis.print);
  client.hset(hashKey, 'Seattle', 80, redis.print);
  client.hset(hashKey, 'New York', 20, redis.print);
  client.hset(hashKey, 'Bogota', 20, redis.print);
  client.hset(hashKey, 'Cali', 40, redis.print);
  client.hset(hashKey, 'Paris', 2, redis.print);
};

// Display hash object using hgetall
const displayHash = () => {
  const hashKey = 'HolbertonSchools';
  client.hgetall(hashKey, (error, object) => {
    if (error) console.error(error);
    console.log(object);
  });
};

// Call the functions
createHash();
displayHash();
