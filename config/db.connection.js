const mongoose = require("mongoose");

const MONGODB_URI = "mongodb://localhost:27017/motorcycle_db" 

mongoose.connect(MONGODB_URI);

// -- connection listeners

mongoose.connection.on("connected", function (){
    console.log("\x1b[36m%s\x1b[0m",
    `[${new Date().toLocaleTimeString()}] - MongoDB fired up ... `);
});

mongoose.connection.on("error", function(){
   console.log( "\x1b[31m%s\x1b[0m", "MongoDB hit a bump in the road ", error);
});

mongoose.connection.on("disconnected", function(){
    console.log("\x1b[33m%s\x1b[0m", "MongoDB hit the kill switch");
});