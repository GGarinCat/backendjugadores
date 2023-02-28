const { Schema, model } = require("mongoose");

const JugadoresSchema = new Schema({
  playerName: {
    type: "string",
    required: [true, "El nombre del jugador es obligatorio"],
  },
  playerPosition: {
    type: "string",
    required: [true, "La posición del jugador es obligatoria"],
  },
});

module.exports = model("Jugador", JugadoresSchema);
