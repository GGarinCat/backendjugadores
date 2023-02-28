const { Router } = require("express");
const {
  getPlayers,
  createPlayer,
  deletePlayer,
  updatePlayer,
} = require("../controllers/jugadores.controllers");

const router = Router();

//Vamos a utilizar la constante y le asignamos su controlador
router.get("/gabriel", getPlayers);
router.post("/gabriel", createPlayer);
router.delete('/gabriel/:id', deletePlayer);
router.put('/gabriel/:id', updatePlayer);


module.exports = router;
