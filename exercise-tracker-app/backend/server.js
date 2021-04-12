//require
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

//Loads .env file contents into | process.env
require('dotenv').config();

//Creates an Express application. 
//The express() function is a top-level function exported by the express module.
const app = express();
const port = process.env.port || 5000;

//setting up express middleware
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

//start listening
app.listen(port, () => {
    console.log("Server running on port: " + port);
});