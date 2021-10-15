/* === External Modules === */
const express = require("express");
const methodOverride = require("method-override");



/* === Internal Modules === */

    // === db connections

require("./config/db.connection");

/* === System variables === */

const app = express();
const PORT = 4748;

/* === System configureation === */

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(express.urlencoded({ extended: false}));

app.use(methodOverride("_method"));

/* === Middleware === */

    // == Logger

app.use(function (req, res, next){
    console.log(`${req.method} - ${req.url}`);
    next();
});

/* === Routes === */

    // == defualt routes

    //--- Home ---
app.get("/", function (req, res){
    res.render("./home");
});

    // == utility routes

/* === Server Listener === */

app.listen(PORT, function(){
    console.log(`Listening for client requests on port ${PORT}!`);
});