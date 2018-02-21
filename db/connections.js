const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dbPath = 'mongodb://localhost/people';
mongoos.Promise = global.Promise;
mongoose.connect(dbPath, { useMongoClient: true});

mongoose.connection.on('connected', connection => {
  console.log("Database connected!");
}); //connecting your database

mongoose.connection.on('error', error => {
  console.log("Database connection failed!");
});//disconnected

