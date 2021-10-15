// Base URL === /bikes

const express = require("express");
const router = express.Router();

const { Bike } = require("../models");

router.get("/help", function (req, res) {
    res.send("help");
  });


router.get("/", async function(req, res){
    try {
        const allBikes = await Bike.find({});
        const context = {
            bikes: allBikes,
        };
        return res.render("bikes/show", context);
    }
    catch(error){
        console.log(error);
    };
});


module.exports = router;