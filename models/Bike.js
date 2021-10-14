const mongoose = require("mongoose");

    const BikeSchema = new mongoose.Schema(
    {
        vin: {
            type: String,
            required: [true, "Don't be lazy!"],
        },
        make: {
            type: String,
            required: [true, "Input Manufacturer."],
        },
        model: {
            type: String,
            required: [true, "Don't forget to include the trim level!"],
        },
        year: {
            type: Number,
            required: [true, "if you don't know how are you going to order parts?"]
        },
        image: {
            type: String,
        },
        mileage: {
            type: Number,
            required: [true, "how many miles did it have when you bought it?"],
        },
        owned: { type: Boolean,
        required: [true, "This ones easy, do you own the bike (true / false)?"] 
        }
    },
    { timestamps: true}
);

const Bike = mongoose.model("Bike", BikeSchema);

module.exports = Bike; 