const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  municipality: {
    title: "Municipio:",
    type: String,
    required: true,
    enum: {
      values: [
        "Ahome",
        "Angostura",
        "Badiraguato",
        "Concordia",
        "Cosalá",
        "Culiacán",
        "Choix",
        "Elota",
        "Escuinapa",
        "El Fuerte",
        "Guasave",
        "Mazatlán",
        "Mocorito",
        "Rosario",
        "Salvador Alvarado",
        "San Ignacio",
        "Sinaloa",
        "Navolato",
      ],
    },
  },
  zip_code: { title: "Código Postal:", type: String },
  neighborhood: { title: "Colonia:", type: String },
  street: { title: "Calle:", type: String },
});

const Address = mongoose.model("Address", addressSchema);
module.exports = { Address, addressSchema };
