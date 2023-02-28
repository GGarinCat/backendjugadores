const Jugador = require("../models/jugadores");

const getPlayers = async (_, res) => {
  try {
    const players = await Jugador.find();
    res.status(200).json({
      ok: true,
      players,
    });
    console.log(players);
  } catch (error) {
    console.log(error);
  }
};

const createPlayer = async (req, res) => {
  try {
    const player = new Jugador(req.body);
    await player.save();
    res.status(200).json({
      ok: true,
      player,
    });
  } catch (error) {
    console.log(error);
  }
};

const deletePlayer = async (req, res) => {
  try {
    const playerId = req.params.id;
    const deletedPlayer = await Jugador.findByIdAndDelete(playerId);
    if (!deletedPlayer) {
      return res.status(404).json({ ok: false, message: "Jugador no encontrado" });
    }
    res.status(200).json({ ok: true, message: "Jugador eliminado de la BD" });
  } catch (error) {
    console.log(error);
  }
};

const updatePlayer = async (req, res) => {
  try {
    const playerId = req.params.id;
    const updatedPlayer = await Jugador.findByIdAndUpdate(playerId, req.body, { new: true });
    if (!updatedPlayer) {
      return res.status(404).json({ ok: false, message: "Jugador no encontrado" });
    }
    res.status(200).json({ ok: true, updatePlayer });
  } catch (error) {
    console.log(error);
  }
};


module.exports = { getPlayers, createPlayer, deletePlayer, updatePlayer };
