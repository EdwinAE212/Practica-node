const mongoose = require("mongoose");

const VehiculoSchema = new mongoose.Schema({
    name: { type : String, required: true },
    model: { type : String, required: true },
    manufacturer: String,
    length: Number,
    passengers: Number,
    max_atmosphering_speed: Number,
    cargo_capacity: Number,
    consumables: String

}, { timestamps: true });

module.exports = mongoose.model("Vehiculo", VehiculoSchema);