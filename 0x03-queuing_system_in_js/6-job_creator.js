#!/usr/bin/env node
import { createQueue } from 'kue';

// Create queue
const queue = createQueue({name: 'push_notification_code'});

// Job data
const jobData = {
  phoneNumber: '0707240068',
  message: 'Hello, this is the job data!'
};

// Create job
const job = queue.create('push_notification_code', jobData);

job
  // When job is created without error, log to the console 
  // "Notification job created: JOB ID"
  .on('enqueue', function() {
    console.log(`Notification job created: ${job.id}`);
  })
  // When job is completed, log to the console "Notification job completed"
  .on('complete', function() {
    console.log('Notification job completed');
  })
  // When job is failing, log to the console "Notification job failed"
  .on('failed', function() {
    console.log('Notification job failed');
  })
  
  .save(function(error) {
    if (error) {
      console.log('Error creating job:', error);
    }
  });