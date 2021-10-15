require("../config/db.connection");

const { bike } = require("../controllers");

const Bike = require("../models/Bike");

const bikes = [
    {
        vin: "ZDM1SB3R92B011742",
        make: "Ducati",
        model: "748s",
        year: 2002,
        image: "https://i.imgur.com/aJwyI3s.jpg",
        mileage: 31788,
        owned: true,
    },
];

const reseedBikes = async function ressedBikes (){
    try{
        const deletedBikes = await Bike.deleteMany({});
        const createdBikes = await Bike.insertMany(bikes);
        console.log(" === Seed Bike DB Complete ===");
        console.log(createdBikes);
    }catch(error){
        console.log(error);
    }
};

reseedBikes();