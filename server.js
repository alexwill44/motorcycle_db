/* === External Modules === */
const express = require("express");



/* === Internal Modules === */

// === db connections

/* === System variables === */

const app = express();
const PORT = 4748;

/* === System configureation === */

/* === Middleware === */

/* === Routes === */

// == defualt routes

//--- Home ---
app.get("/", function (req, res){
    res.send("Turn The Key");
});

// == utility routes

/* === Server Listener === */

app.listen(PORT, function(){
    console.log(`Listening for client requests on port ${PORT}!`);
});