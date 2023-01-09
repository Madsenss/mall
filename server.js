const express = require('express');
const app = express();
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');

app.use(cors());
app.use(express.json());

require('dotenv').config();

MongoClient.connect(process.env.DB_URL, (error, client)=>{

  if(error) return console.log(error);

  app.listen(process.env.PORT, ()=>{
    console.log("server n db start");
  });

});

app.use(express.static(path.join(__dirname, '/client/build')));

app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});