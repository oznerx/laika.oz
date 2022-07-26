const mongoose = require("mongoose");
const { milisecondsToAge, transformToUTCDate } = require("../lib/utils");
const { appointmentSchema } = require("./appointment");
const { eventSchema } = require("./event");
const { homeSchema } = require("./home");
const { rescueSchema } = require("./rescue");

const animalSchema = new mongoose.Schema({
  petco_id: {
    title: "Petco ID:",
    type: Number,
  },
  name: {
    title: "Nombre:",
    type: String,
    required: true,
  },
  alias: { title: "Apodo:", type: String },
  birth_date: {
    title: "Fecha de Nacimiento:",
    type: Date,
    required: true,
  },
  species: {
    title: "Especie:",
    type: String,
    required: true,
    enum: {
      values: ["Perro", "Gato", "Otro"],
    },
  },
  color: {
    title: "Color:",
    type: String,
    required: true,
    enum: {
      values: [
        "Blanco",
        "Negro",
        "Café",
        "Parcino",
        "Siamés",
        "Atigrado",
        "Otro",
      ],
    },
  },
  sex: {
    title: "Sexo:",
    type: String,
    required: true,
    enum: {
      values: ["Macho", "Hembra", "Otro"],
    },
  },
  status: {
    title: "Estatus:",
    type: String,
    required: true,
    enum: {
      values: ["Activo", "Adoptado", "Fallecido"],
    },
  },
  particular_signs: { title: "Señas Particulares:", type: String },
  photos: [String],
  rescue: rescueSchema,
  homes: [homeSchema],
  appointments: [appointmentSchema],
  events: [eventSchema],
});

animalSchema.virtual("age").get(function () {
  const today = transformToUTCDate(new Date());
  const { birth_date } = this;

  return milisecondsToAge(today - birth_date);
});

const Animal = mongoose.model("Animal", animalSchema);
module.exports = { Animal };
